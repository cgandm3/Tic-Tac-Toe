// Step 4 - create a controller and connect it to our module
angular
	.module("ticTacToeApp")
		.controller("TicTacToeController", TicTacToeController)

   TicTacToeController.$inject = ['$firebaseObject'] 

function TicTacToeController($firebaseObject) {

	var self = this;
  self.tictactoe = (function () {
    var ref = new Firebase("https://tic-tac-toe-sfs.firebaseio.com");
    var tictactoe = $firebaseObject(ref);
    return tictactoe;
  })();

