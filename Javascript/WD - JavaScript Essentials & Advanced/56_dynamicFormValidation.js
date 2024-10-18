// Q.56 Dynamic Form Validation in JS?

/* Dynamic form validation in JavaScript refers to real-time validation of input fields as the user interacts with the form, without needing to submit the form first. It provides immediate feedback, allowing users to correct their inputs as they type. */

// using event input

emailField.addEventListener("input", function() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailPattern.test(emailField.value)) {
        emailError.textContent = "";
        emailValid.textContent = "Valid email!";
    } else {
        emailError.textContent = "Invalid email!";
        emailValid.textContent = "";
    }
});

// Phone Number Validation
phoneField.addEventListener("input", function() {
    const phonePattern = /^[0-9]{10}$/; // 10 digit number
    if (phonePattern.test(phoneField.value)) {
        phoneError.textContent = "";
        phoneValid.textContent = "Valid phone number!";
    } else {
        phoneError.textContent = "Phone number must be 10 digits!";
        phoneValid.textContent = "";
    }
});

// Password Validation (6+ characters, 1 letter, 1 number)
passwordField.addEventListener("input", function() {
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    if (passwordPattern.test(passwordField.value)) {
        passwordError.textContent = "";
        passwordValid.textContent = "Valid password!";
    } else {
        passwordError.textContent = "Password must be at least 6 characters long and include 1 letter and 1 number.";
        passwordValid.textContent = "";
    }
});

// Prevent form submission if errors exist
document.getElementById("dynamicForm").addEventListener("submit", function(event) {
    if (emailError.textContent || phoneError.textContent || passwordError.textContent) {
        alert("Please fix errors before submitting.");
        event.preventDefault();
    }
});