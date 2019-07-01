class Carousel {
    constructor(el) {
        this.el = el;
        this.card = this.el.querySelectorAll('.card');                
        this.left = this.el.querySelector('.left-button');
        this.right = this.el.querySelector('.right-button');
        this.currentIndex = 0;
        this.right.addEventListener('click', this.next.bind(this));
        this.left.addEventListener('click', this.next.bind(this));        
        this.card[this.currentIndex].style.display = 'block';        
    }

    next() {
        if (this.currentIndex < 3 || this.currentIndex > -3) {
            this.card.forEach(el => el.style.display = "none");            
            this.currentIndex = (this.currentIndex + 1) % this.card.length;            
            this.card[this.currentIndex].style.display = 'block';
        }
    }
}

let carousel = document.querySelector('.carousel');

let createCarousel = new Carousel(carousel);

//fix two cards showing up on load
const button = document.querySelector('.left-button');
button.addEventListener('load',button.click());