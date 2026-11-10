const inputSpeed = document.getElementById("inputSpeed");
const fromSpeedUnit = document.getElementById("fromSpeedUnit");
const toSpeedUnit = document.getElementById("toSpeedUnit");
const speedResult = document.getElementById("speedResult");

// conversion rates to meters per second
const toMetersPerSecond = {
    kmh: 1000 / 3600, // km/h to m/s
    ms: 1,
    mph: 0.44704,
    fts: 0.3048,
    knots: 0.514444
};

// format numbers nicely
function formatNumber(num) {
    if (Number.isInteger(num)) return num;
    return parseFloat(num.toFixed(5));
}

// live conversion
function updateSpeed() {
    const value = parseFloat(inputSpeed.value);
    if (isNaN(value)) {
        speedResult.innerText = "0";
        return;
    }

    const metersPerSecond = value * toMetersPerSecond[fromSpeedUnit.value];
    const result = metersPerSecond / toMetersPerSecond[toSpeedUnit.value];

    speedResult.innerText = `${formatNumber(result)} ${toSpeedUnit.options[toSpeedUnit.selectedIndex].text.split(' ')[0]}`;
}

// events
inputSpeed.addEventListener("input", updateSpeed);
fromSpeedUnit.addEventListener("change", updateSpeed);
toSpeedUnit.addEventListener("change", updateSpeed);
