document.getElementById('convertButton').addEventListener('click', function() {
    // Get input values
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    // Exchange rates (as of a specific date)
    const exchangeRates = {
        USD: 1,        // United States Dollar
        EUR: 0.90,     // Euro
        GBP: 0.76,     // British Pound
        INR: 83.85,    // Indian Rupee
        JPY: 145.75,   // Japanese Yen
        AUD: 1.48,     // Australian Dollar
        CAD: 1.35,     // Canadian Dollar
        CNY: 7.09,     // Chinese Yuan
        CHF: 0.85,     // Swiss Franc
    };

    // Check if amount is valid
    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid amount.");
        return;
    }

    // Ensure both currencies are selected
    if (!exchangeRates[fromCurrency] || !exchangeRates[toCurrency]) {
        alert("Please select valid currencies.");
        return;
    }

    // Calculate converted amount
    const convertedAmount = amount * (exchangeRates[toCurrency] / exchangeRates[fromCurrency]);

    // Display the converted amount
    document.getElementById('convertedAmount').textContent = `Converted Amount: ${convertedAmount.toFixed(2)} ${toCurrency}`;
});
