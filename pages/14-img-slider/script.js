const slides = document.getElementById("slides");
const totalSlides = slides.children.length;
const indicators = document.getElementById("indicators");

let currentIndex = 0;

// Generate indicators
for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement("div");
    dot.className = "dot" + (i === 0 ? " active" : "");
    dot.onclick = () => showSlide(i);
    indicators.appendChild(dot);
}

function showSlide(index) {
    if (index < 0) index = totalSlides - 1;
    if (index >= totalSlides) index = 0;

    currentIndex = index;
    slides.style.transform = `translateX(-${index * 100}%)`;

    document.querySelectorAll(".dot").forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
    });
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

// Auto-slide every 6 seconds
setInterval(() => {
    nextSlide();
}, 6000);