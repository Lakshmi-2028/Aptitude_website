document.addEventListener("DOMContentLoaded", function() {
    const signupBtn = document.getElementById("signup-btn");
    const signupForm = document.getElementById("signup-form");

    signupBtn.addEventListener("click", function() {
        const firstName = signupForm.elements["fname"].value;
        const lastName = signupForm.elements["lname"].value;
        const email = signupForm.elements["email"].value;
        const password = signupForm.elements["password"].value;
        const confirmPassword = signupForm.elements["confirmPassword"].value;

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

    
        console.log("First Name:", firstName);
        console.log("Last Name:", lastName);
        console.log("Email:", email);
        console.log("Password:", password);
        console.log("Confirm Password:", confirmPassword);
        window.location.href = "welcome.html";
    });
});