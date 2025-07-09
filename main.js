window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const text = document.querySelector(".hero-text");

  // Delay added just to see the effect clearly on load
  setTimeout(() => {
    text.classList.add("visible");
  }, 300);
});
