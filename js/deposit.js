document.getElementById('deposit-button').addEventListener('click', function () {
    const depositInputValue = getInputValueById('deposit-input');
    if (isNaN(depositInputValue)) {
        alert('please provide a valid number')
        return;
    }
    const depositPreviousTotal = getElementValueById('deposit-total');
    const depositTotal = depositInputValue + depositPreviousTotal;
    setValueById('deposit-total', depositTotal);



    const balancePreviousTotal = getElementValueById('balance-total');
    const newBalance = balancePreviousTotal + depositInputValue;
    setValueById('balance-total', newBalance);
})