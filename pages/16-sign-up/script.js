document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("container");

  // ---------- Desktop Overlay Buttons ----------
  const signUpButton = document.getElementById("signUp");
  const signInButton = document.getElementById("signIn");

  if (signUpButton && signInButton && container) {
    signUpButton.addEventListener("click", () => {
      container.classList.add("right-panel-active");
    });

    signInButton.addEventListener("click", () => {
      container.classList.remove("right-panel-active");
    });
  }

  // ---------- Mobile Switch Buttons ----------
  const mobileSignIn = document.getElementById("mobileSignIn");
  const mobileSignUp = document.getElementById("mobileSignUp");
  const signInForm = document.querySelector(".sign-in-container");
  const signUpForm = document.querySelector(".sign-up-container");

  if (mobileSignIn && mobileSignUp && signInForm && signUpForm) {
    // Default state: show Sign In
    mobileSignIn.classList.add("active");
    signInForm.classList.add("active");

    // Switch to Sign In
    mobileSignIn.addEventListener("click", function () {
      mobileSignIn.classList.add("active");
      mobileSignUp.classList.remove("active");
      signInForm.classList.add("active");
      signUpForm.classList.remove("active");
    });

    // Switch to Sign Up
    mobileSignUp.addEventListener("click", function () {
      mobileSignUp.classList.add("active");
      mobileSignIn.classList.remove("active");
      signUpForm.classList.add("active");
      signInForm.classList.remove("active");
    });
  }
});