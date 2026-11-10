const textInput = document.getElementById("textInput");
const resultDiv = document.getElementById("charResult");
const clearBtn = document.getElementById("clearBtn");

// Live update on typing
textInput.addEventListener("input", function () {
    const text = textInput.value.trim();
    const charCount = text.length;
    const wordCount = text === "" ? 0 : text.split(/\s+/).length;
    resultDiv.innerText = `Words: ${wordCount}, Characters: ${charCount}`;
});

// Clear button
clearBtn.addEventListener("click", function () {
    textInput.value = "";
    resultDiv.innerText = "Words: 0, Characters: 0";
});
