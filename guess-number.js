let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const guessInput = document.getElementById("guessInput");
const guessResult = document.getElementById("guessResult");

document.getElementById("guessBtn").addEventListener("click", function () {
    const guess = parseInt(guessInput.value);
    if (isNaN(guess) || guess < 1 || guess > 100) {
        guessResult.innerText = `Please enter a number between 1 and 100`;
        return;
    }

    attempts++;
    if (guess < randomNumber) {
        guessResult.innerText = `Higher ⬆️! Attempts: ${attempts}`;
    } else if (guess > randomNumber) {
        guessResult.innerText = `Lower ⬇️! Attempts: ${attempts}`;
    } else {
        guessResult.innerText = `Correct! You guessed it in ${attempts} attempt(s)! 🎉`;
    }
});

// Reset button
document.getElementById("resetBtn").addEventListener("click", function () {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    guessInput.value = "";
    guessResult.innerText = "Attempts: 0";
});
