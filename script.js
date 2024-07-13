/*-------------- Constants -------------*/

// Create Board
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
/* I want to specify how big the arena/play area is */
// specify the size/width/length of board grid/canvas size
let grid = 20;
// so snake doesn't take whole grid
let size = canvas.width / grid - 2;
// specify where the snake will start and what direction it will start moving
let snakeX = 10;
let snakeY = 10;

// keep track of all grids the snake body occupies
const snakeBody = [];
let tailLength = 0;

class snakesBody {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}
// set speed
let speed = 6;
//set direction
let inputsXDirection = 0;
let inputsYDirection = 0;

let xDirection = 0;
let yDirection = 0;
//starting food placement
let foodX = 5;
let foodY = 5;

/* As a user I want a score to show and increase for every block that I eat by 50 points */
// let score start at 0
let score = 0;

// gameLoop recall functions
function drawGame() {
  xDirection = inputsXDirection;
  yDirection = inputsYDirection;
  changeSnakePosition();
  let result = isGameOver();
  if (result) {
    return;
  }
  clearCanvas();
  checkFoodCollision();
  drawSnake();
  drawFood();
  drawScore();
// Change speed
  if (score > 300) {
    speed = 9;
  }
  if (score > 900) {
    speed = 11;
  }
// updates the drawGame loop at 1000 ms
  setTimeout(drawGame, 1000 / speed);
}

// functions
function clearCanvas() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}
/* As a user I want the snake to grow by 1 block for every block/food it eats.*/
// length of the snake. grows when eating food
function drawSnake() {
  ctx.fillStyle = "teal";
  for (let i = 0; i < snakeBody.length; i++) {
    let part = snakeBody[i];
    ctx.fillRect(part.x * grid, part.y * grid, size, size);
  }
  ctx.fillStyle = "pink";
  ctx.fillRect(snakeX * grid, snakeY * grid, size, size);
  snakeBody.push(new snakesBody(snakeX, snakeY));
  while (snakeBody.length > tailLength) {
    snakeBody.shift();
  }
}

function changeSnakePosition() {
  snakeX = snakeX + xDirection;
  snakeY = snakeY + yDirection;
}

function drawFood() {
  ctx.fillStyle = "white";
  ctx.fillRect(foodX * grid, foodY * grid, size, size);
}
// randomize where the food will appear on the board
function checkFoodCollision() {
  if (snakeX === foodX && snakeY === foodY) {
    foodX = Math.floor(Math.random() * grid);
    foodY = Math.floor(Math.random() * grid);
    tailLength++;
    score += 50;
  }
}

/* As a user I want a score to show and increase for every block that I eat by 50 points */
function drawScore() {
  ctx.fillStyle = "white";
  ctx.font = "10px Verdana";
  ctx.fillText("Score " + score, canvas.width - 70, 395);
}

/* I want to specify the borders so if the snake hits the border its game over */
/* As a user I want Game Over to pop up on the screen */
function isGameOver() {
  let gameOver = false;

  if (yDirection === 0 && xDirection === 0) {
    return false;
  }

  // walls
  if (snakeX < 0) {
    gameOver = true;
  } else if (snakeX >= grid) {
    gameOver = true;
  } else if (snakeY < 0) {
    gameOver = true;
  } else if (snakeY >= grid) {
    gameOver = true;
  }

  for (let i = 0; i < snakeBody.length; i++) {
    let part = snakeBody[i];
    if (part.x === snakeX && part.y === snakeY) {
      gameOver = true;
      break;
    }
  }

  if (gameOver) {
    ctx.fillStyle = "white";
    ctx.font = "50px Verdana";
    ctx.fillText("Game Over!", canvas.width / 6.5, canvas.height / 2);
  }

  return gameOver;
}

// In JS I want to specify what buttons control what. I need an up, down, left, right controls.
document.body.addEventListener("keydown", keyDown);
// snake direction. moves one grid length every frame in either the x or y direction
function keyDown(event) {
  // up
  if (event.keyCode == 38 || event.keyCode == 87) {
    // 87 is w
    if (inputsYDirection == 1) return;
    inputsYDirection = -1;
    inputsXDirection = 0;
  }

  // down
  if (event.keyCode == 40 || event.keyCode == 83) {
    // 83 is s
    if (inputsYDirection == -1) return;
    inputsYDirection = 1;
    inputsXDirection = 0;
  }

  // left
  if (event.keyCode == 37 || event.keyCode == 65) {
    // 65 is a
    if (inputsXDirection == 1) return;
    inputsYDirection = 0;
    inputsXDirection = -1;
  }

  // right
  if (event.keyCode == 39 || event.keyCode == 68) {
    // 68 is d
    if (inputsXDirection == -1) return;
    inputsYDirection = 0;
    inputsXDirection = 1;
  }
}
/* As a user I want a reset button */
function resetGame() {
  clearTimeout(drawGame);
  snakeX = 10;
  snakeY = 10;
  snakeBody.length = 0;
  tailLength = 0;
  inputsXDirection = 0;
  inputsYDirection = 0;
  xDirection = 0;
  yDirection = 0;
  foodX = 5;
  foodY = 5;
  score = 0;
  speed = 6;
  drawGame();
}

document.getElementById("Reset").addEventListener("click", resetGame);


drawGame();





