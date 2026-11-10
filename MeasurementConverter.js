const inputMeasure = document.getElementById("inputMeasure");
const fromUnit = document.getElementById("fromUnit");
const toUnit = document.getElementById("toUnit");
const measureResult = document.getElementById("measureResult");

// conversion rates to meters
const toMeters = {
    km: 1000,
    hm: 100,
    dam: 10,
    m: 1,
    dm: 0.1,
    cm: 0.01,
    mm: 0.001,
    in: 0.0254,
    ft: 0.3048,
    yd: 0.9144,
    mi: 1609.34
};

// format numbers nicely
function formatNumber(num) {
    if (Number.isInteger(num)) return num;
    return parseFloat(num.toFixed(5));
}

// live update
function updateResult() {
    const value = parseFloat(inputMeasure.value);
    if (isNaN(value)) {
        measureResult.innerText = "0";
        return;
    }

    const meters = value * toMeters[fromUnit.value];
    const result = meters / toMeters[toUnit.value];

    measureResult.innerText = `${formatNumber(result)} ${toUnit.value}`;
}

// events
inputMeasure.addEventListener("input", updateResult);
fromUnit.addEventListener("change", updateResult);
toUnit.addEventListener("change", updateResult);
