//Hamburger Menu transitions and functions
document.addEventListener("scroll", () => {
    const nav = document.querySelector('.header-container');
    const hamburger = document.querySelector('.hamburger-menu');
    const devDeskLogo = document.querySelector('.header-container h1');
    const mq = window.matchMedia("(max-width: 600px)");
    if (!mq.matches) {
        if (this.scrollY >= 150) {
            hamburger.classList.remove('hamburger-open-timing');
            nav.classList.add('nav-fixed-change');
            hamburger.classList.add('hamburger-menu-scroll');
            nav.classList.remove('nav-hamburger-clicked');
            hamburger.classList.remove('hamburger-menu-click');
            devDeskLogo.classList.remove('devDesk-Shadow');
        } else {
            nav.classList.remove('nav-fixed-change');
            hamburger.classList.remove('hamburger-menu-scroll');
            hamburger.classList.add('hamburger-open-timing');
            devDeskLogo.classList.add('devDesk-Shadow');
        }
    } else if (mq.matches) {
        nav.classList.remove('nav-hamburger-clicked');
    }
});
window.addEventListener('resize', () => {
    const nav = document.querySelector('.header-container');
    if (this.innerWidth < 600) {
        nav.classList.remove('nav-fixed-change');
    }
});

const hamburgerIcon = document.querySelector('.hamburger-menu');
hamburgerIcon.addEventListener('click', () => {
    const hamburger = document.querySelector('.hamburger-menu');
    const nav = document.querySelector('.header-container');
    switch (true) {
        case !hamburger.classList.contains('hamburger-menu-click'):
            hamburger.classList.add('hamburger-menu-click');
            nav.classList.add('nav-hamburger-clicked');
            break;
        case hamburger.classList.contains('hamburger-menu-click'):
            hamburger.classList.remove('hamburger-menu-click');
            nav.classList.remove('nav-hamburger-clicked');
            break;
    }
});
///End Hamburger Menu