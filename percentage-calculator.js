document.getElementById("calcBtn").addEventListener("click", function () {
    const base = parseFloat(document.getElementById("base").value);
    const percent = parseFloat(document.getElementById("percent").value);
    const type = document.getElementById("type").value;
    const resultDiv = document.getElementById("result");

    if (isNaN(base) || isNaN(percent)) {
        resultDiv.innerText = "Result: Please enter valid numbers";
        return;
    }

    let result;
    if (type === "of") {
        result = (percent / 100) * base;
    } else if (type === "increase") {
        result = base + (percent / 100) * base;
    } else if (type === "decrease") {
        result = base - (percent / 100) * base;
    }

    resultDiv.innerText = "Result: " + result.toFixed(2);
});
