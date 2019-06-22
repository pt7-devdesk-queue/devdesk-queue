//Hamburger Menu transitions and functions
document.addEventListener("scroll", () => {
    const nav = document.querySelector('.header-container');
    const hamburger = document.querySelector('.hamburger-menu');
    if (this.scrollY >= 150) {
        hamburger.classList.remove('hamburger-open-timing');
        nav.classList.add('nav-fixed-change');
        hamburger.classList.add('hamburger-menu-scroll');
        nav.classList.remove('nav-hamburger-clicked');
        hamburger.classList.remove('hamburger-menu-click');
    } else {
        nav.classList.remove('nav-fixed-change');
        hamburger.classList.remove('hamburger-menu-scroll');
        hamburger.classList.add('hamburger-open-timing');
    }
});
const hamburgerIcon = document.querySelector('.hamburger-menu');
hamburgerIcon.addEventListener('click', () => {
    const hamburger = document.querySelector('.hamburger-menu');
    const nav = document.querySelector('.header-container');

    if (!hamburger.classList.contains('hamburger-menu-click')) {
        hamburger.classList.add('hamburger-menu-click');
        nav.classList.add('nav-hamburger-clicked');
    } else if (hamburger.classList.contains('hamburger-menu-click')) {
        hamburger.classList.remove('hamburger-menu-click');
        nav.classList.remove('nav-hamburger-clicked');
    }
});
