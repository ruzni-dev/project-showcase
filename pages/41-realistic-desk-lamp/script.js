const toggle = document.getElementById("lamp-toggle");
const glow = document.getElementById("lamp-light");
const status = document.getElementById("lamp-status");

toggle.addEventListener("change", () => {
  if (toggle.checked) {
    glow.style.opacity = "1";
    status.textContent = "ON";
  } else {
    glow.style.opacity = "0";
    status.textContent = "OFF";
  }
});