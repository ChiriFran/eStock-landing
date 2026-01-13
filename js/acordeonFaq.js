// Acordeón
document.querySelectorAll(".faqQuestion").forEach((btn) => {
  btn.addEventListener("click", () => {
    const item = btn.parentElement;

    // Cerrar otros
    document.querySelectorAll(".faqItem").forEach((el) => {
      if (el !== item) el.classList.remove("active");
    });

    item.classList.toggle("active");
  });
});

// Animación al aparecer items
const faqItems = document.querySelectorAll(".faqItem");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.2 }
);

faqItems.forEach((item) => observer.observe(item));

/* ----------------------------
   GSAP: Entrada de título
----------------------------- */
gsap.registerPlugin(ScrollTrigger);

gsap.from(".faqTag", {
  y: 40,
  opacity: 0,
  duration: 0.8,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".faqSection",
    start: "top 80%",
  },
});

gsap.from(".faqTitle", {
  y: 50,
  opacity: 0,
  duration: 1,
  ease: "power3.out",
  delay: 0.1,
  scrollTrigger: {
    trigger: ".faqSection",
    start: "top 80%",
  },
});

gsap.from(".faqSubtitle", {
  y: 60,
  opacity: 0,
  duration: 1,
  ease: "power3.out",
  delay: 0.2,
  scrollTrigger: {
    trigger: ".faqSection",
    start: "top 80%",
  },
});
