document.querySelector(".open-modal-btn").addEventListener("click", () => {
  document.getElementById("authModal").style.display = "flex";
});

document.getElementById("closeBtn").addEventListener("click", () => {
  document.getElementById("authModal").style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === document.getElementById("authModal")) {
    document.getElementById("authModal").style.display = "none";
  }
});

document.getElementById("toSignup").addEventListener("click", () => {
  document.querySelector(".forms-wrapper").style.transform = "translateX(-50%)";
});

document.getElementById("toLogin").addEventListener("click", () => {
  document.querySelector(".forms-wrapper").style.transform = "translateX(0%)";
});