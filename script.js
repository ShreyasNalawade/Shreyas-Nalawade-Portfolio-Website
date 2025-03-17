// ======================Screen shot =======================

// ======================== toggle Icon navbar ============================
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("fa-xmark");
  navbar.classList.toggle("active");
};

// ======================== Scroll Section active link ============================

let section = document.querySelectorAll("section");
let navLink = document.querySelectorAll("header nav a");

window.onscroll = () => {
  section.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLink.forEach((link) => {
        link.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  // section active by ai

  // ==============================sticky navbar======================

  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  // ==============================remove toggle icon and  navbar======================

  menuIcon.classList.remove("fa-xmark");
  navbar.classList.remove("active");
};

// ==============================remove toggle icon and  navbar======================

ScrollReveal({
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img , .skill-container, .project-box, .contact form ",
  { origin: "buttom" }
);
ScrollReveal().reveal(".home-content h1 ,.about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p , .about-content", { origin: "right" });

// ======================Screen shot =======================
// document.addEventListener("keydown", function (e) {
//   if (e.key === "PrintScreen" || (e.ctrlKey && e.shiftKey && e.key === "S")) {
//     e.preventDefault();
//     alert("Screenshots are disabled on this website.");
//   }
// });

// HTMLCanvasElement.prototype.toDataURL = function () {
//   alert("Screenshots are disabled!");
//   return "";
// };
