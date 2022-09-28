document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInputValue = getInputValueById('withdraw-input');

    if (isNaN(withdrawInputValue)) {
        alert('please provide a valid number');
        return;
    }
    const withdrawAmount = getElementValueById('withdraw-total');
    const withdrawTotal = withdrawInputValue + withdrawAmount;

    const previousBalanceTotal = getElementValueById('balance-total');
    
    if (withdrawInputValue > previousBalanceTotal) {
        alert('do not have sufficient balance');
        return;
    }
    setValueById('withdraw-total', withdrawTotal);


    const currentBalance = previousBalanceTotal - withdrawInputValue;
    setValueById('balance-total', currentBalance);
})