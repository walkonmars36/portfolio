const navToggle = document.querySelector(".menu-button");
const nav = document.querySelector('nav')

navToggle.addEventListener("click", (_) => {
  document.body.classList.toggle("nav-is-open");
});

nav.addEventListener('click', _ => {
  document.body.classList.remove('nav-is-open')
})



const portfolio = document.querySelector('.projects')

portfolio.addEventListener('click', e => {
  //console.log(e)
  e.preventDefault()

  const modalToggle = e.target.closest('.projects__link')
  //console.log(modalToggle)
  if (! modalToggle) return

  const modal = modalToggle.parentNode.nextElementSibling
  const closeButton = modal.querySelector('.modal-button')

  modal.classList.add('is-open')

  closeButton.addEventListener('click', _ => {
    modal.classList.remove('is-open')
  })


})