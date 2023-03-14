const liClose = document.querySelector('.close')
const skils = document.querySelector('.click-skils');
const navbarOpen = document.querySelector('.navbar-open-skils')
const skilsCloseDropDown = () => {
     
    skils.addEventListener('click', () => {
        
        navbarOpen.classList.toggle("show-menu")
        liClose.classList.toggle('close')
        skils.classList.toggle('click-styled')
    });
};
skilsCloseDropDown()

const body = document.querySelector('body');

body.addEventListener('click', (event) => {
 
  const navbar = document.querySelector('.navbar');
  const isClickInsideNavbar = navbar.contains(event.target);

  
  if (!isClickInsideNavbar) {
    navbarOpen.classList.remove('show-menu');
    liClose.classList.add('close');
    skils.classList.remove('click-styled')
  }
});