const liClose = document.querySelector('.close')

const arroCloseDropDown = () => {
    const arrow = document.querySelector('.click-sobre');
    const navbarOpen = document.querySelector('.navbar-open')
    arrow.addEventListener('click', () => {
        
        navbarOpen.classList.toggle("show-menu")
        liClose.classList.toggle('close')
        
    });
};
arroCloseDropDown()