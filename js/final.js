
// function getInputFieldValueById(inputField) {
//     const getInputField = document.getElementById(inputField);
//     const inputFieldString = getInputField.value;
//     const inputFieldValue = parseFloat(inputFieldString);
//     getInputField.value = '';
//     return inputFieldValue;
// }

// function getElementValueById(element) {
//     const getElement = document.getElementById(element);
//     const getElementString = getElement.innerText;
//     const elementValue = parseFloat(getElementString);
//     return elementValue;
// }

// function setValue(fieldName, value) {
//     const getField = document.getElementById(fieldName);
//     getField.innerText = value;
// }

// document.getElementById('deposit-button').addEventListener('click', function () {
//     const depositField = getInputFieldValueById('deposit-input');
//     const elementField = getElementValueById('deposit-total');
//     if (isNaN(depositField)) {
//         alert('please provide a valid number');
//         return;
//     }
//     const totalDeposit = depositField + elementField;
//     setValue('deposit-total', totalDeposit);
//     const totalBalanceField = getElementValueById('balance-total');
//     const totalBalance = totalBalanceField + depositField;
//     setValue('balance-total', totalBalance);
// })

// document.getElementById('withdraw-button').addEventListener('click', function () {
//     const withdrawField = getInputFieldValueById('withdraw-input');
//     const withdrawTotalField = getElementValueById('withdraw-total');
//     if (isNaN(withdrawField)) {
//         alert('please provide a valid number');
//         return;
//     }
//     const withdrawTotal = withdrawField + withdrawTotalField;
//     setValue('withdraw-total', withdrawTotal);

//     const totalBalanceField = getElementValueById('balance-total');
//     const totalBalance = totalBalanceField - withdrawField;
//     setValue('balance-total', totalBalance);
// })