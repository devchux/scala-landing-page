(function name() {
  const navContents = document.querySelector('nav .nav-contents');
  const navToggler = document.querySelector('.nav-toggler');

  navToggler.addEventListener('click', () => {
    navToggler.classList.toggle('open');
    navContents.classList.toggle('show-nav-menu');
  });
})()