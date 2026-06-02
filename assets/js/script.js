// ---------- PREMIUM PROJECT DATA ----------
const projectsData = [
  { id: 1, title: "Aetheris Finance", category: "web development", shortDesc: "AI-driven wealth analytics platform with real-time insights.", longDesc: "Revolutionary dashboard that aggregates financial data, applies machine learning forecasts, and delivers personalized investment strategies. Built as a polished web experience for complex data.", techStack: ["React", "D3.js", "Python", "TensorFlow"], imageId: "26", imageLabel: "finance" },
  { id: 2, title: "Wanderlytics", category: "software development", shortDesc: "Smart travel companion with AR navigation and local discovery.", longDesc: "An immersive app blending augmented reality city guides, crowd-sourced itineraries, and smart planning tools. Designed to show product logic and software flow.", techStack: ["Flutter", "Firebase", "ARCore", "Maps API"], imageId: "29", imageLabel: "travel" },
  { id: 3, title: "Velora Studios", category: "ai projects", shortDesc: "Creative platform concept with intelligent personalization.", longDesc: "A premium digital studio concept where AI helps tailor content, refine layout choices, and guide the user experience. Focused on future-facing product ideas.", techStack: ["Figma", "Adobe XD", "Storybook", "Framer"], imageId: "36", imageLabel: "design" },
  { id: 4, title: "EcoChain Vision", category: "cyber security projects", shortDesc: "Blockchain-based carbon credit marketplace with secure flows.", longDesc: "A sustainable web platform tracking credits, tokenized green assets, and permissioned access. Built to show secure system thinking and guarded interactions.", techStack: ["Solidity", "Web3.js", "Vue", "Tailwind"], imageId: "42", imageLabel: "eco" },
  { id: 5, title: "FitGenius AI", category: "ai projects", shortDesc: "Personal AI coach with real-time form correction and meal plans.", longDesc: "A smart fitness app using on-device ML to analyze posture, generate hyper-personalized workouts, and sync wearables. Good for showing applied AI product thinking.", techStack: ["Swift", "CoreML", "HealthKit", "Node.js"], imageId: "55", imageLabel: "fitness" },
  { id: 6, title: "Luminae Identity", category: "web development", shortDesc: "Luxury brand identity and immersive web experience.", longDesc: "High-end visual language for a fragrance brand with cinematic scroll storytelling, product-focused sections, and an elegance-first interface. Strong web presentation piece.", techStack: ["Webflow", "Three.js", "GSAP", "Illustrator"], imageId: "66", imageLabel: "branding" },
  { id: 7, title: "NeoBank X", category: "software development", shortDesc: "Neobanking dashboard with spending insights and secure finance tools.", longDesc: "A modern financial hub bridging banking, budgeting, and secure vault workflows. Built to demonstrate software architecture and practical product structure.", techStack: ["Next.js", "Tailwind", "Prisma", "Plaid API"], imageId: "104", imageLabel: "banking" },
  { id: 8, title: "Artivive Gallery", category: "cyber security projects", shortDesc: "Interactive gallery concept with protected onboarding and access flow.", longDesc: "A curated platform with immersive exhibition rooms and controlled access experiences. Great for showing secure entry patterns and polished interface design.", techStack: ["Figma", "React", "Unity", "Ethers.js"], imageId: "116", imageLabel: "art" }
];

const categoryButtons = Array.from(document.querySelectorAll("[data-filter]"));
const projectsSection = document.getElementById("projectsContainer");

// helper: picsum url with consistent but varied images
function getImageUrl(id, seed) {
  return `https://picsum.photos/id/${seed}/500/400`;
}

let currentFilter = "all";
const container = document.getElementById("projectsContainer");
const modalOverlay = document.getElementById("modalOverlay");
let currentModalProject = null;

