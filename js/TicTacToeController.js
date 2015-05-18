angular
	.module("TicTacToeApp")
		.controller("TicTacToeController", TicTacToeController);

 TicTacToeController.$inject = ['$firebaseObject'] 

function TicTacToeController($firebaseObject, $index) {
  var self = this;
  var counter = 1;
  //self.TTT links up to firebase
  self.ttt = getTTT();
  //self.board contains the boxes
  self.board = buildBoard();
  //self.gamePlay is the main game logic
  self.gamePlay = gamePlay;

  var winningCombos = [
  [1, 2, 3], 
  [4, 5, 6], 
  [7, 8, 9], 
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7]];

  var allmoves = [];

  var moves = {
    "X": [],
    "O": []
  }

  var which = "X"
  var timeout 

  //getTTT function links up to firebase
  function getTTT(){
    //ref equates to the Firebase database
    var ref = new Firebase("https://tic-tac-toe-sfs.firebaseio.com");
    //ttt refers itself to the firebase object
    var ttt = $firebaseObject(ref);
      return ttt;
  };
  //buildBoard contains the boxes
  function buildBoard(){
    self.ttt.boxes = [{select: false, status: ""},
                  {select: false, status: ""},
                  {select: false, status: ""},
                  {select: false, status: ""},
                  {select: false, status: ""},
                  {select: false, status: ""},
                  {select: false, status: ""},
                  {select: false, status: ""},
                  {select: false, status: ""}];
        self.ttt.$save();
  }
  //gamePlay is the main game logic
  function gamePlay($index){
    //when a box is clicked see if has been clicked already
    if (
      self.ttt.boxes[$index].select === true
      ) {
      alert("square taken")
    } else {//else set the box status to true
        self.ttt.boxes[$index].select = true
        if (counter % 2 != 0) {//if it's player one's turn 
          self.ttt.boxes[$index].status = "X";
          // use which because self.ttt.boxes[$index].status 
          //is too long        
          which = self.ttt.boxes[$index].status;
          moves[which].push($index + 1);
          allmoves.push($index + 1);
          counter++;
        } else {
          self.ttt.boxes[$index].status = 'O';
          which = self.ttt.boxes[$index].status;
          moves[which].push($index + 1);
          allmoves.push($index + 1);
          counter++;
        }
          if (
          checkWin(moves[which], winningCombos) == true
          ) {
          alert(which + " wins");
          clearBoard();
        } else if (
                allmoves.length === 9
                ){
                    alert("It's a tie!");
                    clearBoard();
                 }
    }
        self.ttt.$save();
  }


function timeOut() {
    timeout = setTimeout(alertFunc, 200);
}

function alertFunc() {
    alert(which + " wins");
}    

function checkWin(playerMoves, winningCombos) {
//check the moves made by x or o against the winningcombos array
  for(var i = 0; i < winningCombos.length; i++) {
      if (
          playerMoves.indexOf(winningCombos[i][0]) >= 0
          && playerMoves.indexOf(winningCombos[i][1]) >= 0
          && playerMoves.indexOf(winningCombos[i][2]) >= 0
          ){
              return true;
      }
  }
  return false;
}

function clearBoard() {
//initialze all arrays and set which variable to X and counter to 1
        allmoves = [];
        moves.X = [];
        moves.O = [];
        which = "X"
        counter = 1;
        for (var i = 0; i < self.ttt.boxes.length; i++) 
        {
            self.ttt.boxes[i].status = "";
            self.ttt.boxes[i].select = false;
        };
      };
}