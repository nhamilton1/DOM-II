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


// Implementing Load

const btnSelect = document.querySelectorAll('.btn')
console.log(btnSelect)

window.addEventListener('load', (event) => {
    window.setTimeout(() => {
        btnSelect[0].style.background = 'green'
    }, 2000);
    window.setTimeout(() => {
        btnSelect[1].style.background = 'blue';
    }, 3000);
    window.setTimeout(() => {
        btnSelect[2].style.background = 'orange'
    }, 4000);
})




// Implementing select

const footerSelect = document.createElement('p')
document.querySelector('.footer').appendChild(footerSelect)
footerSelect.classList.add('select')
console.log(footerSelect)

function logSelection(event) {
    const select = document.querySelector('select');
    const selection = event.target.input.substring(event.target.selectionStart, event.target.selectionEnd);
    select.textContent = `You selected: ${selection}`
    footerSelect.textContent = `You selected: ${selection}`
}

const input = document.querySelector('.footer p')
console.log(input)
footerSelect.addEventListener('select', logSelection)




// Change event
const selectEle = document.querySelector('.vacation');
console.log(selectEle)

function changeFunc(event) {
    const select = document.querySelector('.select');
    select.textContent = `You picked a ${event.target.value}!!`;
}

selectEle.addEventListener('change', changeFunc)
