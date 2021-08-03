// Your code goes here

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


//USING ZOOM ON IMG-CONTENT
const imgZoom = document.querySelector('.img-content')
console.log(imgZoom)
let scale = 1;
imgZoom.addEventListener('wheel', function(event) {
    event.preventDefault(); // got this from mdn
    scale += event.deltaY * -0.001;
    scale = Math.min(Math.max(.0125, scale), 6);
    imgZoom.style.transform = `scale(${scale})`;
})