//connected JS file to html  file, and created values for the cards

var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

//if (cardOne === cardTwo) {
//	alert("You found a match!");
//} else {
//	alert("Sorry, try again!");
//}

// find the board and set it to a variable
// so that we can add cards to it
var board = document.getElementById('game-board');

// function that will create your board
function createBoard() {
  // loop through your cards array to create card elements for your board
  for (var i=0; i<cards.length; i++) {

    var cardElement = document.createElement('div');

    cardElement.className = 'card';

    board.appendChild(cardElement);
  }

}; 