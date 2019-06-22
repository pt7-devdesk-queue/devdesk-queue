document.addEventListener("scroll", () => {
    const nav = document.querySelector('.header-container');
    if (this.scrollY >= 10) {
        nav.classList.add('nav-fixed-change')
    } else {
        nav.classList.remove('nav-fixed-change');
    }
});