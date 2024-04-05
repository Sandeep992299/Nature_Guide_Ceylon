// login/logout toggle button script

       
document.addEventListener("DOMContentLoaded", function() {
    const loginButton = document.getElementById("loginButton");
    
    // Check if user is already logged in
    if (localStorage.getItem("isLoggedIn") === "true") {
        loginButton.textContent = "Logout";
    }

    // Toggle login/logout state
    loginButton.addEventListener("click", function() {
        if (localStorage.getItem("isLoggedIn") === "true") {
            // User is logged in, so log them out
            localStorage.setItem("isLoggedIn", "false");
            loginButton.textContent = "Login";
        } else {
            // User is not logged in, so log them in
            localStorage.setItem("isLoggedIn", "true");
            loginButton.textContent = "Logout";
            window.location.href = 'login.html'
        }
    });
});
                         