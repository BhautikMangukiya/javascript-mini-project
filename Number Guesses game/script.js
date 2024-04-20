let randomNumber = parseInt(Math.random() * 100 + 1);

let submit = document.querySelector("#subt");
let userinput = document.querySelector("#guessField");
let guessSlot = document.querySelector(".guesses");
let remining = document.querySelector(".lastResult");
let lowOrhi = document.querySelector(".lowOrhi");
let starOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let pravguess = [];
let numGuess = 1;
let playgame = true;

if (playgame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    let guess = parseInt(userinput.value);
    validateGuess(guess);
  });
}

// value 1 to 100 guess
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("please enter a valid number");
  } else if (guess < 1) {
    alert("please enter a number more than 1");
  } else if (guess > 100) {
    alert("please enter a number less than 100");
  } else {
    pravguess.push(guess);
    if (numGuess === 10) {
      displayGuess(guess);
      displayMessage(` => game over : random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      chekGuess(guess);
    }
  }
}

// guess number chek
function chekGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`you guessed right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(` => number is Tooo low`);
  } else if (guess > randomNumber) {
    displayMessage(` => number is Tooo high`);
  }
}

// arry update , input empty ,
function displayGuess(guess) {
  userinput.value = "";
  guessSlot.innerHTML += `${guess} ,  `;
  numGuess++;
  remining.innerHTML = `${11 - numGuess}`;
}

//message pass
function displayMessage(message) {
  lowOrhi.innerHTML = `<h2>${message}</h2>`;
}

// End Game
function endGame() {
  userinput.value = "";
  userinput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame" class="startbutn"> Start new game</h2>`;
  starOver.appendChild(p);
  playgame = false;
  newGame();
}

// re-Start Game
function newGame() {
  let newGameBut = document.querySelector("#newGame");
  newGameBut.addEventListener("click", function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    pravguess = [];
    numGuess = 1;
    guessSlot.innerHTML = "";
    remining.innerHTML = `${11 - numGuess}`;
    userinput.removeAttribute("disabled");
    starOver.removeChild(p);
    playgame = true;
  });
}
