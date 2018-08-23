
var numberInput = document.querySelector('.number-input');
var clearButton = document.querySelector('.clear-button');
var guessButton = document.querySelector('.guess-button');
var numberResult = document.querySelector('.number-result');
var outcome = document.querySelector('.outcome');
var resetButton = document.querySelector('.reset-button');

var randomNumber = createRandom();

console.log(randomNumber);

clearButton.addEventListener("click", clearsInput);
guessButton.addEventListener("click", usersGuess);
resetButton.addEventListener('click', resetGame);

function clearsInput(){
  numberInput.value = "";
}
function createRandom(){
  return Math.floor(Math.random() * 100) + 1;
  console.log(randomNumber);
};

function usersGuess(){
  numberResult.innerText = numberInput.value;
  feedBack();
  numberInput.value = "";
  enabledButtons();
};

function resetGame(){
  clearsInput();
  randomNumber = createRandom();
  numberResult.innerText = '?';
  outcome.innerText = 'Make a guess';
  enabledButtons();
  console.log(randomNumber);
};

function feedBack(){
  var userGuess = parseInt(numberInput.value);
  if (userGuess > randomNumber) {
    outcome.innerText = `That is too high`;
  } else if (userGuess < randomNumber) {
    outcome.innerText = `That is too low`;
  } else if (userGuess === randomNumber) {
    outcome.innerText = `Boom`;
  } 
}

numberInput.addEventListener('keyup', enabledButtons);

function enabledButtons(){
  if (numberInput.value === "") {
    guessButton.disabled = true;
    resetButton.disabled = false;
    clearButton.disabled = true;
  } else if (numberInput.value > 100 || numberInput.value < 0) {
    guessButton.disabled = true;
    resetButton.disabled = false;
    clearButton.disabled = false;
  } else {
    guessButton.disabled = false;
    resetButton.disabled = true;
    clearButton.disabled = false;
  }
}


