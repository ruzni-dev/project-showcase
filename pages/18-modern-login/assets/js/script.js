// Toggle between Login and Signup
function showForm(form) {
  document.getElementById('loginForm').classList.toggle('hidden', form !== 'login');
  document.getElementById('signupForm').classList.toggle('hidden', form !== 'signup');
  document.querySelectorAll('.form-toggle button').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('.form-toggle button')[form === 'login' ? 0 : 1].classList.add('active');
}

// Toggle Password Visibility
function togglePassword(id, icon) {
  const input = document.getElementById(id);
  const type = input.type === 'password' ? 'text' : 'password';
  input.type = type;
  icon.classList.toggle('fa-eye');
  icon.classList.toggle('fa-eye-slash');
}

// Theme Toggle
document.getElementById('themeToggle').addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const icon = document.querySelector('#themeToggle i');
  icon.classList.toggle('fa-sun');
  icon.classList.toggle('fa-moon');
});