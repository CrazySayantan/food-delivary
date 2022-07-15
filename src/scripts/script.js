let toggleDesktop = document.querySelector('#checkbox');
let toggleMobile = document.querySelector('#checkbox2');
toggleDesktop.addEventListener("change", () => {
  console.log('desk');
  document.body.classList.toggle('dark')
});
toggleMobile.addEventListener("change", () => {
  console.log('mob');
  document.body.classList.toggle('dark')
});