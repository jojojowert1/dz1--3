

const gmailInput = document.querySelector('#gmail_input')
const gmailButton = document.querySelector('#gmail_button')
const gmailResult = document.querySelector('#gmail_result')
const childBlock = document.querySelector('.child_block')
const parentBlock = document.querySelector('.parent_block')
const mainWidth = parentBlock.offsetWidth - childBlock.offsetWidth
const mainHeight = parentBlock.offsetHeight - childBlock.offsetHeight


const regExp = /^[a-z0-9]+@gmail\.com$/i
gmailButton.addEventListener('click', () => {
    if (regExp.test(gmailInput.value)){
        gmailResult.innerHTML = "OK"
        gmailResult.style.color = "green"
    } else {
        gmailResult.innerHTML = "NOT OK"
        gmailResult.style.color = "red"
    }
})



let i = 1

// setInterval(function () {
//     childBlock.style.left = `${[i]}px`
//     i++
//
// },1)
//
// setTimeout(() =>{
//     i = "stop"
// }, 1900)

// let f = 1
// setTimeout(() =>{
//     setInterval(() =>{
//
//         childBlock.style.marginTop = `${[f]}px`
//         f++
//     },5)
// },2361)
//
// setTimeout(() =>{
//     f = "stop"
// }, 4600)
//

let positionX = 0
let positionY = 0
let parentBlockWidth = 449
let speedBlock = 1
let direction = 1

const moveBlock = () =>{
   if (direction === 1){
       if (positionX < parentBlockWidth){
           childBlock.style.left = `${positionX}px`
           positionX++
       } else {
           direction = 2
           positionX = parentBlockWidth
       }
   }else if (direction === 2){
       if (positionY < parentBlockWidth){
           childBlock.style.top = `${positionY}px`
           positionY++
       } else {
           direction = 3
       }
   } else if(direction === 3){
       if (positionX > 0){
           childBlock.style.left = `${positionX}px`
           positionX--
       }else {
           direction = 4
           positionX = 0
       }
   } else if(direction === 4){
       if (positionY > 0){
           childBlock.style.top = `${positionY}px`
           positionY--
       }else {
           direction = 1
           positionY = 0
       }
   }
   setTimeout(moveBlock, speedBlock)
}
moveBlock()


document.querySelector('#start').addEventListener('click', startTimer)
document.querySelector('#stop').addEventListener('click', stopTimer)
const seconds = document.querySelector('#seconds')
document.querySelector('#reset').addEventListener('click', resetTimer)

let timerInterval
let timerRun = false
let timerValue = 0

function startTimer () {
    if (!timerRun){
        timerInterval = setInterval(()=>{
            timerValue++
            seconds.textContent = timerValue
        },1000)
        timerRun = true
    }
}
function stopTimer (){
    clearInterval(timerInterval)
    timerRun = false
}

function  resetTimer (){
    clearInterval(timerInterval)
    timerValue = 0
    seconds.textContent = timerValue
    timerRun = false
}






