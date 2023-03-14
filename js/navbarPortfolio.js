const liClose = document.querySelector('.close')
const portfolio = document.querySelector('.click-portfolio');
const navbarOpen = document.querySelector('.navbar-open-portfolio')
const portfolioCloseDropDown = () => {
     
    portfolio.addEventListener('click', () => {
        
        navbarOpen.classList.toggle("show-menu")
        liClose.classList.toggle('close')
        portfolio.classList.toggle('click-styled')
    });
};
portfolioCloseDropDown()

const body = document.querySelector('body');

body.addEventListener('click', (event) => {
 
  const navbar = document.querySelector('.navbar');
  const isClickInsideNavbar = navbar.contains(event.target);

  
  if (!isClickInsideNavbar) {
    navbarOpen.classList.remove('show-menu');
    liClose.classList.add('close');
    portfolio.classList.remove('click-styled')
  }
});