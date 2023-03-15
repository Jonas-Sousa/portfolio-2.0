const liClose = document.querySelector('.close')
const contato = document.querySelector('.click-contato');
const navbarOpen = document.querySelector('.navbar-open-contato')
const contatoCloseDropDown = () => {
     
    contato.addEventListener('click', () => {
        
        navbarOpen.classList.toggle("show-menu")
        liClose.classList.toggle('close')
        contato.classList.toggle('click-styled')
    });
};
contatoCloseDropDown()

const body = document.querySelector('body');

body.addEventListener('click', (event) => {
 
  const navbar = document.querySelector('.navbar');
  const isClickInsideNavbar = navbar.contains(event.target);

  
  if (!isClickInsideNavbar) {
    navbarOpen.classList.remove('show-menu');
    liClose.classList.add('close');
    contato.classList.remove('click-styled')
  }
});
