let snake=undefined;
let food=undefined;
let numberOfRows=60;
let numberOfCols=120;
let position = new Position(numberOfRows, numberOfCols, randomDirection());

let animator=undefined;

const animateSnake=function() {
  let oldHead=snake.getHead();
  let oldTail=snake.move();
  let head=snake.getHead();
  paintBody(oldHead);
  unpaintSnake(oldTail);
  paintHead(head);
  stopGame();
  if(head.isSameCoordAs(food)) {
    snake.grow();
    createFood(numberOfRows,numberOfCols);
    drawFood(food);
  }
}

const changeSnakeDirection=function(event) {
  switch (event.code) {
    case "KeyA":
      snake.turnLeft();
      break;
    case "KeyD":
      snake.turnRight();
      break;
    case "KeyC":
      snake.grow();
      break;
    default:
  }
}

const addKeyListener=function() {
  let grid=document.getElementById("keys");
  grid.onkeyup=changeSnakeDirection;
  grid.focus();
}

const createSnake=function() {
  let tail=new Position(12,10,"east");
  let body=[];
  body.push(tail);
  body.push(tail.next());
  let head=tail.next().next();

  snake=new Snake(head,body);
}

const createFood=function(numberOfRows,numberOfCols) {
  food=generateRandomPosition(numberOfCols,numberOfRows);
}

 const stopGameWhenSnakeTouchBorder = function(snake) {
  let head = snake.getHead();
  if(snake.head.x >= numberOfRows || snake.head.x < 0) {
    return removeInterval();
  }
  if (snake.head.y >= numberOfCols || snake.head.y < 0) {
    return removeInterval();
  }
}

const stopGameWhenSnakeAteItself = function() {
  let head = snake.getHead();
  return position.isSameCoordAs(head);
}

const reloadGame = function() {
  window.location.reload();
}

const removeInterval = function() {
  clearInterval(animator);
  document.getElementById('grid').innerHTML = `game over`
}

const stopGame = function() {
  return stopGameWhenSnakeAteItself() || stopGameWhenSnakeTouchBorder()
}

const startGame=function() {
  createSnake();
  drawGrids(numberOfRows,numberOfCols);
  drawSnake(snake);
  createFood(numberOfRows,numberOfCols);
  drawFood(food);
  addKeyListener();
  animator=setInterval(animateSnake,70);
}

window.onload=startGame;
