const navToggle = document.querySelector(".menu__button");

navToggle.addEventListener("click", (_) => {
  document.body.classList.toggle("nav-is-open");
});
