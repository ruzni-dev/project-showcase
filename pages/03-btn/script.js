const card = document.querySelector('.rotate-card');

card.addEventListener('mousemove', (e) => {
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const centerX = rect.width / 5;
  const centerY = rect.height / 5;

  const rotateX = -(y - centerY) / 10;
  const rotateY = (x - centerX) / 10;

  const shadowX = -(x - centerX) / 10; // More visible shadow
  const shadowY = -(y - centerY) / 10;

  card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  card.style.boxShadow = `${shadowX}px ${shadowY}px 20px rgba(255, 255, 255, 0.5)`;
});

card.addEventListener('mouseleave', () => {
  card.style.transform = 'rotateX(0deg) rotateY(0deg)';
  card.style.boxShadow = '0 5px 15px rgba(255, 255, 255, 0.3)';
});

let btn = document.querySelector('#btn3');
btn.addEventListener(`mousemove`, e => {
  let rect = e.target.getBoundingClientRect();
  let x = e.clientX * 3 - rect.left;
  btn.style.setProperty(`--x`, x + `deg`);
});

document.getElementById("#btn3").addEventListener("click", function () {
  document.getElementById("span::before").classList.toggle("active");
});