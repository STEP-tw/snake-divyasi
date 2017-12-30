const Game = function(numberOfRows, numberOfCols) {
  this.rows = numberOfRows;
  this.cols = numberOfCols;
  this.snake = {};
}

Game.protype.createFood = function() {
  food=generateRandomPosition(this.rows,this.cols);
};


Game.prototype.hasSnakeTouchBorder = function(position) {
 let maxCoordX = numberOfRows-1;
 let maxCoordY = numberOfCols-1;
 return !position.isInMinAndMaxCoords(maxCoordX, maxCoordY);
};
