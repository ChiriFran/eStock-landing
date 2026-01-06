const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("open");

    hamburger.classList.toggle("active", isOpen);
    document.body.classList.toggle("menu-open", isOpen);
});
