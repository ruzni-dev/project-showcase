// ---------- PREMIUM PROJECT DATA ----------
const projectsData = [
  // --- WEB DEVELOPMENT ---
  { 
    id: 1, 
    title: "Aetheris Finance", 
    category: "web development", 
    subCategory: "Web App",
    shortDesc: "AI-driven wealth analytics platform with real-time insights.", 
    longDesc: "Revolutionary dashboard that aggregates financial data, applies machine learning forecasts, and delivers personalized investment strategies. Built as a polished web experience for complex data.", 
    techStack: ["React", "D3.js", "Python", "TensorFlow"], 
    imageId: "26", 
    imageLabel: "finance" 
  },
  { 
    id: 6, 
    title: "Luminae Identity", 
    category: "web development", 
    subCategory: "Web App",
    shortDesc: "Luxury brand identity and immersive web experience.", 
    longDesc: "High-end visual language for a fragrance brand with cinematic scroll storytelling, product-focused sections, and an elegance-first interface. Strong web presentation piece.", 
    techStack: ["Webflow", "Three.js", "GSAP", "Illustrator"], 
    imageId: "66", 
    imageLabel: "branding" 
  },

  // --- SOFTWARE DEVELOPMENT ---
  { 
    id: 2, 
    title: "Wanderlytics", 
    category: "software development", 
    subCategory: "Mobile App",
    shortDesc: "Smart travel companion with AR navigation and local discovery.", 
    longDesc: "An immersive app blending augmented reality city guides, crowd-sourced itineraries, and smart planning tools. Designed to show product logic and software flow.", 
    techStack: ["Flutter", "Firebase", "ARCore", "Maps API"], 
    imageId: "29", 
    imageLabel: "travel" 
  },
  { 
    id: 7, 
    title: "NeoBank X", 
    category: "software development", 
    subCategory: "Web App",
    shortDesc: "Neobanking dashboard with spending insights and secure finance tools.", 
    longDesc: "A modern financial hub bridging banking, budgeting, and secure vault workflows. Built to demonstrate software architecture and practical product structure.", 
    techStack: ["Next.js", "Tailwind", "Prisma", "Plaid API"], 
    imageId: "104", 
    imageLabel: "banking" 
  },

  // --- AI PROJECTS ---
  { 
    id: 3, 
    title: "Velora Studios", 
    category: "ai projects", 
    subCategory: "UI/UX Design",
    shortDesc: "Creative platform concept with intelligent personalization.", 
    longDesc: "A premium digital studio concept where AI helps tailor content, refine layout choices, and guide the user experience. Focused on future-facing product ideas.", 
    techStack: ["Figma", "Adobe XD", "Storybook", "Framer"], 
    imageId: "36", 
    imageLabel: "design" 
  },
  { 
    id: 5, 
    title: "FitGenius AI", 
    category: "ai projects", 
    subCategory: "Mobile App",
    shortDesc: "Personal AI coach with real-time form correction and meal plans.", 
    longDesc: "A smart fitness app using on-device ML to analyze posture, generate hyper-personalized workouts, and sync wearables. Good for showing applied AI product thinking.", 
    techStack: ["Swift", "CoreML", "HealthKit", "Node.js"], 
    imageId: "55", 
    imageLabel: "fitness" 
  },

  // --- CYBER SECURITY PROJECTS ---
  { 
    id: 4, 
    title: "EcoChain Vision", 
    category: "cyber security projects", 
    subCategory: "Web App",
    shortDesc: "Blockchain-based carbon credit marketplace with secure flows.", 
    longDesc: "A sustainable web platform tracking credits, tokenized green assets, and permissioned access. Built to show secure system thinking and guarded interactions.", 
    techStack: ["Solidity", "Web3.js", "Vue", "Tailwind"], 
    imageId: "42", 
    imageLabel: "eco" 
  },
  { 
    id: 8, 
    title: "Artivive Gallery", 
    category: "cyber security projects", 
    subCategory: "UI/UX Design",
    shortDesc: "Interactive gallery concept with protected onboarding and access flow.", 
    longDesc: "A curated platform with immersive exhibition rooms and controlled access experiences. Great for showing secure entry patterns and polished interface design.", 
    techStack: ["Figma", "React", "Unity", "Ethers.js"], 
    imageId: "116", 
    imageLabel: "art" 
  },

  // --- GRAPHIC DESIGN PROJECTS ---
  { 
    id: 9, 
    title: "Brand Identity Design", 
    category: "graphic design", 
    subCategory: "UI/UX Design",
    shortDesc: "Complete brand identity system including logo and color guidelines.", 
    longDesc: "A unified brand presence built around corporate elegance. Includes a custom vector logo, color palettes, spacing guidelines, typography hierarchies, and stationery mockup assets.", 
    techStack: ["Figma", "Illustrator", "Photoshop"], 
    imageId: "201", 
    imageLabel: "brand" 
  },
  { 
    id: 10, 
    title: "Marketing Collateral", 
    category: "graphic design", 
    subCategory: "UI/UX Design",
    shortDesc: "Professional marketing materials and promotional print designs.", 
    longDesc: "High-impact visual campaigns tailored for social media, digital advertising, print pamphlets, and exhibition banners. Combines grids and layout hierarchy to communicate clear offers.", 
    techStack: ["InDesign", "Illustrator", "Photoshop"], 
    imageId: "202", 
    imageLabel: "marketing" 
  },
  { 
    id: 11, 
    title: "UI/UX Design System", 
    category: "graphic design", 
    subCategory: "UI/UX Design",
    shortDesc: "Comprehensive UI design system with responsive grid components.", 
    longDesc: "A full-scale Figma tokens and components library including responsive grids, accessible form fields, states (hover, focus, disabled), dark/light themes, and interactive prototypes.", 
    techStack: ["Figma", "Adobe XD", "Tokens Studio"], 
    imageId: "203", 
    imageLabel: "design-system" 
  },

  // --- INTERACTIVE FRONTEND MINI-PROJECTS (WEB DEVELOPMENT) ---
  { 
    id: 101, 
    title: "FAQ Accordion", 
    category: "web development", 
    subCategory: "Mini Components",
    shortDesc: "Clean FAQ Accordion with smooth height transitions.", 
    longDesc: "A sleek, responsive accordion component built with pure HTML5 semantic tags, flexible CSS rules, and simple JavaScript click toggle states. Fully accessible and keyboard friendly.", 
    techStack: ["HTML5", "CSS3", "JavaScript"], 
    localPath: "01-animated-accordion/index.html", 
    imageId: "20"
  },
  { 
    id: 102, 
    title: "Toggle Navigation Bar", 
    category: "web development", 
    subCategory: "Mini Components",
    shortDesc: "Responsive navigation bar with toggle transition.", 
    longDesc: "A mobile-first navigation bar featuring smooth slide-in toggles, clean glassmorphism styling overlays, and active link states.", 
    techStack: ["HTML5", "CSS3", "JavaScript"], 
    localPath: "02-tgl-bar/index.html", 
    imageId: "21"
  },
  { 
    id: 103, 
    title: "Custom Button Effects", 
    category: "web development", 
    subCategory: "Mini Components",
    shortDesc: "A set of modern button hover and active animation effects.", 
    longDesc: "A collection of beautiful, CSS-only micro-animations for interactive buttons. Includes glowing borders, slide fills, ripple triggers, and 3D lifts.", 
    techStack: ["HTML5", "CSS3"], 
    localPath: "03-btn/index.html", 
    imageId: "22"
  },
  { 
    id: 104, 
    title: "Modal Login Form", 
    category: "web development", 
    subCategory: "Mini Components",
    shortDesc: "Interactive popup login modal window.", 
    longDesc: "A modern login form embedded in a sleek dark overlay modal. Features smooth entry slide-up transitions, focus highlights, and background dismiss functionality.", 
    techStack: ["HTML5", "CSS3", "JavaScript"], 
    localPath: "04-popup-login/index.html", 
    imageId: "23"
  },
  { 
    id: 105, 
    title: "Interactive Calculator", 
    category: "web development", 
    subCategory: "Mini Components",
    shortDesc: "Fully functional calculator with sleek dark interface.", 
    longDesc: "A complete math calculator supporting standard operations, decimals, clear fields, and a beautiful tactile interface design.", 
    techStack: ["HTML5", "CSS3", "JavaScript"], 
    localPath: "05-calculater/index.html", 
    imageId: "24"
  },
  { 
    id: 106, 
    title: "Modern Login Page", 
    category: "web development", 
    subCategory: "UI/UX Design",
    shortDesc: "A premium login interface using modern CSS styles.", 
    longDesc: "A standalone landing card for login forms. Uses a vibrant background shape, glassmorphism containers, and custom form input designs.", 
    techStack: ["HTML5", "CSS3"], 
    localPath: "06-modern-login/index.html", 
    imageId: "25"
  },
  { 
    id: 107, 
    title: "Simple Contact Form", 
    category: "web development", 
    subCategory: "Mini Components",
    shortDesc: "A clean and structured user feedback contact form.", 
    longDesc: "A reliable form layout containing fields for name, email, and message. Styled with floating placeholder text and elegant submit validation.", 
    techStack: ["HTML5", "CSS3"], 
    localPath: "07-contact-form/index.html", 
    imageId: "27"
  },
  { 
    id: 108, 
    title: "Countdown Timer", 
    category: "web development", 
    subCategory: "Mini Components",
    shortDesc: "Dynamic real-time countdown timer app.", 
    longDesc: "An animated countdown display calculation tool showing days, hours, minutes, and seconds until a specific target date.", 
    techStack: ["HTML5", "CSS3", "JavaScript"], 
    localPath: "08-countdown-timer/index.html", 
    imageId: "28"
  },
  { 
    id: 109, 
    title: "Mini Portfolio Site", 
    category: "web development", 
    subCategory: "UI/UX Design",
    shortDesc: "A simple responsive personal portfolio concept.", 
    longDesc: "A lightweight landing page showcasing a biography, past work highlights, skills badges, and clean profile branding details.", 
    techStack: ["HTML5", "CSS3"], 
    localPath: "09-portfolio/index.html", 
    imageId: "30"
  },
  { 
    id: 110, 
    title: "Digital Clock", 
    category: "web development", 
    subCategory: "Mini Components",
    shortDesc: "Clean real-time digital clock showing local time.", 
    longDesc: "An active digital clock rendering hours, minutes, seconds, and AM/PM states dynamically using standard JavaScript Date libraries.", 
    techStack: ["HTML5", "CSS3", "JavaScript"], 
    localPath: "10-digital-clock/index.html", 
    imageId: "31"
  },
  { 
    id: 111, 
    title: "Expense Tracker App", 
    category: "web development", 
    subCategory: "Web App",
    shortDesc: "Track income, expenses, and manage budgets dynamically.", 
    longDesc: "A finance ledger tool that dynamically tracks deposits, updates expense ratios, and calculates active balances in local memory storage.", 
    techStack: ["HTML5", "CSS3", "JavaScript"], 
    localPath: "11-expense-tracker-app/index.html", 
    imageId: "32"
  },
  { 
    id: 112, 
    title: "Flexbox Layout Sandbox", 
    category: "web development", 
    subCategory: "UI/UX Design",
    shortDesc: "Interactive tool to visualize and test Flexbox alignment.", 
    longDesc: "A dynamic developer tool allowing users to click and test different flex directions, justifications, alignments, and gap properties live.", 
    techStack: ["HTML5", "CSS3", "JavaScript"], 
    localPath: "12-flex-box/index.html", 
    imageId: "33"
  },
  { 
    id: 113, 
    title: "Modern Sign Up Page", 
    category: "web development", 
    subCategory: "UI/UX Design",
    shortDesc: "Sleek sign up registration form with clean aesthetics.", 
    longDesc: "An elegant registration form with password confirmation fields, terms checkboxes, and responsive design systems.", 
    techStack: ["HTML5", "CSS3"], 
    localPath: "13-modern-sign-up/index.html", 
    imageId: "34"
  },
  { 
    id: 114, 
    title: "Image Slider Carousel", 
    category: "web development", 
    subCategory: "Mini Components",
    shortDesc: "Interactive image slider carousel with manual navigation.", 
    longDesc: "A dynamic carousel for visual assets. Features manual next/previous navigation overlays, dot indicators, and CSS transitions.", 
    techStack: ["HTML5", "CSS3", "JavaScript"], 
    localPath: "14-img-slider/index.html", 
    imageId: "35"
  },
  { 
    id: 115, 
    title: "Simple Login Form", 
    category: "web development", 
    subCategory: "Mini Components",
    shortDesc: "Basic login form setup with field focus indicators.", 
    longDesc: "A minimal, clean login form featuring standard input outlines, hover states, and structured submit styles.", 
    techStack: ["HTML5", "CSS3"], 
    localPath: "15-login-form/index.html", 
    imageId: "37"
  },
  { 
    id: 116, 
    title: "Simple Sign Up Form", 
    category: "web development", 
    subCategory: "Mini Components",
    shortDesc: "Standard registration layout with field validation.", 
    longDesc: "A direct registration page layout containing forms for username, password, email, and simple validation indicators.", 
    techStack: ["HTML5", "CSS3"], 
    localPath: "16-sign-up/index.html", 
    imageId: "38"
  },
  { 
    id: 119, 
    title: "Responsive Nav Menu", 
    category: "web development", 
    subCategory: "Mini Components",
    shortDesc: "Mobile-first collapse navigation menu bar.", 
    longDesc: "A standard navigation system highlighting collapsible slide-out menus for mobile and tablets, and desktop inline links.", 
    techStack: ["HTML5", "CSS3", "JavaScript"], 
    localPath: "19-nav-menu/index.html", 
    imageId: "39"
  },
  { 
    id: 120, 
    title: "Number Guessing Game", 
    category: "web development", 
    subCategory: "Web App",
    shortDesc: "Interactive game guessing randomly generated numbers.", 
    longDesc: "A fun micro-game that generates random integers and provides players with too high/too low feedback, score tracking, and restart options.", 
    techStack: ["HTML5", "CSS3", "JavaScript"], 
    localPath: "20-number-geussing-game/index.html", 
    imageId: "40"
  },
  { 
    id: 121, 
    title: "Animated Login Page", 
    category: "web development", 
    subCategory: "UI/UX Design",
    shortDesc: "Login page with dynamic floating backdrop shapes.", 
    longDesc: "A highly styled, modern login screen featuring active background gradient rings, sleek field validation, and entry animations.", 
    techStack: ["HTML5", "CSS3", "JavaScript"], 
    localPath: "21-animated-login/index.html", 
    imageId: "41"
  },
  { 
    id: 123, 
    title: "Premium Pricing Table", 
    category: "web development", 
    subCategory: "UI/UX Design",
    shortDesc: "A beautiful three-tier pricing plan interface.", 
    longDesc: "A highly polished pricing table. Features clear plan cards, highlighting a recommended 'Popular' column with badges and scaling buttons.", 
    techStack: ["HTML5", "CSS3"], 
    localPath: "23-pricing-table/index.html", 
    imageId: "43"
  },
  { 
    id: 125, 
    title: "Rock Paper Scissors Game", 
    category: "web development", 
    subCategory: "Web App",
    shortDesc: "Classic game against an automated AI competitor.", 
    longDesc: "An active arcade game. Allows users to click weapon icons, matches it against random AI computer selections, and increments scoreboard metrics.", 
    techStack: ["HTML5", "CSS3", "JavaScript"], 
    localPath: "25-rock-paper-scissor/index.html", 
    imageId: "44"
  },
  { 
    id: 126, 
    title: "Sidebar Slide Menu", 
    category: "web development", 
    subCategory: "Mini Components",
    shortDesc: "Side slide drawer menu layout.", 
    longDesc: "A space-efficient navigation pattern featuring slide-out sidebars, collapsible nested menu drawers, and profile indicators.", 
    techStack: ["HTML5", "CSS3", "JavaScript"], 
    localPath: "26-slide-bar-menu/index.html", 
    imageId: "45"
  },
  { 
    id: 127, 
    title: "Registration Form V27", 
    category: "web development", 
    subCategory: "Mini Components",
    shortDesc: "Minimalist signup layout with hover states.", 
    longDesc: "A form template focused on ultra-minimal design, typography grids, and micro-hover states for interactive components.", 
    techStack: ["HTML5", "CSS3"], 
    localPath: "27-sign-up/index.html", 
    imageId: "46"
  },
  { 
    id: 128, 
    title: "Glassmorphic Sign Up Form", 
    category: "web development", 
    subCategory: "Mini Components",
    shortDesc: "Glassmorphic registration interface layout.", 
    longDesc: "A beautiful sign up overlay showing modern CSS backdrop filters, light borders, and glowing button shadows.", 
    techStack: ["HTML5", "CSS3"], 
    localPath: "28-sign-up/index.html", 
    imageId: "47"
  },
  { 
    id: 129, 
    title: "Card Sign Up Form", 
    category: "web development", 
    subCategory: "Mini Components",
    shortDesc: "Card-based signup form with side banner design.", 
    longDesc: "A split-card registration screen. Displays forms on one side and a premium visual graphics banner layout on the other side.", 
    techStack: ["HTML5", "CSS3"], 
    localPath: "29-sign-up/index.html", 
    imageId: "48"
  },
  { 
    id: 131, 
    title: "Typing Speed Test", 
    category: "web development", 
    subCategory: "Web App",
    shortDesc: "Real-time typing test analyzing WPM and accuracy.", 
    longDesc: "A developer tool checking words per minute (WPM), typing precision, and active countdown timers while matching user keystrokes.", 
    techStack: ["HTML5", "CSS3", "JavaScript"], 
    localPath: "31-typing-speed-test-with-timer/index.html", 
    imageId: "49"
  },
  { 
    id: 132, 
    title: "Weather Dashboard", 
    category: "web development", 
    subCategory: "Web App",
    shortDesc: "Dynamic weather forecast client with layout cards.", 
    longDesc: "A modern weather dashboard displaying dynamic search forms, weather icon maps, humidity ratios, and active forecast metrics.", 
    techStack: ["HTML5", "CSS3", "JavaScript"], 
    localPath: "32-wheather-dashboard/index.html", 
    imageId: "50"
  },
  { 
    id: 133, 
    title: "Order Management Dashboard", 
    category: "web development", 
    subCategory: "Web App",
    shortDesc: "Sales tracking and inventory order dashboard.", 
    longDesc: "An administrative tool tracking order logs, payment status indicators, sales metrics charts, and inventory databases.", 
    techStack: ["HTML5", "CSS3", "JavaScript"], 
    localPath: "33-oredr-managment-dashboard/index.html", 
    imageId: "51"
  },
  { 
    id: 134, 
    title: "Cryptocurrency Tracker", 
    category: "web development", 
    subCategory: "Web App",
    shortDesc: "Crypto price monitor showing historical rates.", 
    longDesc: "A crypto coin explorer tracking market charts, ticker symbols, transaction logs, and real-time wallet estimation formulas.", 
    techStack: ["HTML5", "CSS3", "JavaScript"], 
    localPath: "34-crypto-tracker/index.html", 
    imageId: "52"
  },
  { 
    id: 135, 
    title: "Interactive Search Bar", 
    category: "web development", 
    subCategory: "Mini Components",
    shortDesc: "Real-time filtering search bar with focus animation.", 
    longDesc: "An input filter component. Expands dynamically on focus and provides live result suggestions as text input changes.", 
    techStack: ["HTML5", "CSS3", "JavaScript"], 
    localPath: "35-search-bar/index.html", 
    imageId: "53"
  },
  { 
    id: 136, 
    title: "Flex Grow Hover Effect", 
    category: "web development", 
    subCategory: "UI/UX Design",
    shortDesc: "Accordion-style image hover grid expand effect.", 
    longDesc: "A gorgeous CSS hover grid. Cards expand horizontally on mouse hover while siblings shrink, displaying rich content transitions.", 
    techStack: ["HTML5", "CSS3"], 
    localPath: "36-flex-grow-hover-effect/index.html", 
    imageId: "54"
  },
  { 
    id: 137, 
    title: "Animated Contact Form", 
    category: "web development", 
    subCategory: "Mini Components",
    shortDesc: "Animated contact input states with validation.", 
    longDesc: "An interactive contact portal highlighting custom floating field indicators, check validations, and submission animations.", 
    techStack: ["HTML5", "CSS3", "JavaScript"], 
    localPath: "37-contact-form/index.html", 
    imageId: "56"
  },
  { 
    id: 138, 
    title: "Student Admission Form", 
    category: "web development", 
    subCategory: "Mini Components",
    shortDesc: "Multi-field registration and enrollment form.", 
    longDesc: "A thorough academic enrollment card. Organizes fields into clean responsive fieldset grids with full focus states.", 
    techStack: ["HTML5", "CSS3"], 
    localPath: "38-admision-form/index.html", 
    imageId: "57"
  },
  { 
    id: 139, 
    title: "Glassmorphic Login Form", 
    category: "web development", 
    subCategory: "UI/UX Design",
    shortDesc: "Stunning glassmorphism login interface.", 
    longDesc: "A highly premium authentication layout utilizing strong backdrop blurring, sleek input designs, and modern typography combinations.", 
    techStack: ["HTML5", "CSS3"], 
    localPath: "39-login/index.html", 
    imageId: "58"
  },
  { 
    id: 140, 
    title: "Modern Product Card", 
    category: "web development", 
    subCategory: "UI/UX Design",
    shortDesc: "Responsive ecommerce store item card component.", 
    longDesc: "A clean storefront card featuring dynamic color selection buttons, hover zoom effects, and add-to-cart feedback.", 
    techStack: ["HTML5", "CSS3", "JavaScript"], 
    localPath: "40-product-card/index.html", 
    imageId: "59"
  },
  { 
    id: 154, 
    title: "GitHub Profile Finder", 
    category: "web development", 
    subCategory: "Web App",
    shortDesc: "Dynamic profile search fetching real-time data from GitHub API.", 
    longDesc: "An interactive application utilizing the GitHub REST API to retrieve and format profile metrics, repository lists, follower counts, and bio descriptions on demand.", 
    techStack: ["HTML5", "CSS3", "JavaScript"], 
    localPath: "54-GitHub-user-finder/index.html", 
    imageId: "60"
  }
];

