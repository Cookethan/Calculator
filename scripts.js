//starting variables
let firstOperand = ''
let operator = null
let secondOperand = ''
let isMidEquation = false
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

const operatorArray = [addBtn, subBtn, mulBtn, divBtn]

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
    firstOperand = ''
    secondOperand = ''
    operator = null
    isMidEquation = false
}

function updateDisplay(){
    operator == null ? calcDisplay.textContent = firstOperand : calcDisplay.textContent = secondOperand
}

function updateEquation(){
   operator == null ? currentEquation.textContent = `${firstOperand}` : currentEquation.textContent = `${firstOperand}${operator}`
}

function calculateEquation(firstOperand, operator, secondOperand){
    if(operator == null){
        alert('you broke it, press clear to reset')
        return
    }
    let result
    firstOperand = Number(firstOperand)
    secondOperand = Number(secondOperand)
    switch(operator){
        case '+':
            result = firstOperand + secondOperand
            break;
        case '-':
            result = firstOperand - secondOperand
            break;
        case '*':
            result = firstOperand * secondOperand
            break;
        case '/':
            result = firstOperand / secondOperand
            break;
    }
    cleanEquation(result)
}

function cleanEquation(lastResult){
    firstOperand = lastResult
    operator = null
    secondOperand = ''
    isMidEquation = true
}

CLEARDISPLAY.addEventListener('click', ()=>{
    clearDisplays()
})


numBtns.forEach((btn)=>{
    btn.addEventListener('click', ()=>{
            operator == null ? firstOperand += btn.textContent : secondOperand += btn.textContent;
        updateDisplay()
    })
})

operatorArray.forEach((btn)=>{
    btn.addEventListener('click', ()=>{
        operator == null ? operator = btn.textContent : console.log('error')
        updateEquation()
        console.log('operator click') 
    })
})

equalBtn.addEventListener('click', ()=>{
   calculateEquation(firstOperand, operator, secondOperand)
   updateDisplay()
   updateEquation()
})