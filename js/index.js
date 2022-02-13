// // Observe change in section for text-color switch in navigation.
// const sections = document.querySelectorAll("section");
// const nav = document.querySelector(".nav-list");

// const options = {
//   root: null,
//   threshold: 0.5,
// };

// const observer = new IntersectionObserver(function (entries, observer) {
//   entries.forEach((entry) => {
//     if (!entry.isIntersecting) {
//       return;
//     }

//     if (entry.target.className === "hero-section") {
//       nav.classList.toggle("text-white");
//     }

//     if (entry.target.className === "about-section") {
//       nav.classList.toggle("text-white");
//     }

//     if (entry.target.className === "projects-section") {
//       nav.classList.toggle("text-white");
//     }
//   });
// }, options);

// sections.forEach((section) => {
//   observer.observe(section);
// });

// Projects Tab toggle
const tab1 = document.getElementById("group-tab");
const tab2 = document.getElementById("individual-tab");
const group = document.getElementById("group-projects");
const individual = document.getElementById("individual-projects");

tab1.addEventListener("click", () => {
  const t1Active = tab1.getAttribute("aria-selected");

  if (t1Active === "false") {
    tab1.setAttribute("aria-selected", true);
    tab2.setAttribute("aria-selected", false);

    group.setAttribute("data-visible", true);
    individual.setAttribute("data-visible", false);
  }
});

tab2.addEventListener("click", () => {
  const t2Active = tab2.getAttribute("aria-selected");

  if (t2Active === "false") {
    tab1.setAttribute("aria-selected", false);
    tab2.setAttribute("aria-selected", true);

    group.setAttribute("data-visible", false);
    individual.setAttribute("data-visible", true);
  }
});
