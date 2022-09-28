function getInputValueById(inputField) {
    const getInputField = document.getElementById(inputField);
    const getInputFieldValueString = getInputField.value;
    const getInputFieldValue = parseFloat(getInputFieldValueString);
    getInputField.value = "";
    return getInputFieldValue;
}

function getElementValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementValueString = element.innerText;
    const elementValue = parseFloat(elementValueString);
    return elementValue;
}

function setValueById(elementName, value) {
    const getTheELement = document.getElementById(elementName);
    getTheELement.innerText = value;
}

