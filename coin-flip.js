const flipBtn = document.getElementById("flipBtn");
const coin = document.getElementById("coin");
const coinResult = document.getElementById("coinResult");

flipBtn.addEventListener("click", () => {
    // Randomly choose result
    const result = Math.random() < 0.5 ? "Heads" : "Tails";

    // Calculate rotation: random spins + 0deg for Heads, 180deg for Tails
    const spins = Math.floor(Math.random() * 5) + 3; // 3-7 spins
    const rotateDeg = (spins * 360) + (result === "Heads" ? 0 : 180);

    // Apply rotation with animation
    coin.style.transition = "transform 1s ease-out";
    coin.style.transform = `rotateY(${rotateDeg}deg)`;

    // Show result after animation
    setTimeout(() => {
        coinResult.innerText = `Result: ${result}`;
    }, 1000);
});
