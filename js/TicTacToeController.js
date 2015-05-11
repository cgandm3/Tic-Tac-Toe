// Step 4 - create a controller and connect it to our module
angular
	.module("ticTacToeApp")
		.controller("TicTacToeController", TicTacToeController)

function TicTacToe() {
// Step 5 - in our controller do "variable capture"
// this is a JS rederved word, in "this" instance it is referring to TicTacToeController
// www.w3schools.com/js/js_reserved.asp
// we attach it to the variable "self" for good practice
	var self = this;
	self.board = [
    	[ { value: "" }, { value: "" }, { value: "" } ],
    	[ { value: "" }, { value: "" }, { value: "" } ],
    	[ { value: "" }, { value: "" }, { value: "" } ]
  	];

   function reset() {
    for(var i = 0; i < board.length; i++) {
        self.value = "";
      };
    self.player = true;
    self.winner = false;
    self.cat = false;
    };
    
  };

