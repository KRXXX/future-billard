const SIZE = 600;
const MAX = SIZE - 25;
const MIN = 25;
const TEXT_SIZE = 48;
const MIDDLE = SIZE / 2;
const BALL_SIZE = 50;

let points = 0;

const coords = {
    x: 200,
    y: 200,
    dir_x: 1,
    dir_y: 1,
}

function setup () {
  createCanvas(SIZE, SIZE)
}

function draw () {
    // kolory
    background('#593cd2')
    fill('#d64846')

    // bramka
    rect(MIDDLE - 100, 50, 200, 15)

    // kula
    ellipse(coords.x, coords.y, 50, 50)
  
    // punkty
    textFont('Montserrat')
    textSize(TEXT_SIZE)
    text(points, 10, 10, SIZE)

    if (Math.abs(coords.y - 50 + 15 / 2) < BALL_SIZE / 2
        && coords.x > MIDDLE - 100
        && coords.x < MIDDLE + 100) {
        handleHit()
    }

    // ruch kulki
    coords.x += ~~(Math.random() * 5) * coords.dir_x
    coords.y += ~~(Math.random() * 5) * coords.dir_y

    // odbicie od rogu
    if (coords.x > MAX || coords.x < MIN) changeDir('x') 
    if (coords.y > MAX || coords.y < MIN) changeDir('y')
}

function changeDir (coord) {
    coords['dir_' + coord] *= -1
}

function handleHit () {
    console.log('hit', coords)
    points++
    coords.x = MIDDLE - BALL_SIZE / 2
    coords.y = MIDDLE - BALL_SIZE / 2
}