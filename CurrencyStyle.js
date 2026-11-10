document.addEventListener("DOMContentLoaded", function () {
    const currencies = [
        { code: "USD", name: "US Dollar", symbol: "$" },
        { code: "EUR", name: "Euro", symbol: "€" },
        { code: "JPY", name: "Japanese Yen", symbol: "¥" },
        { code: "GBP", name: "British Pound", symbol: "£" },
        { code: "AUD", name: "Australian Dollar", symbol: "A$" },
        { code: "CAD", name: "Canadian Dollar", symbol: "C$" },
        { code: "CHF", name: "Swiss Franc", symbol: "CHF" },
        { code: "CNY", name: "Chinese Yuan", symbol: "¥" },
        { code: "INR", name: "Indian Rupee", symbol: "₹" },
        { code: "BRL", name: "Brazilian Real", symbol: "R$" },
        { code: "ZAR", name: "South African Rand", symbol: "R" },
        { code: "MXN", name: "Mexican Peso", symbol: "$" },
        { code: "KRW", name: "South Korean Won", symbol: "₩" },
        { code: "SGD", name: "Singapore Dollar", symbol: "S$" },
        { code: "NZD", name: "New Zealand Dollar", symbol: "NZ$" },
        { code: "TRY", name: "Turkish Lira", symbol: "₺" },
        { code: "RUB", name: "Russian Ruble", symbol: "₽" },
        { code: "PLN", name: "Polish Zloty", symbol: "zł" },
        { code: "SEK", name: "Swedish Krona", symbol: "kr" },
        { code: "NOK", name: "Norwegian Krone", symbol: "kr" },
        { code: "DKK", name: "Danish Krone", symbol: "kr" },
        { code: "HUF", name: "Hungarian Forint", symbol: "Ft" },
        { code: "ILS", name: "Israeli Shekel", symbol: "₪" },
        { code: "SAR", name: "Saudi Riyal", symbol: "﷼" },
        { code: "AED", name: "UAE Dirham", symbol: "د.إ" },
        { code: "THB", name: "Thai Baht", symbol: "฿" },
        { code: "IDR", name: "Indonesian Rupiah", symbol: "Rp" },
        { code: "MYR", name: "Malaysian Ringgit", symbol: "RM" },
        { code: "PHP", name: "Philippine Peso", symbol: "₱" },
        { code: "VND", name: "Vietnamese Dong", symbol: "₫" },
        { code: "EGP", name: "Egyptian Pound", symbol: "£" },
        { code: "PKR", name: "Pakistani Rupee", symbol: "₨" },
        { code: "BDT", name: "Bangladeshi Taka", symbol: "৳" },
        { code: "LKR", name: "Sri Lankan Rupee", symbol: "Rs" },
        { code: "UAH", name: "Ukrainian Hryvnia", symbol: "₴" },
        { code: "CLP", name: "Chilean Peso", symbol: "$" },
        { code: "COP", name: "Colombian Peso", symbol: "$" },
        { code: "PEN", name: "Peruvian Sol", symbol: "S/" },
        { code: "RON", name: "Romanian Leu", symbol: "lei" },
        { code: "BGN", name: "Bulgarian Lev", symbol: "лв" },
        { code: "HRK", name: "Croatian Kuna", symbol: "kn" },
        { code: "ISK", name: "Icelandic Krona", symbol: "kr" },
        { code: "MAD", name: "Moroccan Dirham", symbol: "د.م." },
        { code: "NGN", name: "Nigerian Naira", symbol: "₦" },
        { code: "KWD", name: "Kuwaiti Dinar", symbol: "د.ك" },
        { code: "OMR", name: "Omani Rial", symbol: "﷼" },
        { code: "QAR", name: "Qatari Riyal", symbol: "﷼" },
        { code: "JOD", name: "Jordanian Dinar", symbol: "د.ا" },
        { code: "BHD", name: "Bahraini Dinar", symbol: "ب.د" },
        { code: "TWD", name: "New Taiwan Dollar", symbol: "NT$" },
        { code: "HKD", name: "Hong Kong Dollar", symbol: "HK$" },
        { code: "ARS", name: "Argentine Peso", symbol: "$" }
    ];

    const fromSelect = document.querySelector(".from-currency");
    const toSelect = document.querySelector(".to-currency");
    const resultText = document.querySelector(".result");

    currencies.forEach(c => {
        fromSelect.innerHTML += `<option value="${c.code}">${c.code} — ${c.name} (${c.symbol})</option>`;
        toSelect.innerHTML += `<option value="${c.code}">${c.code} — ${c.name} (${c.symbol})</option>`;
    });

    // Fallback static rates (USD as base) for offline testing
    const fallbackRates = {
        USD: 1, EUR: 0.92, JPY: 147, GBP: 0.81, AUD: 1.51, CAD: 1.33, CHF: 0.91, CNY: 6.97,
        INR: 83.5, BRL: 5.0, ZAR: 18.3, MXN: 18.8, KRW: 1320, SGD: 1.35, NZD: 1.66,
        TRY: 27.6, RUB: 76.4, PLN: 4.5, SEK: 11.5, NOK: 11.0, DKK: 7.0, HUF: 362, ILS: 3.6,
        SAR: 3.75, AED: 3.67, THB: 35.1, IDR: 15200, MYR: 4.45, PHP: 56.2, VND: 23800,
        EGP: 30.9, PKR: 288, BDT: 109, LKR: 370, UAH: 36.5, CLP: 830, COP: 4830, PEN: 3.9,
        RON: 4.6, BGN: 1.79, HRK: 7.0, ISK: 144, MAD: 10.4, NGN: 770, KWD: 0.31, OMR: 0.38,
        QAR: 3.64, JOD: 0.71, BHD: 0.38, TWD: 30.0, HKD: 7.85, ARS: 290
    };

    async function convertCurrency(amount, from, to) {
        try {
            const response = await fetch(`https://api.exchangerate.host/convert?from=${from}&to=${to}&amount=${amount}`);
            const data = await response.json();
            if (data.result !== undefined) return data.result;
            // If API fails, fallback
            return (amount / fallbackRates[from]) * fallbackRates[to];
        } catch (err) {
            console.warn("Using fallback rates due to API error");
            return (amount / fallbackRates[from]) * fallbackRates[to];
        }
    }

    document.querySelector(".convert-btn").addEventListener("click", async function () {
        const amount = parseFloat(document.querySelector(".amount").value);
        const from = fromSelect.value;
        const to = toSelect.value;

        if (isNaN(amount)) {
            resultText.innerText = "Enter a valid amount";
            return;
        }

        resultText.innerText = "Converting...";

        const converted = await convertCurrency(amount, from, to);
        resultText.innerText = `${amount} ${from} = ${converted.toFixed(2)} ${to}`;
    });
});
