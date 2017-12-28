const Game = function(numberOfRows, numberOfCols) {
  this.rows = numberOfRows;
  this.cols = numberOfCols;
  this.snake = {};
}

Game.protype.createFood = function() {
  food=generateRandomPosition(this.rows,this.cols);
};
