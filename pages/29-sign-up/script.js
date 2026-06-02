const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const infoBox = document.getElementById('infoBox');
const infoTitle = document.getElementById('infoTitle');
const infoText = document.getElementById('infoText');

function toggleForm() {
    loginForm.classList.toggle('active');
    signupForm.classList.toggle('active');

    if (signupForm.classList.contains('active')) {
    infoBox.style.background = '#28a745';
    infoTitle.innerText = 'Join Us Today!';
    infoText.innerText = 'Enter your details and start your journey with us.';
    } else {
    infoBox.style.background = '#007bff';
    infoTitle.innerText = 'Welcome Back!';
    infoText.innerText = 'To stay connected, please login with your personal info.';
    }
}