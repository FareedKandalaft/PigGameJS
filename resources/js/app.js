/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer;

scores = [0,0];
roundScore = 0;
activePlayer = 0;

// Using query Selector to select a "class" and then manipulate .class and it's class
document.querySelector('.dice').style.display = 'none';


// you can select by ID exclusively as well
document.getElementById('score-0').textContent = 0;
document.getElementById('score-1').textContent = 0;
document.getElementById('current-0').textContent = 0;
document.getElementById('current-1').textContent = 0;

// Button Events
// There is supposedly some significane about the Scope PAth and also
// The Excecution Context Stack. Jonas says that "Events are not fired until
// the Execution Context is cleared.""
//
// 1. link a event Listener to your control
// 2. Specifiy the event you want to target ex. 'click'
// 3. Then the function (can be named or anonymous) to be triggered
// Roll the Dice!
document.querySelector('.btn-roll').addEventListener('click', function() {
  // Random Number
  var dice = Math.floor(Math.random() * 6) + 1;
  // display the result
  var diceDOM = document.querySelector('.dice');
  diceDOM.style.display = 'block';
  diceDOM.src = 'resources/img/dice-' + dice + '.png';

  // update the round score IF the rolled number was NOT = 1
  if (dice !== 1){
    roundScore += dice;
    document.querySelector('#current-' + activePlayer).textContent = roundScore;
  } else {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;

    // TOGGLE !!! very nice indeed
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    diceDOM.style.display = 'none';
  }
});



// Sample code// // Using querySelector and .textContent to change the value
// document.querySelector('#current-' + activePlayer).textContent = dice;
//
// // Using querySelector and innerHTML to change what html is in the index.html
// document.querySelector('#current-' + activePlayer).innerHTML = "<em>" + dice + "</em>"
//
// // Using querySelector and .textContent to GET a value from the html
// var x = document.querySelector('#score-' + activePlayer).textContent;
