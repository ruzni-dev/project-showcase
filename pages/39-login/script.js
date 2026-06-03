// ===== THEME TOGGLE =====
const toggle = document.getElementById('theme-toggle');
const body = document.body;
const sunIcon = document.getElementById('sun-icon');
const moonIcon = document.getElementById('moon-icon');

// Optional: Remember theme across visits
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark');
  toggle.checked = true;
}

toggle.addEventListener('change', () => {
  body.classList.toggle('dark');
  if (body.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});

// ===== FORM TAB SWITCHING =====
const loginTab = document.getElementById('login-tab');
const signupTab = document.getElementById('signup-tab');
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');

loginTab.addEventListener('click', () => {
  loginTab.classList.add('active');
  signupTab.classList.remove('active');
  loginForm.classList.add('active');
  signupForm.classList.remove('active');
});

signupTab.addEventListener('click', () => {
  signupTab.classList.add('active');
  loginTab.classList.remove('active');
  signupForm.classList.add('active');
  loginForm.classList.remove('active');
});

// ===== BASIC FORM VALIDATION (Optional) =====
// You can add this if needed
const submitButtons = document.querySelectorAll('.submit-btn');

submitButtons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    alert('Form submitted (you can connect this to a backend)');
  });
});
// ===== PASSWORD SHOW/HIDE =====
const toggles = document.querySelectorAll('.toggle-password');

toggles.forEach(toggle => {
  toggle.addEventListener('click', () => {
    const inputId = toggle.getAttribute('data-target');
    const input = document.getElementById(inputId);
    const isPassword = input.type === 'password';

    input.type = isPassword ? 'text' : 'password';
    toggle.classList.toggle('fa-eye');
    toggle.classList.toggle('fa-eye-slash');
  });
});