<<<<<<< HEAD
```javascript
/* =========================
   TYPING EFFECT
========================= */

const typingElement = document.getElementById("typing");

const words = [
    "Developer",
    "Creative Person",
    "Problem Solver",
    "Dreamer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {
            deleting = true;

            setTimeout(typeEffect, 1500);
            return;
        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {
            deleting = false;
            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }
        }
    }

    setTimeout(typeEffect, deleting ? 60 : 100);
}

typeEffect();


/* =========================
   SCROLL REVEAL
========================= */

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {

    const windowHeight = window.innerHeight;

    reveals.forEach(element => {

        const elementTop =
            element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            element.classList.add("active");
        }

    });
}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


/* =========================
   NAVBAR SCROLL
========================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


/* =========================
   CURSOR GLOW
========================= */

const cursorGlow =
    document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (event) => {

    cursorGlow.style.left = event.clientX + "px";
    cursorGlow.style.top = event.clientY + "px";

});


/* =========================
   FUNDING BUTTON
========================= */

function fundingAlert() {

    alert(
        "Terima kasih sudah ingin mendukung saya! ✦\n\n" +
        "Ganti link tombol ini dengan link funding kamu."
    );

}


/* =========================
   CARD TILT EFFECT
========================= */

const cards = document.querySelectorAll(
    ".hero-card, .funding-card"
);

cards.forEach(card => {

    card.addEventListener("mousemove", event => {

        const rect = card.getBoundingClientRect();

        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX =
            ((y - centerY) / centerY) * -4;

        const rotateY =
            ((x - centerX) / centerX) * 4;

        card.style.transform =
            `perspective(700px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-5px)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});
```
=======
```javascript
/* =========================
   TYPING EFFECT
========================= */

const typingElement = document.getElementById("typing");

const words = [
    "Developer",
    "Creative Person",
    "Problem Solver",
    "Dreamer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {
            deleting = true;

            setTimeout(typeEffect, 1500);
            return;
        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {
            deleting = false;
            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }
        }
    }

    setTimeout(typeEffect, deleting ? 60 : 100);
}

typeEffect();


/* =========================
   SCROLL REVEAL
========================= */

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {

    const windowHeight = window.innerHeight;

    reveals.forEach(element => {

        const elementTop =
            element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            element.classList.add("active");
        }

    });
}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


/* =========================
   NAVBAR SCROLL
========================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


/* =========================
   CURSOR GLOW
========================= */

const cursorGlow =
    document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (event) => {

    cursorGlow.style.left = event.clientX + "px";
    cursorGlow.style.top = event.clientY + "px";

});


/* =========================
   FUNDING BUTTON
========================= */

function fundingAlert() {

    alert(
        "Terima kasih sudah ingin mendukung saya! ✦\n\n" +
        "Ganti link tombol ini dengan link funding kamu."
    );

}


/* =========================
   CARD TILT EFFECT
========================= */

const cards = document.querySelectorAll(
    ".hero-card, .funding-card"
);

cards.forEach(card => {

    card.addEventListener("mousemove", event => {

        const rect = card.getBoundingClientRect();

        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX =
            ((y - centerY) / centerY) * -4;

        const rotateY =
            ((x - centerX) / centerX) * 4;

        card.style.transform =
            `perspective(700px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-5px)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});
```
>>>>>>> fc556bed2d5c5b5aa3cff438d1b04dacb9f74689
