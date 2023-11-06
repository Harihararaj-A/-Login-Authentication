function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Simple check for demonstration purposes
    if (username === "Oasis_Infobyte" && password === "password") {
        window.location.href = "welcome.html"; // Redirect to welcome page if credentials are correct
        return false; // Prevent form submission
    } else {
        alert("Invalid username or password. Please try again.");
        return false; // Prevent form submission
    }
}
