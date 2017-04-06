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
    randomEmptyPosition(){
      let emptyPosition = numberGenerator();
      while (this.usedPositions.includes(emptyPosition)) {
        emptyPosition = numberGenerator();
      }
      return emptyPosition;
    }
  }

  class Square {
    constructor(playerValue,positionValue){
      this.player = playerValue;
      this.position = positionValue;
    }
  }



// UI
  $(document).ready(function(){

    let usedSquares = 0;
    const game = new Game;
    let board = new Board;

    const resetGame = function(){
      $(".gameSquare").each(function(){
        $(this).html("");
      });
      $("#gameResultsDisplay").text("");
      $(".gameDisplay").show();
      board = new Board;
    }

    // $(".gameSquare").click(function(){
    //   let player = $(this).html();
    //   let position = $(this).attr("id");
    //
    //   if (player === "x" || player === "o") {
    //     $("#gameResultsDisplay").text("that square is occupied!");
    //   } else {
    //     usedSquares % 2 === 0 ? $(this).text("x") : $(this).text("o");
    //     player = $(this).html();
    //     usedSquares++;
    //   }
    //
    //   square = new Square(player, Number(position));
    //   board.assignValues(square);
    //   if (game.isWon(board.playerXBoard)) {
    //     $("#gameResultsDisplay").text("player x won!");
    //     board = new Board;
    //   };
    //   if (game.isWon(board.playerOBoard)) {
    //     $("#gameResultsDisplay").text("player o won!");
    //     board = new Board;
    //   };
    //
    // });

    $(".gameSquare").click(function(){
      let player1 = "x";
      let player2 = "o";
      let position = $(this).attr("id");

      if ($(this).html() === "x" || $(this).html() === "o") {
        $("#gameResultsDisplay").text("that square is occupied!");
      } else {
        $("#gameResultsDisplay").empty();
        $(this).text("x")
      }

      let square1 = new Square(player1, Number(position));
      board.assignValues(square1);

      if (board.usedPositions.length < 9) {
        emptySquare = board.randomEmptyPosition();
        $(`#${emptySquare}`).text("o");
        let square2 = new Square(player2, emptySquare);
        board.assignValues(square2);
      }

      if (game.isWon(board.playerXBoard)) {
        $("#gameResultsDisplay").text("player x won!");
        $(".gameDisplay").hide();
        board = new Board;
      };
      if (game.isWon(board.playerOBoard)) {
        $("#gameResultsDisplay").text("player o won!");
        $(".gameDisplay").hide();
        board = new Board;
      };

    });



    $("#resetButton").click(function(){
      resetGame();
    });



  });







})();
