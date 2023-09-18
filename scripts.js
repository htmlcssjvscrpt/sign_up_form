function validatePasswords() {
    let passwordElement = document.getElementById('password');
    let confirmPasswordElement = document.getElementById('confirm_password'); 

    let passwordValue = passwordElement.value;
    let confirmPasswordValue = confirmPasswordElement.value;

    if(passwordValue !== confirmPasswordValue) {
        passwordElement.style.borderColor = 'red';
        confirmPasswordElement.style.borderColor = 'red';
        alert('Passwords do not match. Try again');
        
        return false;
    }

    return true;
}   