// render projects based on filter
function renderProjects() {
  const filtered = currentFilter === "all" ? projectsData : projectsData.filter(p => p.category === currentFilter);
  if (filtered.length === 0) {
    container.innerHTML = `<div style="grid-column:1/-1; text-align:center; padding:3rem; background:rgba(255,255,255,0.03); border-radius:2rem;">✨ No projects in this category. Explore others ✨</div>`;
    return;
  }
  container.innerHTML = filtered.map(project => {
    const imageSeed = project.imageId || "26";
    const imgUrl = getImageUrl(project.id, imageSeed);
    const techsShort = project.techStack.slice(0, 3).join(" • ");
    return `
      <div class="project-card" data-id="${project.id}">
        <div class="card-img">
          <img src="${imgUrl}" alt="${project.title}" loading="lazy">
        </div>
        <div class="card-content">
          <span class="card-category"><i class="fas fa-tag"></i> ${project.category}</span>
          <div class="card-title">${project.title}</div>
          <div class="card-desc">${project.shortDesc}</div>
          <div class="card-tech">
            ${project.techStack.slice(0, 2).map(t => `<span class="tech-badge">${t}</span>`).join('')}
            ${project.techStack.length > 2 ? `<span class="tech-badge">+${project.techStack.length-2}</span>` : ''}
          </div>
          <div class="card-footer">
            <span class="preview-link" data-id="${project.id}">Discover project <i class="fas fa-chevron-right"></i></span>
          </div>
        </div>
      </div>
    `;
  }).join('');

  // attach modal trigger to all preview links & cards (click on card area also works)
  document.querySelectorAll('.preview-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.stopPropagation();
      const cardDiv = link.closest('.project-card');
      const id = parseInt(cardDiv.dataset.id);
      const project = projectsData.find(p => p.id === id);
      if (project) openModal(project);
    });
  });
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', (e) => {
      if(e.target.closest('.preview-link')) return;
      const id = parseInt(card.dataset.id);
      const project = projectsData.find(p => p.id === id);
      if (project) openModal(project);
    });
  });
}

function openModal(project) {
  currentModalProject = project;
  document.getElementById("modalTitle").innerText = project.title;
  document.getElementById("modalCategory").innerHTML = `<i class="fas fa-cube"></i> ${project.category}`;
  document.getElementById("modalDesc").innerHTML = project.longDesc;
  const techHtml = `<span style="font-weight:600;"><i class="fas fa-microchip"></i> Tech stack:</span> ${project.techStack.join(" · ")}`;
  document.getElementById("modalTech").innerHTML = techHtml;
  modalOverlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modalOverlay.classList.remove("active");
  document.body.style.overflow = "";
}

// filter functionality
function setActiveFilter(filterValue) {
  currentFilter = filterValue;
  renderProjects();
  categoryButtons.forEach(btn => {
    if (btn.dataset.filter === filterValue) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

function goToProjects() {
  const overviewSection = document.querySelector('.overview-section');
  if (overviewSection) {
    overviewSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

// Event listeners
categoryButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const filterVal = btn.dataset.filter;
    setActiveFilter(filterVal);
    goToProjects();
  });
});

// modal close triggers (guard for pages without modal)
const closeModalBtns = [document.getElementById("closeModalBtn"), document.getElementById("closeModalSecondBtn")].filter(Boolean);
closeModalBtns.forEach(btn => btn.addEventListener('click', closeModal));
if (modalOverlay) {
  modalOverlay.addEventListener('click', (e) => { if (e.target === modalOverlay) closeModal(); });
}
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('active')) closeModal();
});

// live preview interaction in modal (dummy premium action)
const liveDemoBtn = document.getElementById("liveDemoBtn");
if (liveDemoBtn) {
  liveDemoBtn.addEventListener('click', () => {
    if (currentModalProject) {
      alert(`✨ Premium demo preview: "${currentModalProject.title}" would launch in a real production environment. ✨`);
    } else {
      alert("Project demo ready upon request.");
    }
  });
}

// hero explore button -> scroll to overview
const exploreBtn = document.getElementById("exploreBtn");
if (exploreBtn) {
  exploreBtn.addEventListener("click", () => { goToProjects(); });
}
// cta button: open external portfolio contact anchor
function openExternalContact() {
  window.open('https://portfolio1-pearl-seven.vercel.app/#contact', '_self');
}
// expose for inline onclick usage
window.openExternalContact = openExternalContact;
const demoContactBtn = document.getElementById("demoContactBtn");
if (demoContactBtn) demoContactBtn.addEventListener("click", openExternalContact);

// initial render - only if projectsContainer exists (on project pages)
if (container) {
  renderProjects();
}

// --- Testimonials slider (home page) ---
function initTestimonials() {
  const slider = document.getElementById('testimonialsSlider');
  if (!slider) return;
  const items = Array.from(slider.querySelectorAll('.testimonial'));
  if (items.length === 0) return;
  let idx = items.findIndex(i => i.classList.contains('active'));
  if (idx < 0) idx = 0;

  function show(i) {
    items.forEach((it, n) => it.classList.toggle('active', n === i));
  }

  const prevBtn = document.getElementById('prevTestimonial');
  const nextBtn = document.getElementById('nextTestimonial');
  if (prevBtn) prevBtn.addEventListener('click', () => { idx = (idx - 1 + items.length) % items.length; show(idx); });
  if (nextBtn) nextBtn.addEventListener('click', () => { idx = (idx + 1) % items.length; show(idx); });

  // auto rotate
  setInterval(() => { idx = (idx + 1) % items.length; show(idx); }, 6000);
}

// Contact form handling (home page)
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.elements['name'].value;
    alert(`Thanks ${name}! We received your request and will respond within 24 hours.`);
    form.reset();
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initTestimonials();
  initContactForm();
});