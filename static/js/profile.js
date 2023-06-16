document.addEventListener("DOMContentLoaded", function() {
    // Retrieve the current user and email from localStorage
    var currentUser = JSON.parse(localStorage.getItem("currentUser"));
  
    // Update the name and email in the profile page
    var usernameElement = document.getElementById("username");
    var emailElement = document.getElementById("email");
    if (currentUser) {
      usernameElement.textContent = currentUser.username;
      emailElement.textContent = "Email: " + currentUser.email;
    }
  });