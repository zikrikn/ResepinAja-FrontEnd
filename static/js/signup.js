// Array to store user objects
var users = [];

// Load users from localStorage if available
var storedUsers = localStorage.getItem("users");
if (storedUsers) {
  users = JSON.parse(storedUsers);
}

function signup() {
  const usernameInput = document.getElementById("username").value;
  const emailInput = document.getElementById("email").value;
  const passwordInput = document.getElementById("password").value;

  // Create user object
  var user = {
    username: usernameInput,
    email: emailInput,
    password: passwordInput
  };

  // Add user object to the users array
  users.push(user);

  // Store users array in localStorage
  localStorage.setItem("users", JSON.stringify(users));

  // Redirect to login.html
  window.location.href = "login.html";
}

const signupForm = document.getElementById("signup-form");

signupForm.addEventListener("submit", function(event) {
  event.preventDefault();
  signup();
});

function togglePasswordVisibility() {
  var passwordInput = document.getElementById("password");
  var showButton = document.getElementById("show-button");
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    showButton.textContent = "Hide";
  } else {
    passwordInput.type = "password";
    showButton.textContent = "Show";
  }
}