function validatePasswords() {
    let passwordElement = document.getElementById('password');
    let confirmPasswordElement = document.getElementById('confirm_password'); 
    let passwordError = document.getElementById('passwordError');

    let passwordValue = passwordElement.value;
    let confirmPasswordValue = confirmPasswordElement.value;

    if(passwordValue !== confirmPasswordValue) {
        passwordElement.style.borderColor = 'red';
        confirmPasswordElement.style.borderColor = 'red';
        passwordError.textContent = 'Passwords do not match. Try again';
        return false;
    }  else {
        // If passwords match, clear any error messages and reset border colors
        passwordError.textContent = '';
        passwordElement.style.borderColor = '';  // This will reset to CSS styles or you can define a specific color
        confirmPasswordElement.style.borderColor = ''; // This will reset to CSS styles or you can define a specific color
    }

    return true;
}   