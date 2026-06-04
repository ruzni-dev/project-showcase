const items = document.querySelectorAll('.nav-item');
const glow = document.querySelector('.glow');

items.forEach((item, index) => {
  item.addEventListener('click', () => {
    // Update active icon
    document.querySelector('.nav-item.active')?.classList.remove('active');
    item.classList.add('active');

    // Move the glow
    const gap = 40;
    const iconWidth = item.offsetWidth;
    const offset = index * (iconWidth + gap);
    glow.style.transform = `translateX(${offset}px)`;
  });
});