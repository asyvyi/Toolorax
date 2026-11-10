document.getElementById("tipBtn").addEventListener("click", function () {
    const bill = parseFloat(document.getElementById("bill").value);
    const people = parseInt(document.getElementById("people").value);
    const tipPercent = parseFloat(document.getElementById("tipPercent").value);
    const resultDiv = document.getElementById("tipResult");

    if (isNaN(bill) || isNaN(people) || isNaN(tipPercent) || bill <= 0 || people <= 0 || tipPercent < 0) {
        resultDiv.innerText = "Each pays: Please enter valid numbers";
        return;
    }

    // Correct calculation
    const tipAmount = (bill * tipPercent) / 100;       // total tip
    const totalBill = bill + tipAmount;               // total including tip
    const perPerson = totalBill / people;            // divide by number of people

    resultDiv.innerText = "Each pays: $" + perPerson.toFixed(2);
});
