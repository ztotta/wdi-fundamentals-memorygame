//connected JS file to html  file, and created values for the cards

//var cardOne = "queen";
//var cardTwo = "queen";
//var cardThree = "king";
//var cardFour = "king";



var cards = ['queen', 'queen', 'king', 'king'];

var cardsInPlay = []; 

var board = document.getElementById('game-board');

function createBoard() {
  for (var i=0; i<cards.length; i++) {

    var cardElement = document.createElement('div');

    cardElement.className = 'card';

    cardElement.setAttribute('data-card', cards[i]);

    cardElement.addEventListener('click', isTwoCards);

    board.appendChild(cardElement);
    board.appendChild(cardElement);

  }
}

function isTwoCards() {

	cardsInPlay.push(this.getAttribute('data-card'));

	console.log(this.getAttribute('data-card'));

	if (this.getAttribute('data-card') === 'queen') {
    	this.innerHTML = "<img src='https://pixabay.com/static/uploads/photo/2013/05/11/08/23/playing-card-110300__480.jpg'>";
    }
    else {
    	this.innerHTML = "<img src='http://totalnonsense.com/b-w_king.png'>";
    }

	if (cardsInPlay.length === 2) {

    isMatch(cardsInPlay);

    cardsInPlay = [];

  	}
};

function isMatch(cards) {
	if (cards[0] === cards[1]) {
		alert("You found a match!");
	} 
	else {
		alert("Sorry, try again!");
	} 
};

createBoard();

