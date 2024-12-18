const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const mobileMenuClose = document.getElementById("mobile-menu-close");

mobileMenuToggle.addEventListener("click", () => {
  mobileMenu.classList.remove("translate-x-full");
  mobileMenu.classList.add("translate-x-0");
});

mobileMenuClose.addEventListener("click", () => {
  mobileMenu.classList.remove("translate-x-0");
  mobileMenu.classList.add("translate-x-full");
});
