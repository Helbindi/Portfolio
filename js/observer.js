const sectionAbout = document.querySelector(".about-section");
const sections = document.querySelectorAll("section");
const nav = document.querySelector(".nav-list");

const options = {
  root: null,
  threshold: 0.5,
};

const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }

    if (entry.target.className === "hero-section") {
      nav.classList.toggle("text-white");
    }

    if (entry.target.className === "about-section") {
      nav.classList.toggle("text-white");
    }

    if (entry.target.className === "projects-section") {
      nav.classList.toggle("text-white");
    }
  });
}, options);

sections.forEach((section) => {
  observer.observe(section);
});
