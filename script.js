document.addEventListener("DOMContentLoaded", function() {
    const submitBtn = document.getElementById("submit-btn");
    const loginForm = document.getElementById("login-form");

    submitBtn.addEventListener("click", function() {
        // Get the email and password values from the form
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // Perform any validation if needed

        // Example: Check if email and password are not empty
        if (email.trim() === "" || password.trim() === "") {
            alert("Please enter both email and password");
            return;
        }

        // If validation passes, you can submit the form or perform any other action
        // For now, let's just log the email and password
        console.log("Email:", email);
        console.log("Password:", password);

        // Here you can submit the form using AJAX or any other method
        // For demonstration purposes, let's prevent the default form submission
        loginForm.submit();
    });
});