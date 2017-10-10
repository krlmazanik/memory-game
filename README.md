# smallMemoryGame

## Description:
This game was created as a training exercise found on the Internet.

## Objectives:
* Create a board which will be represented as 4x4 cell board.
*	Every second cell should have a color pair.
* Create a gameplay, sequence of turns. During the turn a user picks 2 cards. If the user picks 2 cards with same color they dissapear or take inactive state. Otherwise, 2 picked cards return to the 'closed state'. When the user opened all the cards the game is considered as finished.

## What the result looks like:
* Initial state of the game.
![Initial state](http://res.cloudinary.com/krlmazanik/image/upload/v1506944472/Initial%20state%20of%20the%20game.png)
* When two cards of the same color were picked: 
	* Active state of the cards
	![Picked State](http://res.cloudinary.com/krlmazanik/image/upload/v1506945897/gamescreen2_wbxoy7.png)
	* Same cards take were turned down. The counter changes the value.
	![Postpicked State](http://res.cloudinary.com/krlmazanik/image/upload/v1506946051/gamescreen3_xjbfjo.png)
* Two cards of different colors were picked:
	* Active state of the cards.
	![Picked State of different cards](http://res.cloudinary.com/krlmazanik/image/upload/v1506946496/gamescreen4_tfo7bf.png)
	* The picked cards of different color changes the state to 'closed'.
	![Cards return to the closed state](http://res.cloudinary.com/krlmazanik/image/upload/v1506946678/gamescreen5_h16t2r.png)
* All cards were open. After alert box, the game returns to the turn 1(Initial state of the game.)
![Screen of the end of the game](http://res.cloudinary.com/krlmazanik/image/upload/v1506947323/gamesceenlast_epzhvp.png)

## What could be done to improve the game:
* Randomly generate colored cells.
* Ask the user to choose the board size.
* Change background image, in order to 'open' an image, coming to the end of the game.
	* Change image from created collection randomly.
* Change the colors to images, in order to increase interactivity of the game.

