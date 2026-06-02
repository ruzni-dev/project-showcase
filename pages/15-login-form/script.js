const form = document.getElementById('loginForm');

form.addEventListener('submit', function (e) {
e.preventDefault();

const email = document.getElementById('email').value.trim();
const password = document.getElementById('password').value.trim();

document.getElementById('emailError').textContent = '';
document.getElementById('passwordError').textContent = '';

let valid = true;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailPattern.test(email)) {
    document.getElementById('emailError').textContent = 'Please enter a valid email.';
    valid = false;
}

if (password.length < 6) {
    document.getElementById('passwordError').textContent = 'Password must be at least 6 characters.';
    valid = false;
}

if (valid) {
    alert('Login successful!');
    form.reset();
}
});