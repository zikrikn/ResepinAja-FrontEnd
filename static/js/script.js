function signIn() {
  // Lakukan proses autentikasi pengguna di sini
  const emailInput = document.getElementById("email-input").value;
  const passwordInput = document.getElementById("password-input").value;

  // Contoh sederhana autentikasi dengan email dan password tertentu
  if (emailInput === "user@example.com" && passwordInput === "password") {
    // Redirect ke halaman menu.html setelah berhasil login
    window.location.href = "menu.html";
  } else {
    alert("Login failed. Please check your email and password.");
  }
}

const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", function(event) {
  event.preventDefault();
  signIn();
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
  