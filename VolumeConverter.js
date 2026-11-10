const inputVolume = document.getElementById("inputVolume");
const fromVolumeUnit = document.getElementById("fromVolumeUnit");
const toVolumeUnit = document.getElementById("toVolumeUnit");
const volumeResult = document.getElementById("volumeResult");

// conversion rates to liters
const toLiters = {
    ml: 0.001,
    cl: 0.01,
    dl: 0.1,
    l: 1,
    dal: 10,
    hl: 100,
    kl: 1000,
    m3: 1000,
    gal: 3.78541,
    qt: 0.946353,
    pt: 0.473176,
    cup: 0.24,
    floz: 0.0295735
};

// format numbers nicely (up to 10 decimals, clean integers)
function formatNumber(num) {
    if (Number.isInteger(num)) return num;
    return parseFloat(num.toFixed(10));
}

// live conversion
function updateVolume() {
    const value = parseFloat(inputVolume.value);
    if (isNaN(value)) {
        volumeResult.innerText = "0";
        return;
    }

    // convert input to liters
    const litersValue = value * toLiters[fromVolumeUnit.value];
    // convert liters to target unit
    const result = litersValue / toLiters[toVolumeUnit.value];

    volumeResult.innerText = `${formatNumber(result)} ${toVolumeUnit.options[toVolumeUnit.selectedIndex].text.split(' ')[0]}`;
}

// events
inputVolume.addEventListener("input", updateVolume);
fromVolumeUnit.addEventListener("change", updateVolume);
toVolumeUnit.addEventListener("change", updateVolume);
