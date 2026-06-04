// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

// Example: Toggle for mobile nav (optional if you add hamburger icon)
const mobileMenuToggle = document.getElementById("menu-toggle");
const navMenu = document.querySelector(".nav");

if (mobileMenuToggle && navMenu) {
  mobileMenuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("open");
  });
}