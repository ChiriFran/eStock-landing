/* ========= STARTER MODAL ========= */
const starterModal = document.getElementById("starterModal");
const starterOverlay = document.getElementById("starterOverlay");
const openStarter = document.querySelector(".open-starter-modal");
const closeStarter = document.getElementById("closeStarter");

const starterTl = gsap.timeline({ paused: true });

starterTl
  .to(starterOverlay, {
    opacity: 1,
    pointerEvents: "auto",
    duration: 0.3,
  })
  .to(
    starterModal,
    {
      y: "-50%",
      opacity: 1,
      pointerEvents: "auto",
      duration: 0.45,
      ease: "power3.out",
    },
    "-=0.15"
  );

openStarter.addEventListener("click", () => {
  document.body.classList.add("modal-open");
  starterTl.play(0);
});

function closeStarterModal() {
  gsap.to(starterModal, {
    y: "100%",
    opacity: 0,
    pointerEvents: "none",
    duration: 0.35,
  });

  gsap.to(starterOverlay, {
    opacity: 0,
    pointerEvents: "none",
    duration: 0.3,
    onComplete: () => {
      document.body.classList.remove("modal-open");
    },
  });
}

closeStarter.addEventListener("click", closeStarterModal);
starterOverlay.addEventListener("click", closeStarterModal);

/* ========= PRO MODAL ========= */
const proModal = document.getElementById("proModal");
const proOverlay = document.getElementById("proOverlay");
const openPro = document.querySelector(".open-pro-modal");
const closePro = document.getElementById("closePro");

const proTl = gsap.timeline({ paused: true });

proTl
  .to(proOverlay, {
    opacity: 1,
    pointerEvents: "auto",
    duration: 0.3,
  })
  .to(
    proModal,
    {
      y: "-50%",
      opacity: 1,
      pointerEvents: "auto",
      duration: 0.45,
      ease: "power3.out",
    },
    "-=0.15"
  );

openPro.addEventListener("click", () => {
  document.body.classList.add("modal-open");
  proTl.play(0);
});

function closeProModal() {
  gsap.to(proModal, {
    y: "100%",
    opacity: 0,
    pointerEvents: "none",
    duration: 0.35,
  });

  gsap.to(proOverlay, {
    opacity: 0,
    pointerEvents: "none",
    duration: 0.3,
    onComplete: () => {
      document.body.classList.remove("modal-open");
    },
  });
}

closePro.addEventListener("click", closeProModal);
proOverlay.addEventListener("click", closeProModal);

/* ESC para ambos */
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeStarterModal();
    closeProModal();
  }
});
