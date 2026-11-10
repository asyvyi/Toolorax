document.getElementById("dateBtn").addEventListener("click", function() {
    const d1 = new Date(document.getElementById("date1").value);
    const d2 = new Date(document.getElementById("date2").value);
    const resultDiv = document.getElementById("dateResult");

    if (isNaN(d1.getTime()) || isNaN(d2.getTime())) {
        resultDiv.innerText = "Difference: Please select valid dates";
        return;
    }

    const diffTime = Math.abs(d2 - d1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    resultDiv.innerText = "Difference: " + diffDays + " day(s)";
});
