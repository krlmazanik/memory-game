var colorPick = [
	'orange', 
	'yellow', 
	'gray', 
	'brown', 
	'blue', 
	'green', 
	'red', 
	'purple'
];
colorPick.forEach(function(color){colorPick.push(color)});
var chosenDiv = document.querySelectorAll('.closed');
var openedCells;

function shuffleColors(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function setUpCells() {
	shuffleColors(colorPick);
	for (var i = 0; i < chosenDiv.length; i++) {
		chosenDiv[i].style.backgroundColor = colorPick[i];
		chosenDiv[i].setAttribute('col-atr', colorPick[i]); 
		chosenDiv[i].addEventListener("click", setUpLogic); 
	}
}

function setUpLogic() {
	if (this.classList.contains('closed')) {
		this.classList.remove("closed");
		this.classList.add("opened");
		openedCells = document.querySelectorAll('.opened');
		if (openedCells.length === 2) {
			let firstEl = openedCells[0].getAttribute('col-atr');
			let secondEl = openedCells[1].getAttribute('col-atr');
			if (firstEl === secondEl) {
				for (let i = 0; i < openedCells.length; i++) {
					openedCells[i].removeEventListener('click', false);
					openedCells[i].style.backgroundColor = '';
					openedCells[i].classList.remove('opened');
					} 
				} else {
						for (let i = 0; i < openedCells.length; i++){
							setTimeout(function() {
								openedCells[i].classList.add('closed');
								openedCells[i].classList.remove('opened');
							}, 500);
						}
					}
		}
	}
};

setUpCells();