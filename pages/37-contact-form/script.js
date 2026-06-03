const form = document.getElementById('contactForm');
const responseMsg = document.getElementById('responseMsg');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const message = document.getElementById('message');

  if (name.value && email.value && message.value) {
    responseMsg.textContent = "Message sent successfully!";
    responseMsg.style.color = "#388e3c";
    form.reset();
  } else {
    responseMsg.textContent = "Please fill all fields.";
    responseMsg.style.color = "#d32f2f";
  }
});