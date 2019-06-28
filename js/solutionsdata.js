//Constructor and datasets for solutions
class BoxLink {
    constructor(boxAttr) {
        this.boxAttr = boxAttr;
        this.boxData = this.boxAttr.dataset.box;
        this.contentCards = document.querySelector(`.box-card[data-box="${this.boxData}"]`);
        this.boxAttr.addEventListener('mouseover', () => this.selectBox());
    }
    selectBox() {
        const boxes = document.querySelectorAll('.box-card');
        boxes.forEach(box => {
            box.style.display = "none";
        });
        this.contentCards.style.display = "block";
        this.contentCards.classList.add('active-box');
    }
}
//If the window is not below 850px width, dataset comes into play and allows changing
const mq850 = window.matchMedia("(max-width: 850px)");
if (!mq850.matches) {
    let boxes = document.querySelectorAll('.solution-box');
    boxes.forEach(box => new BoxLink(box));
}

//Adding-removing classes based on resize
window.addEventListener('resize', () => {
    const boxColumn = document.querySelectorAll('.box-card');
    if (this.innerWidth <= 850) {
        boxColumn.forEach(box => {
            box.style.display = "block";
        });
    }
});

//Smoothscrolling when hyperlink clicked
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        //change scrolling distance based on media query
        var element = document.querySelector(this.getAttribute('href'));
        var elementPosition = element.getBoundingClientRect().top;
        const mq600 = window.matchMedia("(max-width: 600px)");
        if (!mq850.matches) {
            var headerOffset = 100;
        } else if (mq850.matches) {
            if (!mq600.matches) {
                var headerOffset = 140;
            } else if (mq600.matches) {
                var headerOffset = 115;
            }
        };
        var offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    });
});