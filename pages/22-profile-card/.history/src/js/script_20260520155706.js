const themeToggle = document.getElementById('themeCheckbox');
const labelText = document.querySelector('.label-text');
const img = document.querySelector('.profile-img');

themeToggle.addEventListener('change', () => {
  document.body.classList.toggle('dark');
  labelText.textContent = document.body.classList.contains('dark')
    ? 'Dark mode'
    : 'Light mode';
  if (img.src.includes("img1.jpg")) {
    img.src = "assets/images/img3.jpg";
  } else {
    img.src = "assets/images/img1.jpg";
  }
});