// --- DYNAMIC PAGE CATEGORY DETECTION ---
function getCurrentPageCategory() {
  const path = window.location.pathname.toLowerCase();
  if (path.includes("web-development")) return "web development";
  if (path.includes("software-development")) return "software development";
  if (path.includes("ai-projects")) return "ai projects";
  if (path.includes("cyber-security")) return "cyber security projects";
  if (path.includes("graphic-design")) return "graphic design";
  return "all";
}

const pageCategory = getCurrentPageCategory();
let currentFilter = "all";

const categoryButtons = Array.from(document.querySelectorAll("[data-filter]"));
const container = document.getElementById("projectsContainer");
const modalOverlay = document.getElementById("modalOverlay");
let currentModalProject = null;

// Helper: resolve relative path prefix depending on if script is run from /pages/ or root
function getPathPrefix() {
  return window.location.pathname.includes('/pages/') ? '../' : '';
}

function resolveLaunchPath(localPath) {
  const isSubpage = window.location.pathname.includes('/pages/');
  return isSubpage ? localPath : `pages/${localPath}`;
}

// helper: picsum url with consistent but varied images
function getImageUrl(id, seed) {
  return `https://picsum.photos/id/${seed}/500/400`;
}

// render projects based on page category and sub-filter
function renderProjects() {
  if (!container) return;

  let filtered = projectsData;

  // 1. Filter by page category first
  if (pageCategory !== "all") {
    filtered = filtered.filter(p => p.category === pageCategory);
  }

  // 2. Filter by sub-category (from buttons on web-development.html)
  if (currentFilter !== "all") {
    filtered = filtered.filter(p => p.subCategory === currentFilter);
  }

  if (filtered.length === 0) {
    container.innerHTML = `<div style="grid-column:1/-1; text-align:center; padding:3rem; background:rgba(255,255,255,0.03); border-radius:2rem;">✨ No projects in this category. Explore others ✨</div>`;
    return;
  }

  container.innerHTML = filtered.map(project => {
    const imageSeed = project.imageId || "26";
    const imgUrl = getImageUrl(project.id, imageSeed);
    
    return `
      <div class="project-card" data-id="${project.id}">
        <div class="card-img">
          <img src="${imgUrl}" alt="${project.title}" loading="lazy">
        </div>
        <div class="card-content">
          <span class="card-category"><i class="fas fa-tag"></i> ${project.subCategory || project.category}</span>
          <div class="card-title">${project.title}</div>
          <div class="card-desc">${project.shortDesc}</div>
          <div class="card-tech">
            ${project.techStack.slice(0, 2).map(t => `<span class="tech-badge">${t}</span>`).join('')}
            ${project.techStack.length > 2 ? `<span class="tech-badge">+${project.techStack.length-2}</span>` : ''}
          </div>
          <div class="card-footer">
            <span class="preview-link" data-id="${project.id}">
              ${project.localPath ? 'Launch App' : 'Discover project'} <i class="fas fa-chevron-right"></i>
            </span>
          </div>
        </div>
      </div>
    `;
  }).join('');

  // attach modal trigger to all preview links & cards
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
  document.getElementById("modalCategory").innerHTML = `<i class="fas fa-cube"></i> ${project.category} · ${project.subCategory || ''}`;
  document.getElementById("modalDesc").innerHTML = project.longDesc;
  const techHtml = `<span style="font-weight:600;"><i class="fas fa-microchip"></i> Tech stack:</span> ${project.techStack.join(" · ")}`;
  document.getElementById("modalTech").innerHTML = techHtml;
  
  const liveDemoBtn = document.getElementById("liveDemoBtn");
  if (liveDemoBtn) {
    if (project.localPath) {
      liveDemoBtn.innerHTML = `<i class="fas fa-external-link-alt"></i> Launch App`;
    } else {
      liveDemoBtn.innerHTML = `<i class="fas fa-comment-dots"></i> Request Demo`;
    }
  }

  modalOverlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  if (modalOverlay) {
    modalOverlay.classList.remove("active");
  }
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
  const filterSection = document.getElementById('filterSection') || document.getElementById('projectsContainer');
  if (filterSection) {
    filterSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

// Event listeners for filters
categoryButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const filterVal = btn.dataset.filter;
    setActiveFilter(filterVal);
  });
});

