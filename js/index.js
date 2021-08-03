// Your code goes here

const { compareDesc } = require("date-fns")

//LOGO TEXT CHANGER
const logoHead = document.querySelector('.logo-heading')

logoHead.addEventListener('mouseover', function(event) {
    logoHead.classList.add('logoHeadChange')
})

logoHead.addEventListener('mouseleave', function(event) {
    logoHead.classList.remove('logoHeadChange')
})


//H2 CHANGERS
const introH2Change = document.querySelector('.intro h2')
console.log(introH2Change)

document.addEventListener('keydown', function(event) {
    if(event.key === 'a'){
        introH2Change.classList.add('changeTextColor')
    } else {
        introH2Change.classList.remove('changeTextColor')
    }
})

const introPChange = document.querySelector('.intro p')
console.log(introPChange)
document.addEventListener('keydown', function(event) {
    if(event.key === 's'){
        introPChange.classList.add('changeTextColorP')
    } else {
        introPChange.classList.remove('changeTextColorP')
    }
})


const textContentH2Change = document.querySelector('.text-content h2')
console.log(textContentH2Change)
document.addEventListener('keydown', function(event) {
    if(event.key === 'd'){
        textContentH2Change.classList.add('changeTextColorTwo')
    } else {
        textContentH2Change.classList.remove('changeTextColorTwo')
    }
})


//USING WHEEL ON IMG-CONTENT
const imgZoom = document.querySelector('.img-content')
console.log(imgZoom)
let scale = 1;
imgZoom.addEventListener('wheel', function(event) {
    event.preventDefault(); // got this from mdn
    scale += event.deltaY * -0.001;
    scale = Math.min(Math.max(.0125, scale), 6);
    imgZoom.style.transform = `scale(${scale})`;
})


// USING DBCLICK
const inverseContentSection = document.querySelector('.inverse-content')
console.log(inverseContentSection)

inverseContentSection.addEventListener('dblclick', function (event) {
    inverseContentSection.classList.toggle('large')
})


// Trying to use focus
const navFocus = document.querySelector('.nav')
console.log(navFocus)

navFocus.addEventListener('focusin', (event) => {
    event.target.style.background = 'black';
    event.target.style.color = 'white';
})

navFocus.addEventListener('focusout', (event) => {
    event.target.style.background = '';
    event.target.style.color = ''
})