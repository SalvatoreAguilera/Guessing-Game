// GLOBAL VARIABLE TO STORE RANDOM NUMBER
let number = null;

// HELPER FUNCTION TO GENERATE A RANDOM NUMBER
function genRandom(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

// TODO #2: Define startGame() and playGame() functions here


// WAIT FOR THE PAGE TO LOAD BEFORE ADDING LISTENERS
window.addEventListener("load", function(){
    
    // TODO #1: Set listeners for buttons here
  const newgame = document.getElementById("newGame");
  newgame.addEventListener("click", startGame);

  const guess = document.getElementById("guessNumber");
  guess.addEventListener("click", playGame);

  function startGame() {
    var clues = document.getElementById("clues");
    number = genRandom(-10,10);

    clues.innerHTML = "The number is between -10 and 10 <br>" ;

    if(number % 2 === 0){
      clues.innerHTML += "The number is even! <br>";
    }
    if(number % 2 !== 0){
      clues.innerHTML += "The number is odd! <br>";
    }
    if(number < 0){
      clues.innerHTML += "The number is negative! <br>";    
    }
    if(number > 0){
      clues.innerHTML += "The number is positive! <br>"
    }

  }

  function playGame() {
    if(number === null){
      window.alert('Click "New Game" first!')
      return;
    }
    
    var guess = window.prompt("Please Enter Your Guess");
    guess = parseInt(guess);

    if(guess === number){
      window.alert("YOU WON!\nThe correct number was " + number);
    }
    else if(guess !== number){
      window.alert("YOU LOSE!\nThe correct number was " + number);
    }
    number = null;
  }

});
