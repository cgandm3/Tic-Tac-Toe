var score = 0;
var boxes = document.getElementsByClassName('box');
console.log(boxes);
var player = true

inputMoves();

function randomNumber(){
	return Math.floor(Math.random() * 9);
}

function inputMoves() {
	for(var i = 0; i < boxes.length; i++){
		boxes[i].addEventListener('click', function(){
			if(player === true & this.innerHTML === ""){
				this.innerHTML = "X"; player = false;
			} else if(player === false & this.innerHTML === ""){
				this.innerHTML ="O"; player = true;
			} else {
				alert("Choose an empty space");
			}
			
		}
	);
};
};