// modal close triggers
const closeModalBtns = [document.getElementById("closeModalBtn"), document.getElementById("closeModalSecondBtn")].filter(Boolean);
closeModalBtns.forEach(btn => btn.addEventListener('click', closeModal));
if (modalOverlay) {
  modalOverlay.addEventListener('click', (e) => { if (e.target === modalOverlay) closeModal(); });
}
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('active')) closeModal();
});

// live preview interaction in modal
const liveDemoBtn = document.getElementById("liveDemoBtn");
if (liveDemoBtn) {
  liveDemoBtn.addEventListener('click', () => {
    if (currentModalProject) {
      if (currentModalProject.localPath) {
        window.open(resolveLaunchPath(currentModalProject.localPath), '_blank');
      } else {
        // Fallback for mock premium projects
        window.open('https://portfolio1-pearl-seven.vercel.app/#contact', '_blank');
      }
    } else {
      alert("Project demo ready upon request.");
    }
  });
}

// hero explore button -> scroll to categories or projects
const exploreBtn = document.getElementById("exploreBtn");
if (exploreBtn) {
  exploreBtn.addEventListener("click", () => { 
    const overviewSection = document.querySelector('.overview-section');
    if (overviewSection) {
      overviewSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
}

// cta button: open external portfolio contact anchor
function openExternalContact() {
  window.open('https://portfolio1-pearl-seven.vercel.app/#contact', '_blank');
}
window.openExternalContact = openExternalContact;

const demoContactBtn = document.getElementById("demoContactBtn");
if (demoContactBtn) {
  demoContactBtn.addEventListener("click", openExternalContact);
}

// initial render
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