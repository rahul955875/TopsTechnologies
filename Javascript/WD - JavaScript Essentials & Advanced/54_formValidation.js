// Q.54 Form Validtion in JS?

/* Basic Steps for Form Validation

1.Select the Form and Inputs: Use JavaScript to select the form elements you want to validate.

2.Add an Event Listener: Attach an event listener to the form to listen for the submit event.

3.Validate Inputs: Check if the inputs meet your criteria (e.g., not empty, correct format). 

4.Display Feedback: Provide feedback to the user if validation fails. 

5.Prevent Submission: If validation fails, prevent the form from being submitted.
 */
// Get form and error elements
        const form = document.getElementById("myForm");
        const usernameError = document.getElementById("usernameError");
        const emailError = document.getElementById("emailError");

        form.addEventListener("submit", function(event) {
            // Clear previous error messages
            usernameError.textContent = "";
            emailError.textContent = "";

            // Validate username
            const username = document.getElementById("username").value;
            if (username.length < 3) {
                usernameError.textContent = "Username must be at least 3 characters long.";
                event.preventDefault(); // Prevent form submission
            }

            // Validate email
            const email = document.getElementById("email").value;
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email pattern
            if (!emailPattern.test(email)) {
                emailError.textContent = "Please enter a valid email address.";
                event.preventDefault(); // Prevent form submission
            }
        });