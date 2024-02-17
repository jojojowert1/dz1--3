// PHONE CHECKER

const phoneInput =  document.querySelector('#phone_input')
const phoneButton =  document.querySelector('#phone_button')
const phoneResult =  document.querySelector('#phone_result')

const regExp = /\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}/
phoneButton.addEventListener('click',() =>{
    if (regExp.test(phoneInput.value)){
        phoneResult.innerHTML = 'OK'
        phoneResult.style.color = "green"
    }else {
        phoneResult.innerHTML ="NOT OK"
        phoneResult.style.color = "red"
    }
})

let count = 0

const increment = () => {
    count++
    console.log(count)
}

// TAP SLIDER

const tabContentItems = document.querySelectorAll('.tab_content_block')
const tabItems = document.querySelectorAll('.tab_content_item')
const tabItemsParent = document.querySelectorAll('.tab_content_items')

let intervalId
let slideIndex = 0
const hideTabContend = ()=>{
    tabContentItems.forEach((item)=> {
        item.style.display = "none"
    })
    tabItems.forEach((item)=>{
        item.classList.remove('.tab_contend_item_active')
    })
}

const showTabContend = (index= 0)=>{
    tabContentItems[index].style.display = 'block'
    tabItems[index].add('tab_contend_item_active')
}

const startSlider = () => {
  intervalId = setInterval(()=>{
      slideIndex = (slideIndex +1) % tabItems.length
  })
}

const stopSlider = () => {
    clearInterval(intervalId)
}

tabItems.forEach((tab, index) => {
    tab.addEventListener('click', ()=>{
        slideIndex = index
        showTabContend(slideIndex)
        stopSlider()
    })
})




hideTabContend()
showTabContend()
startSlider()


tabItemsParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')){
        tabItems.forEach((tabItem, tabIndex) => {
            if (event.target === tabItem) {
                hideTabContent()
                showTabContent(tabIndex)
            }
        })
    }
}



const slider = (i = 0) => {
    setInterval(() => {
        i++
        if (i > tabContentItems.length - 1) {
            i = 0
        }
        hideTabContent()
        showTabContent(i)
    }, 3000)
}

slider()


