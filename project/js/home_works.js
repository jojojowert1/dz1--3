

const gmailInput = document.querySelector('#gmail_input')
const gmailButton = document.querySelector('#gmail_button')
const gmailResult = document.querySelector('#gmail_result')
const childBlock = document.querySelector('.child_block')
const parentBlock = document.querySelector('.parent_block')


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

setInterval(function () {
    childBlock.style.left = `${[i]}px`
    i++

},5)

setTimeout(() =>{
    i = "stop"
}, 2361)





