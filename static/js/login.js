// Array to store user objects
var users = [];

// Load users from localStorage if available
var storedUsers = localStorage.getItem("users");
if (storedUsers) {
  users = JSON.parse(storedUsers);
}

function login() {
  const emailInput = document.getElementById("email").value;
  const passwordInput = document.getElementById("password").value;

  // Find the user object with matching email and password
  var matchedUser = users.find(function(user) {
    return user.email === emailInput && user.password === passwordInput;
  });

  if (matchedUser) {
    // Redirect to menu.html after successful login
    localStorage.setItem("currentUser", JSON.stringify(matchedUser));
    window.location.href = "menu.html";
  } else {
    alert("Login failed. Please check your email and password.");
  }
}

const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", function(event) {
  event.preventDefault();
  login();
});