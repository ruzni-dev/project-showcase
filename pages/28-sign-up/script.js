const toggleBtn = document.getElementById("toggleBtn");
const signupForm = document.getElementById("signupForm");
const loginForm = document.getElementById("loginForm");

toggleBtn.addEventListener("click", () => {
  signupForm.classList.toggle("hidden");
  loginForm.classList.toggle("hidden");
  toggleBtn.textContent = signupForm.classList.contains("hidden")
    ? "Switch to Signup"
    : "Switch to Login";
});
