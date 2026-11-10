const inputWeight = document.getElementById("inputWeight");
const fromWeightUnit = document.getElementById("fromWeightUnit");
const toWeightUnit = document.getElementById("toWeightUnit");
const weightResult = document.getElementById("weightResult");

// Conversion rates to kilograms
const toKilogram = {
    mg: 0.000001,
    cg: 0.00001,
    dg: 0.0001,
    g: 0.001,
    dag: 0.01,
    hg: 0.1,
    kg: 1,
    t: 1000,
    oz: 0.0283495231,
    lb: 0.45359237
};

// Format numbers nicely (up to 10 decimals, clean integers)
function formatNumber(num) {
    if (Number.isInteger(num)) return num;
    return parseFloat(num.toFixed(10));
}

// Live conversion
function updateWeight() {
    const value = parseFloat(inputWeight.value);
    if (isNaN(value)) {
        weightResult.innerText = "0";
        return;
    }

    // Convert input to kg
    const kgValue = value * toKilogram[fromWeightUnit.value];
    // Convert kg to target unit
    const result = kgValue / toKilogram[toWeightUnit.value];

    weightResult.innerText = `${formatNumber(result)} ${toWeightUnit.options[toWeightUnit.selectedIndex].text.split(' ')[0]}`;
}

// Event listeners
inputWeight.addEventListener("input", updateWeight);
fromWeightUnit.addEventListener("change", updateWeight);
toWeightUnit.addEventListener("change", updateWeight);
