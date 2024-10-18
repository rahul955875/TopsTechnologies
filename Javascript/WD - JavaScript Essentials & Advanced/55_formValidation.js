// Q.55 Form in Email, number, Password, Validation?

/* To create a form with email, number, and password validation in JavaScript, we can use regular expressions to validate the inputs and display error messages if the inputs do not meet the required format */

// using regex like this

const email = document.getElementById("email").value;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email pattern
if (!emailPattern.test(email)) {
    emailError.textContent = "Please enter a valid email address.";
    event.preventDefault(); // Prevent form submission
}

// Validate Phone Number (10 digits)
const phone = document.getElementById("phone").value;
const phonePattern = /^[0-9]{10}$/; // Simple pattern for 10 digits
if (!phonePattern.test(phone)) {
    phoneError.textContent = "Please enter a valid 10-digit phone number.";
    event.preventDefault(); // Prevent form submission
}

// Validate Password (at least 6 characters, 1 letter, 1 number)
const password = document.getElementById("password").value;
const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/; // At least 6 characters, 1 letter, 1 number
if (!passwordPattern.test(password)) {
    passwordError.textContent = "Password must be at least 6 characters long and include 1 letter and 1 number.";
    event.preventDefault(); // Prevent form submission
}
