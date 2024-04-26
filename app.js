let boxes = document.querySelectorAll('.box');
let main = document.querySelector('.main');
for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', () => {
        let bgColor = window.getComputedStyle(boxes[i]).getPropertyValue("background-color");
        main.style.backgroundColor = bgColor;
    });
}
