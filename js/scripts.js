(function(){

  const WINNINGCOMBINATIONS = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]];


  class Game {
    isWon(){
      //return true or false
      //game.isWon(board) = player1 or player2 || false
    }
  }

  class Board {
    constructor() {
      this.playerXBoard = [];
      this.playerOBoard = [];
    }
    assignValues(square){
      if(square.player === "X" ){
        this.playerXBoard.push(square.position);
      } else {
        this.playerOBoard.push(square.position);
      }
    }
  }

    // include the array of positions that the player has accumulated


  class Players {
    constructor(token) {
      this.player1 = (token);
      this.player2 = this.otherToken(token);
    }
    otherToken(token){
      return token === "X" ? "O" : "X"; // X or O
    }
  }



  class Square {
    constructor(playerValue,positionValue){
      this.player = playerValue;
      this.position = positionValue;
    }
  }

  //


  // squareMethod(player,square){
  //   let square = new Square(player);
  //   return square = new Board()
  //
  // }


  let square = new Square("X", 2);
  let board = new Board;
  board.assignValues(square);
  alert(board.playerXBoard);

})();
