const liClose = document.querySelector('.close')
const arrow = document.querySelector('.click-sobre');
const arrowCloseDropDown = () => {
    
    const navbarOpen = document.querySelector('.navbar-open')
    arrow.addEventListener('click', () => {
        
        navbarOpen.classList.toggle("show-menu")
        liClose.classList.toggle('close')
        arrow.classList.toggle('click-styled')
    });
};
arrowCloseDropDown()

const body = document.querySelector('body');

body.addEventListener('click', (event) => {
 
  const navbar = document.querySelector('.navbar');
  const isClickInsideNavbar = navbar.contains(event.target);

  
  if (!isClickInsideNavbar) {
    const navbarOpen = document.querySelector('.navbar-open');
    navbarOpen.classList.remove('show-menu');
    liClose.classList.add('close');
    arrow.classList.remove('click-styled')
  }
});