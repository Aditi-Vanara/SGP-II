document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let location = document.getElementById("location").value;
    
    if (username && password && location) {
        localStorage.setItem("username", username);
        localStorage.setItem("location", location);
        window.location.href = "hospitals.html"; // Redirect to the hospital listing page
    } else {
        document.getElementById("error-message").innerText = "Please fill all fields.";
    }
});
