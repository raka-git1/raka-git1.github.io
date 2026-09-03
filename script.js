const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-menu a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});

document.querySelectorAll(".project-btn").forEach(button => {
  button.addEventListener("click", () => {
    if (button.textContent.includes("Coming")) {
      alert("Project ini masih dalam proses.");
    } else {
      alert("Link project bisa kamu masukkan di bagian JavaScript ini.");
    }
  });
});

const sections = document.querySelectorAll(".section, .contact-section");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.12 }
);

sections.forEach(section => observer.observe(section));
