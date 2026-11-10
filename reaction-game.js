const reactionText = document.getElementById("reactionText");
const startBtn = document.getElementById("startBtn");
let reactionBtn, reactionResult;
let startTime, timeout;

// Function to start reaction test
function startReactionGame() {
    // Remove start button and add reaction button
    startBtn.style.display = "none";

    // Create reaction button dynamically
    reactionBtn = document.createElement("button");
    reactionBtn.id = "reactionBtn";
    reactionBtn.innerText = "Wait...";
    reactionBtn.style.backgroundColor = "#f44336"; // red
    document.querySelector(".reaction-box").insertBefore(reactionBtn, document.getElementById("reactionResult"));

    reactionResult = document.getElementById("reactionResult");

    // Random delay
    const delay = Math.random() * 3000 + 1000; // 1-4 seconds
    reactionBtn.disabled = true;

    setTimeout(() => {
        reactionBtn.innerText = "Click!";
        reactionBtn.style.backgroundColor = "#4CAF50"; // green
        reactionBtn.disabled = false;
        startTime = Date.now();
    }, delay);

    // Reaction click
    reactionBtn.addEventListener("click", function () {
        const reactionTime = Date.now() - startTime;
        reactionResult.innerText = `Your reaction time: ${reactionTime} ms`;
        reactionBtn.disabled = true;

        // Show start button again to play again
        startBtn.style.display = "block";
        reactionBtn.remove();
    });
}

// Start button click
startBtn.addEventListener("click", () => {
    reactionText.innerText = "Get ready...";
    startReactionGame();
});
