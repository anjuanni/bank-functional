
document.getElementById('submit-button').addEventListener('click', function () {
    console.log("submit ")
    // const getEmail = document.getElementById('user-email');
    // const email = getEmail.value;
    // const getPassword = document.getElementById('user-password');
    // const password = getPassword.value;
    // console.log(email);
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    const passwordField = document.getElementById('user-password')
    const password = passwordField.value;
    console.log(email, password);

    if (email === "anju@gmail.com" && password === "bankpass") {
        window.location.href = 'money.html';
    }
    else {
        alert('put the correct email and password here');
    }
})