const inputTime = document.getElementById("inputTime");
const fromZone = document.getElementById("fromZone");
const toZone = document.getElementById("toZone");
const timeResult = document.getElementById("timeResult");

// convert hours/minutes from one timezone to another
function updateTime() {
    if (!inputTime.value) {
        timeResult.innerText = "--:--";
        return;
    }

    const [hours, minutes] = inputTime.value.split(":").map(Number);
    const fromOffset = parseFloat(fromZone.value.replace("UTC", ""));
    const toOffset = parseFloat(toZone.value.replace("UTC", ""));

    let totalMinutes = hours * 60 + minutes + (toOffset - fromOffset) * 60;

    // handle overflow
    totalMinutes = (totalMinutes + 1440) % 1440; // 24*60 minutes

    const newHours = Math.floor(totalMinutes / 60);
    const newMinutes = totalMinutes % 60;

    const formattedHours = newHours.toString().padStart(2, "0");
    const formattedMinutes = newMinutes.toString().padStart(2, "0");

    timeResult.innerText = `${formattedHours}:${formattedMinutes}`;
}

// events
inputTime.addEventListener("input", updateTime);
fromZone.addEventListener("change", updateTime);
toZone.addEventListener("change", updateTime);
