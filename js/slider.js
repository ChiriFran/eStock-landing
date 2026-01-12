const slides = document.querySelector(".slides");
const slideItems = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const dotsContainer = document.querySelector(".dots");

let index = 0;

// Crear dots
slideItems.forEach((_, i) => {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  if (i === 0) dot.classList.add("active");
  dot.addEventListener("click", () => {
    index = i;
    updateSlider();
  });
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");

function updateSlider() {
  slides.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach((d) => d.classList.remove("active"));
  dots[index].classList.add("active");
}

nextBtn.addEventListener("click", () => {
  index++;
  if (index >= slideItems.length) index = 0;
  updateSlider();
});

prevBtn.addEventListener("click", () => {
  index--;
  if (index < 0) index = slideItems.length - 1;
  updateSlider();
});
