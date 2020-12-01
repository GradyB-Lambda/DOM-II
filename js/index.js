// Your code goes here

// 1. MouseOver
let h1 = document.querySelector('h1');
h1.addEventListener('mouseover', function(event) {
    event.target.style.color = 'hotpink';
})

// 2.Click
const newH1 = document.querySelector('h1');
newH1.addEventListener('click', function(){
    newH1.style.color = 'pink'
})

// 3.Keydown
const newBackground = document.querySelector('body');
newBackground.addEventListener('keydown', function(){
    newBackground.style.backgroundColor = 'orange'
})

// 4.ContextMenu
const noContext = document.querySelector('body')

noContext.addEventListener('contextmenu', e => {
    e.preventDefault();
});
 // 5.Load
// When window loads console displays a message
window.addEventListener('load', () => {
    console.log('page is loaded');
})

 // 5.Resize
window.addEventListener('resize', () => {
    console.log(window.innerWidth + window.innerHeight)
})

// 6.Scroll
window.addEventListener("scroll", () => {
    console.log('you scrolled')
})

// 7.Select
let introHeader = document.querySelector('.intro h2');
introHeader.addEventListener('select', e => {
    e.currentTarget.style.backgroundColor = 'white';
})

// 8.
let footer = document.querySelector('footer');
footer.addEventListener('dblclick', function(event) {
    event.target.style.background = '#62A2B8'

})
 // 9. Mouseover 
 const mouseH1 = document.querySelector('h1');
mouseH1.addEventListener('mouseover', function(event) {
    event.target.style.color = 'hotpink';
})
  // 10.Wheel
let container = document.querySelectorAll('.container.home')
body.addEventListener('wheel', function() {
    container[0].style.background = '#FDB34B';
})



let introImg = document.querySelector('.intro img');

introImg.addEventListener('drag', (event) => {
    event.currentTarget.style.width = '400px';
})
introImg.addEventListener('dragend', (event) => {
    event.currentTarget.style.width = '800px';
})
introHeader.addEventListener('dragover', (event) => {
    event.preventDefault();
});
introHeader.addEventListener('drop', (event) => {
    body.style.backgroundColor = '#D53743';
});

//Prevent nav from refreshing page
document.querySelector('nav').addEventListener('click', function(event) {
    event.preventDefault()
})