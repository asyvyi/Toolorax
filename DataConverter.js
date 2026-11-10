const inputData = document.getElementById("inputData");
const fromDataUnit = document.getElementById("fromDataUnit");
const toDataUnit = document.getElementById("toDataUnit");
const dataResult = document.getElementById("dataResult");

// conversion rates to bits
const toBits = {
    nibble: 4,
    bit: 1,
    B: 8,
    KB: 8 * 1024,
    MB: 8 * 1024 * 1024,
    GB: 8 * 1024 * 1024 * 1024,
    TB: 8 * 1024 * 1024 * 1024 * 1024,
    PB: 8 * 1024 * 1024 * 1024 * 1024 * 1024
};

// format numbers nicely (up to 10 decimals)
function formatNumber(num) {
    if (Number.isInteger(num)) return num;
    return parseFloat(num.toFixed(10));
}

// live conversion
function updateData() {
    const value = parseFloat(inputData.value);
    if (isNaN(value)) {
        dataResult.innerText = "0";
        return;
    }

    const bitsValue = value * toBits[fromDataUnit.value];
    const result = bitsValue / toBits[toDataUnit.value];

    dataResult.innerText = `${formatNumber(result)} ${toDataUnit.options[toDataUnit.selectedIndex].text.split(' ')[0]}`;
}

// events
inputData.addEventListener("input", updateData);
fromDataUnit.addEventListener("change", updateData);
toDataUnit.addEventListener("change", updateData);
