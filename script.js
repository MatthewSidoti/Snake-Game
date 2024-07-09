// Create Board
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
  // specify the size/width/length of board grid/canvas size
  const grid=20;
  const count=0;
  //specify where the snake will start and what direction  it will start moving 
  let snake = {
    x: 10,
    y: 10,
  
    // snake velocity. moves one grid length every frame in either the x or y direction
    dx: grid,
    dy: 0,
  
    // keep track of all grids the snake body occupies
    cells: [],
  
    // length of the snake. grows when eating an apple
    maxCells: 4
  };
  let food = {
    x: 5,
    y: 5
  };
  
  function draw() {
    gameCanvas.innerHTML = '';

    // Draw snake
    snake.forEach(segment => {
      const snakeElement = document.createElement('div');
      snakeElement.style.left = `${segment.x * grid}px`;
      snakeElement.style.top = `${segment.y * grid}px`;
      snakeElement.classList.add('snake');
      gameBoard.appendChild(snakeElement);
  });

   // Draw food
   const foodElement = document.createElement('div');
   foodElement.style.left = `${food.x * grid}px`;
   foodElement.style.top = `${food.y * grid}px`;
   foodElement.classList.add('food');
   gameBoard.appendChild(foodElement);
}
  // randomize where the food will appear on the board
  // let score start at 0


/* I want to specify how big the areana/play area is */

/* I want to specify the borders so if the snake hits the border its game over */

/* 
As a user I want Game Over to pop up on the screen */

/* NTH-As a user I want the high score to always be displayed even if restarting the game */

/* NTH-If high score is beaten show "New High Score" on screen  */

/* NTH-If new high score is not beaten show "Better Luck Next Time" */

/* As a user I want to also have a play button */

/* NTH- As a user I want the choice of difficulty to pop up one being easy medium or difficult. easy will be slower medium will be normal speed and difficult will be fast */

/* Create visual for buttons */

/* Creat visual for the food/blocks that the snake eats */

/* As a user I want the snack to grow by 1 block for every block/food it eats.
//  NTH-Grow by 2 if it eats the bonus item.  */

/* As a user I want a score to show and increase for every block that I eat by 50 points */

/*  NTH-At random times I want a bonus item to show up woth 200 points. I want it to dissappear if not gotten in a certain amount of time */


/* As a user I want a restart button to pop up once I lose */


// In JS I want to specify what buttons control what. I need an up,down,left,right controls.

// In JS I need to create a click function for all my buttons

// Click play

// NTH-Click  Easy

// NTH-Click Medium

// NTH-Click Hard

// Click Restart


/*-------------- Constants -------------*/
// specify the size/width/length of board grid/canvas size
  //specify where the snake will start and what direction  it will start moving 
  // let score start at 0
/*---------- Variables (state) ---------*/
// randomize where the food will appear on the board

/*----- Cached Element References  -----*/


/*-------------- Functions -------------*/

// In JS I need to create a click function for all my buttons

// Click play

//NTH- Click  Easy

// NTH-Click Medium

// NTH-Click Hard

// Click Restart


/*----------- Event Listeners ----------*/

// In JS I want to specify what buttons control what. I need an up,down,left,right controls.

// Create a listener for when the snake hits the boarder or itself the game is over

