const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/  });/* Mobile menu */
});

/* 3D tilt cards */
document.querySelectorAll(".tilt-card").forEach((card) => {
  card.addEventListener("mousemove", (event) => {
    if (prefersReducedMotion) return;

    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const rotateX = ((y / rect.height) - 0.5) * -7;
    const rotateY = ((x / rect.width) - 0.5) * 7;

    card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "";
  });
});

/* Constellation canvas */
const canvas = document.getElementById("constellation-canvas");
const ctx = canvas.getContext("2d");

let width = 0;
let height = 0;
let particles = [];
let mouse = {
  x: null,
  y: null,
  radius: 170
};

function resizeCanvas() {
  const ratio = window.devicePixelRatio || 1;
  width = window.innerWidth;
  height = window.innerHeight;

  canvas.width = width * ratio;
  canvas.height = height * ratio;
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;

  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  createParticles();
}

function createParticles() {
  particles = [];

  const particleCount = Math.min(110, Math.floor((width * height) / 13500));

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      baseX: Math.random() * width,
      baseY: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.22,
      vy: (Math.random() - 0.5) * 0.22,
      size: Math.random() * 1.8 + 0.7,
      pulse: Math.random() * Math.PI * 2
    });
  }
}

function drawParticles() {
  ctx.clearRect(0, 0, width, height);

  particles.forEach((p) => {
    p.baseX += p.vx;
    p.baseY += p.vy;

    if (p.baseX < 0 || p.baseX > width) p.vx *= -1;
    if (p.baseY < 0 || p.baseY > height) p.vy *= -1;

    const dx = mouse.x === null ? 9999 : p.x - mouse.x;
    const dy = mouse.y === null ? 9999 : p.y - mouse.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < mouse.radius && distance > 0) {
      const force = (mouse.radius - distance) / mouse.radius;
      p.x += (dx / distance) * force * 2.2;
      p.y += (dy / distance) * force * 2.2;
    } else {
      p.x += (p.baseX - p.x) * 0.025;
      p.y += (p.baseY - p.y) * 0.025;
    }

    p.pulse += 0.018;
    const alpha = 0.4 + Math.sin(p.pulse) * 0.25;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(102, 246, 255, ${alpha})`;
    ctx.fill();
  });

  connectParticles();
}

function connectParticles() {
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 130) {
        const opacity = 1 - distance / 130;
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.strokeStyle = `rgba(125, 183, 255, ${opacity * 0.28})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    }
  }
}

function animateCanvas() {
  drawParticles();

  if (!prefersReducedMotion) {
    requestAnimationFrame(animateCanvas);
  }
}

window.addEventListener("resize", resizeCanvas);

window.addEventListener("mousemove", (event) => {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
});

window.addEventListener("mouseleave", () => {
  mouse.x = null;
  mouse.y = null;
});

resizeCanvas();
animateCanvas();
const mobileBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

mobileBtn?.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

document.querySelectorAll("#mobile-menu a").forEach((link) => {
  link.addEventListener("click", () => mobileMenu.classList.add("hidden"));
});

/* Cursor */
const cursorDot = document.getElementById("cursor-dot");
const cursorRing = document.getElementById("cursor-ring");

let cursorX = 0;
let cursorY = 0;
let ringX = 0;
let ringY = 0;

if (!prefersReducedMotion && window.matchMedia("(min-width: 769px)").matches) {
  window.addEventListener("mousemove", (event) => {
    cursorX = event.clientX;
    cursorY = event.clientY;

    cursorDot.style.left = `${cursorX}px`;
    cursorDot.style.top = `${cursorY}px`;
  });

  const animateCursor = () => {
    ringX += (cursorX - ringX) * 0.17;
    ringY += (cursorY - ringY) * 0.17;

    cursorRing.style.left = `${ringX}px`;
    cursorRing.style.top = `${ringY}px`;

    requestAnimationFrame(animateCursor);
  };

  animateCursor();

  document.querySelectorAll("a, button, .tilt-card").forEach((item) => {
    item.addEventListener("mouseenter", () => document.body.classList.add("cursor-hover"));
    item.addEventListener("mouseleave", () => document.body.classList.remove("cursor-hover"));
  });
}

/* Scroll progress */
const progress = document.getElementById("scroll-progress");

function updateScrollProgress() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const percentage = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  progress.style.width = `${percentage}%`;
}

window.addEventListener("scroll", updateScrollProgress, { passive: true });
updateScrollProgress();

/* Reveal animation */
const revealElements = document.querySelectorAll(".reveal");

if (!prefersReducedMotion) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.14,
      rootMargin: "0px 0px -80px 0px"
    }
  );

  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("active"));
}

/* Active nav */
const sections = document.querySelectorAll("section[id], footer[id]");
const navLinks = document.querySelectorAll(".nav-link");

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      navLinks.forEach((link) => link.classList.remove("active"));

      const activeLink = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
      activeLink?.classList.add("active");
    });
  },
  {
    threshold: 0.35
  }
);

sections.forEach((section) => navObserver.observe(section));

/* Magnetic buttons */
document.querySelectorAll(".magnetic-btn").forEach((button) => {
  button.addEventListener("mousemove", (event) => {
    if (prefersReducedMotion) return;

    const rect = button.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;

    button.style.transform = `translate(${x * 0.13}px, ${y * 0.22}px)`;
  });

  button.addEventListener("mouseleave", () => {
    button.style.transform = "";
