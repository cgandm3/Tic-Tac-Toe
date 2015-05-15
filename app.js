var scoreX = 0;
var scoreO = 0;
var box = document.getElementsByClassName("box");
//console.log(box);

var winningCombos = [
["1","2","3"], 
["4","5","6"], 
["7","8","9"], 
["1","4","7"],
["2","5","8"],
["3","6","9"],
["1","5","9"],
["3","5","7"]];

var allmoves = [];

var moves = {
  "X": [],
  "O": []
}

var which = "X"

window.addEventListener("load", function() {
  inputMoves();
});


function inputMoves() {
//listen for a click on any box and push the box number into
//an array depending on whose turn it is and an array for all moves
//    console.log("start inputMoves");
    for(var i = 0; i < box.length; i++) {
//        console.log("loop called");
        box[i].addEventListener('click', function(m) {
            this.innerHTML = which;
            moves[which].push(m.target.id);
 //           console.log(moves);
            allmoves.push(m.target.id);
            // console.log(allmoves);
            // console.log(moves.X);
            // console.log(moves.O);
            if (
              hasWinningCombo(moves[which], winningCombos) == true
              ){
                 alert(which + " wins");
                // console.log("waiting");
                 clearBoard(); 
                 return;
               }  
            else if (
                  allmoves.length === 9
                 ){ 
                    alert("it's a tie!");
                    //console.log("waiting");
                    clearBoard();
                    return;
                  } 
            if (
              which === "X"
              ){
                which = "O"
            } else { 
                which = "X"
            } 
      //console.log(which);                     
    });
   } 
  }

function hasWinningCombo(playerMoves, winningCombos) {
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

// function clearBoardClick() {
//  
//   document.getElementById("clear").addEventListener('click', function() {
//         for (var i = 0; i < box.length; i++) 
//         {
//           box[i].innerHTML= "";
//         };
//       });
// }

function clearBoard() {
//initialze all arrays and set which variable to X
        allmoves = [];
        moves.X = [];
        moves.O = [];
        which = "X"
        //console.log(moves.X);
        //console.log(moves.O);
        for (var i = 0; i < box.length; i++) 
        {
            box[i].innerHTML= "";
        };
      };
