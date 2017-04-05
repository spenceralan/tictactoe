(function(){
//Business -logic
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
    isWon(playerPositions){
      let didTheyWin;
      for(let c=0; c < WINNINGCOMBINATIONS.length; c++){
        let winningArray= [];
        for(let n=0; n < WINNINGCOMBINATIONS[c].length; n++){
          let number = (WINNINGCOMBINATIONS[c])[n];
          if(playerPositions.includes(number)){
            winningArray.push(number);
          }
          if(winningArray.toString() === (WINNINGCOMBINATIONS[c]).toString()){
            didTheyWin = true;
          }
        }
      }
      return !!didTheyWin;
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

  // squareMethod(player,square){
  //   let square = new Square(player);
  //   return square = new Board();
  // }

//UI
  $(document).ready(function(){
   var
    });

  });







})();
