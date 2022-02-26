// Toggle hamburger nav
const nav = document.querySelector(".nav-list");
const navToggle = document.querySelector(".mobile-nav-toggle");

// user clicks the hamburger button
navToggle.addEventListener("click", () => {
  const visibility = nav.getAttribute("data-visible");
  if (visibility === "false") {
    // if nav is closed, open it
    nav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else {
    // if nav is open, close it
    nav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
});

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
