const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");
const toggleToSignup = document.getElementById("toggleForm");
const toggleToLogin = document.getElementById("toggleFormBack");

// Default: show login
loginForm.classList.add("active");

// Switch to signup
toggleToSignup.addEventListener("click", (e) => {
  e.preventDefault();
  loginForm.classList.remove("active");
  signupForm.classList.add("active");
});

// Switch back to login
toggleToLogin.addEventListener("click", (e) => {
  e.preventDefault();
  signupForm.classList.remove("active");
  loginForm.classList.add("active");
});