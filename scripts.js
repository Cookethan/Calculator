//starting variables
let firstOperand = ''
let operator = null
let secondOperand = ''

//display query selectors
const currentEquation = document.querySelector('.currentEquation')
const calcDisplay = document.querySelector('.calcDisplay')

//numer button query selectors
const oneBtn = document.querySelector('.oneBtn')
const twoBtn = document.querySelector('.twoBtn')
const threeBtn = document.querySelector('.threeBtn')
const fourBtn = document.querySelector('.fourBtn')
const fiveBtn = document.querySelector('.fiveBtn')
const sixBtn = document.querySelector('.sixBtn')
const sevenBtn = document.querySelector('.sevenBtn')
const eightBtn = document.querySelector('.eightBtn')
const nineBtn = document.querySelector('.nineBtn')
const zeroBtn = document.querySelector('.zeroBtn')
const numBtns = document.querySelectorAll('.numBtn')
const numBtnsArray = Array.from(numBtns)
//operator query selectors
const addBtn = document.querySelector('.addBtn')
const subBtn = document.querySelector('.subBtn')
const mulBtn = document.querySelector('.mulBtn')
const divBtn = document.querySelector('.divBtn')
const equalBtn = document.querySelector('.equalBtn')

const CLEARDISPLAY = document.querySelector('.clearDisplay')

//number btn onclick functions// add number to Operand variables as string

// oneBtn.onclick =()=>{
//     operator == null ? firstOperand += '1' : secondOperand += '1'
//     console.log(firstOperand)
// }
function clearDisplays(){
    calcDisplay.textContent = '0'
    currentEquation.textContent = '0'
    console.log('clearDisplays called')
}

function updateDisplay(){
    calcDisplay.textContent = firstOperand
}

function updateEquation(){
    currentEquation.textContent = `${firstOperand}${operator}`
}

// CLEARDISPLAY.onclick = clearDisplay()
CLEARDISPLAY.addEventListener('click', ()=>{
    clearDisplays()
})


numBtns.forEach((btn)=>{
    btn.addEventListener('click', ()=>{
        operator == null ? firstOperand += btn.textContent : secondOperand += btn.textContent;
        updateDisplay()
        console.log(firstOperand)
    })
})