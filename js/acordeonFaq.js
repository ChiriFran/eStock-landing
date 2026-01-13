document.addEventListener("DOMContentLoaded", () => {
  /* ----------------------------
     ACORDEÓN
  ----------------------------- */
  const questions = document.querySelectorAll(".faqQuestion");

  questions.forEach((btn) => {
    btn.addEventListener("click", () => {
      const item = btn.closest(".faqItem");
      if (!item) return;

      document.querySelectorAll(".faqItem").forEach((el) => {
        if (el !== item) el.classList.remove("active");
      });

      item.classList.toggle("active");
    });
  });

  /* ----------------------------
     INTERSECTION OBSERVER
  ----------------------------- */
  const faqItems = document.querySelectorAll(".faqItem");

  if (faqItems.length) {
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
  }

  /* ----------------------------
     GSAP
  ----------------------------- */
  if (window.gsap && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".faqTag", {
      y: 40,
      opacity: 0,
      duration: 0.7,
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
  }
});
