document.addEventListener("scroll", () => {
    const nav = document.querySelector('.header-container');
    const hamburger = document.querySelector('.hamburger-menu');
    if (this.scrollY >= 10) {
        hamburger.classList.remove('hamburger-open-timing');
        nav.classList.add('nav-fixed-change')
        hamburger.classList.add('hamburger-menu-scroll');
    } else {
        nav.classList.remove('nav-fixed-change');
        hamburger.classList.remove('hamburger-menu-scroll');
        hamburger.classList.add('hamburger-open-timing');
    }
});

const hamburgerIcon = document.querySelector('.hamburger-menu');

hamburgerIcon.addEventListener('click', () => {
    const hamburger = document.querySelector('.hamburger-menu');
    if (hamburger.classList.contains('hamburger-menu-click')) {
        hamburger.classList.remove('hamburger-menu-click');
    } else {
        hamburger.classList.remove('hamburger-menu-click');
        hamburger.classList.add('hamburger-menu-click')
    }
})