const inputTemp = document.getElementById("inputTemp");
const fromTempUnit = document.getElementById("fromTempUnit");
const toTempUnit = document.getElementById("toTempUnit");
const tempResult = document.getElementById("tempResult");

// convert temperature
function convertTemperature(value, from, to) {
    let celsius;

    // convert from original to Celsius
    if (from === "C") celsius = value;
    else if (from === "F") celsius = (value - 32) * 5 / 9;
    else if (from === "K") celsius = value - 273.15;

    let result;

    // convert from Celsius to target
    if (to === "C") result = celsius;
    else if (to === "F") result = celsius * 9 / 5 + 32;
    else if (to === "K") result = celsius + 273.15;

    return result;
}

// format nicely
function formatNumber(num) {
    if (Number.isInteger(num)) return num;
    return parseFloat(num.toFixed(5));
}

// live update
function updateResult() {
    const value = parseFloat(inputTemp.value);
    if (isNaN(value)) {
        tempResult.innerText = "0";
        return;
    }

    const result = convertTemperature(value, fromTempUnit.value, toTempUnit.value);
    tempResult.innerText = `${formatNumber(result)} ${toTempUnit.value}`;
}

// events
inputTemp.addEventListener("input", updateResult);
fromTempUnit.addEventListener("change", updateResult);
toTempUnit.addEventListener("change", updateResult);
