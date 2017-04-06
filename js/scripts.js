(function(){
//Business -logic
  const WINNINGCOMBINATIONS =
  [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7],
  ];


  const numberGenerator = function() {
    return Math.ceil(Math.random() * 9);
  }

  const Game = function() {}

  Game.prototype.isWon = function(playerPositions) {
    return WINNINGCOMBINATIONS.some(function(combination){
      return combination.every(function(number){
        return playerPositions.includes(number);
      });
    });
  }

  class Board {
    constructor() {
      this.usedPositions = [];
      this.playerXBoard = [];
      this.playerOBoard = [];
    }
    assignValues(square){
      this.usedPositions.push(square.position);
      if(square.player === "x" ){
        this.playerXBoard.push(square.position);
      } else {
        this.playerOBoard.push(square.position);
      }
    }
  }

  class Square {
    constructor(playerValue,positionValue){
      this.player = playerValue;
      this.position = positionValue;
    }
  }

  const resetGame = function(){
    $(".gameSquare").each(function(){
      $(this).html("");
    });
    $("#gameResultsDisplay").text("");
    board = new Board;
  }

// UI
  $(document).ready(function(){

    let usedSquares = 0;
    const game = new Game;
    let board = new Board;

    $(".gameSquare").click(function(){
      let player = "";
      let position = $(this).attr("id");

      if (player === "x" || player === "o") {
        alert("that square is in use");
      } else {
        usedSquares % 2 === 0 ? $(this).text("x") : $(this).text("o");
        player = $(this).html();
        usedSquares++;
      }

      square = new Square(player, Number(position));
      board.assignValues(square);
      if (game.isWon(board.playerXBoard)) {
        $("#gameResultsDisplay").text("player x won!");
        board = new Board;
      };
      if (game.isWon(board.playerOBoard)) {
        $("#gameResultsDisplay").text("player o won!");
      };

    });

    $("#resetButton").click(function(){
      resetGame();
    })



  });







})();
