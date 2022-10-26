// Your code goes here

//LOGO TEXT CHANGER
const logoHead = document.querySelector('.logo-heading')

logoHead.addEventListener('mouseover', function(event) {
    logoHead.classList.add('logoHeadChange')
    console.log(event)
})

logoHead.addEventListener('mouseleave', function(event) {
    logoHead.classList.remove('logoHeadChange')
    console.log(event)
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
    console.log(event)
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
    console.log(event)
})


// Change event

const footerChange = document.createElement('p')
document.querySelector('.footer').appendChild(footerChange)
footerChange.classList.add('change')
console.log(footerChange)


const selectEle = document.querySelector('.vacation');
console.log(selectEle)

function changeFunc(event) {
    const select = document.querySelector('.change');
    select.textContent = `You picked a ${event.target.value}!!`;
}

selectEle.addEventListener('change', changeFunc)



// Implementing select

// const footerSelect = document.createElement('p')
// document.querySelector('.footer').appendChild(footerSelect)
// footerSelect.classList.add('log')
// console.log(footerSelect)


// function logSelection(event) {
//     const log = document.querySelector('log');
//     const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
//     log.textContent = `You selected: ${selection}`
// }

// const textarea  = document.querySelector('div')
// textarea .onselect = logSelection;


//DRAG AND DROP
const draggableElement = document.querySelector('#myDraggableElement');

draggableElement.addEventListener('dragstart', event => {
    event.dataTransfer.setData('text/plain', draggableElement.id);
})

for (const dropZone of document.querySelectorAll('.drop-zone')) {
    //When draggable element is over a drop zone
    dropZone.addEventListener('dragover', event => {
        event.preventDefault();
        console.log('dcode')
    });

    // When draggable element is dropped onto drop zone 
    dropZone.addEventListener('drop', event => {
        event.preventDefault();

        const droppedElementId = event.dataTransfer.getData('text/plain');
        console.log(droppedElementId)
        const droppedElement = document.getElementById(droppedElementId);
        console.log(droppedElement)
        dropZone.appendChild(droppedElement);
        
    })
}

const newDraggableElement = document.querySelector('#testingDrag')

newDraggableElement.addEventListener('dragstart', event => {
    event.dataTransfer.setData('text/plain', newDraggableElement.id);
})

for (const dropZone of document.querySelectorAll('.drop-zone')) {
    //When draggable element is over a drop zone
    dropZone.addEventListener('dragover', event => {
        event.preventDefault();
        console.log('dcode')
    });

    // When draggable element is dropped onto drop zone 
    dropZone.addEventListener('drop', event => {
        event.preventDefault();

        const droppedElementId = event.dataTransfer.getData('text/plain');
        console.log(droppedElementId)
        const droppedElement = document.getElementById(droppedElementId);
        console.log(droppedElement)
        dropZone.appendChild(droppedElement);
        
    })
}



//preventDefault()
const navPrevent = document.querySelector('nav')
console.log('this is the nav prevent -->',navPrevent) 

navPrevent.addEventListener('click', function (event) {
    event.preventDefault();
})

//Trying out stopPropagation
const box = document.querySelector('.destination')
const myBtn = document.querySelector('.btn')

box.addEventListener('click', function() {
    this.style.backgroundColor = 'red'
})

myBtn.addEventListener('click', function (e) {
    myBtn.style.backgroundColor = 'red'
    e.stopPropagation();
    console.log('the button was pressed')
})



