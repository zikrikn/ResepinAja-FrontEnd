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
  