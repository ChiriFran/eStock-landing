gsap.from(".logo", {
    y: -100,
    ease: "power3.out",
    duration: 1,
})

gsap.from(".menu-item", {
    y: -100,
    ease: "power3.out",
    duration: 1,
    stagger: 0.10
})

const text = new SplitType('.hero-title', { types: "words, chars" });

const colores = ["#307fe0", "#307fe0ab"]; // Solo naranja y azul
const colorFinal = "#292827"; // Blanco final

const colorAleatorio = () => colores[Math.floor(Math.random() * colores.length)];

// Desactivar hover inicialmente
let hoverHabilitado = false;

text.chars.forEach((char, index) => {
    let charsTl = gsap.timeline();

    charsTl.from(char, {
        y: gsap.utils.random(-100, 100),
        x: gsap.utils.random(-300, 300),
        rotate: gsap.utils.random(-360, 360),
        scale: gsap.utils.random(0, 2),
        opacity: 0,
        duration: .75,
        ease: "back.out",
        delay: index * 0.01
    });

    charsTl.from(char, {
        color: colorAleatorio(),
        duration: 1,
    }, "-=.25");

    // Al final de la animación, asegurarse que quede en blanco y habilitar el hover
    charsTl.to(char, {
        color: colorFinal,
        duration: 0.2,
        onComplete: () => {
            if (index === text.chars.length - 1) {
                // Habilitamos hover una vez que se animaron todas
                hoverHabilitado = true;
            }
        }
    });

    // Hover
    function charsHover() {
        if (!hoverHabilitado) return; // Si aún no terminó la animación, no hacer nada

        gsap.timeline()
            .to(char, {
                y: gsap.utils.random(-15, 15),
                x: gsap.utils.random(-15, 15),
                rotate: gsap.utils.random(-40, 40),
                scale: gsap.utils.random(0.8, 1.2),
                duration: .5,
                ease: "back.out",
                color: colorAleatorio(),
                onStart: () => {
                    char.removeEventListener("mouseenter", charsHover);
                }
            })
            .to(char, {
                y: 0,
                x: 0,
                rotate: 0,
                scale: 1,
                color: colorFinal, // Asegura que siempre vuelva a blanco
                delay: 1,
                duration: .3,
                ease: "back.out",
                onComplete: () => {
                    setTimeout(() => {
                        char.addEventListener("mouseenter", charsHover);
                    }, 100);
                }
            });
    }

    char.addEventListener("mouseenter", charsHover);
});

/* hero Text */
// Dividir el párrafo en palabras
const heroText = new SplitType('.hero-text', { types: "words" });

gsap.from(heroText.words, {
    opacity: 0,
    y: 20,
    stagger: 0.008, // muy rápido
    duration: 0.5,
    ease: "power2.out",
});

/* hero stats */
// Dividir números y textos
const statNumbers = new SplitType(".number", { types: "chars" });
const statTexts = new SplitType(".text", { types: "words" });

// Animar números (caracteres)
gsap.from(statNumbers.chars, {
    opacity: 0,
    y: 20,
    stagger: 0.05,
    duration: 0.5,
    ease: "power2.out"
});

// Animar textos (palabras)
gsap.from(statTexts.words, {
    opacity: 0,
    y: 20,
    stagger: 0.08,
    duration: 0.5,
    ease: "power2.out"
});

/* hero stat hover */
const heroStats = document.querySelectorAll(".hero-stat");

heroStats.forEach((stat) => {
    const bg = stat.querySelector(".hover-bg");

    stat.addEventListener("mouseenter", () => {
        gsap.to(bg, {
            scaleY: 1,
            duration: 0.4,
            ease: "power2.out"
        });
    });

    stat.addEventListener("mouseleave", () => {
        gsap.to(bg, {
            scaleY: 0,
            duration: 0.4,
            ease: "power2.in"
        });
    });
});

/* services items */
gsap.registerPlugin(ScrollTrigger);

// Inicializar las tarjetas con opacity 0 y scale reducido
/* services items – efecto alternativo */
/* services items – premium & mobile safe */
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".hero-services-item").forEach((item, index) => {

    gsap.set(item, {
        opacity: 0,
        y: 40,
        scale: 0.94,
        transformPerspective: 800
    });

    gsap.to(item, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.7,
        ease: "expo.out",
        delay: index * 0.08,
        scrollTrigger: {
            trigger: item,
            start: "top 85%",
            once: true
        }
    });

});

/* mockup */
/* video section – entrada premium + stagger + floating */
gsap.registerPlugin(ScrollTrigger);

const videoTl = gsap.timeline({
    scrollTrigger: {
        trigger: ".videoContainer",
        start: "top 80%",
        once: true
    }
});

videoTl
.from(".videoContent", {
    opacity: 0,
    y: 20,
    duration: 0.5,
    ease: "power2.out"
})
.from(
    ".videoText h2, .videoText p",
    {
        opacity: 0,
        y: 18,
        duration: 0.55,
        ease: "power2.out",
        stagger: 0.08
    },
    "-=0.3"
)
.from(
    ".videoMockup img",
    {
        opacity: 0,
        y: 40,
        duration: 0.7,
        ease: "power3.out",
        onComplete: startVideoFloating
    },
    "-=0.45"
);

/* floating suave del mockup */
function startVideoFloating() {
    gsap.to(".videoMockup img", {
        y: "+=28",
        duration: 2.2,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1
    });
}


// Forzar recalcular el ScrollTrigger tras la carga
gsap.delayedCall(0.1, () => ScrollTrigger.refresh());

// Scroll horizontal 
const scrollInner = document.querySelector(".scrollInner");
const totalScroll = scrollInner.scrollWidth - window.innerWidth;

gsap.to(scrollInner, {
    x: () => -totalScroll,
    ease: "none",
    scrollTrigger: {
        trigger: ".scrollSection",
        start: "top top",
        end: () => `+=${scrollInner.scrollWidth}`,
        scrub: 2,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true
    }
});

