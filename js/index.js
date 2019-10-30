// Your code goes here
//1
const changeTitle = document.querySelector('title');
window.addEventListener('load', () => {
    changeTitle.textContent = 'Fun Bus Travel Agency - Not The Solution'
})

//2 Separate these functions for stopPropgation
const backgroundChange = document.querySelector('body');
backgroundChange.addEventListener('click', () => {
    backgroundChange.style.background = 'blue';
})

//3
const removeImgOnScroll = document.querySelector('img');
window.addEventListener("wheel", () => {
    removeImgOnScroll.src = '';
})

//4
const buttonText = document.querySelectorAll('.btn');
buttonText.forEach( (element) => {
    element.addEventListener('dblclick', () => {
        element.style.color = 'black';
    })
})

//5
const transformImgs = document.querySelectorAll('.img-content');
transformImgs.forEach( (element) => {
    element.addEventListener("mouseenter", () => {
        element.style.transform ="scale(1.2)";
        element.style.transition = "all 0.3s"
      })
      element.addEventListener("mouseleave", () => {
        element.style.transform ="scale(1)";
        element.style.transition = "all 0.3s"
      })
})

//6
const resizeImg = document.querySelector('.content-destination img');
window.addEventListener('resize', () => {
    resizeImg.src = "img/hd.jpg";
})

//7
const bodyBGChange = document.querySelector('body');
window.addEventListener('scroll', (element) => {
    bodyBGChange.style.background = 'purple';
})

//8
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach( (element) => {
    element.addEventListener('click', (event) => {
        event.preventDefault();
    })
})

//9
document.addEventListener('keydown', (element) => {
    console.log(` ${element.code}`);
})

//10
const logoHeaderClick = document.querySelector('.logo-heading');
logoHeaderClick.addEventListener('click', (event) => {
    logoHeaderClick.style.background = 'blue';
    event.stopPropagation();
})