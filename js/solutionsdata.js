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
let boxes = document.querySelectorAll('.solution-box');
boxes.forEach(box => new BoxLink(box));