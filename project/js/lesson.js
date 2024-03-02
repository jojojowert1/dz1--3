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

const showTabContent = (index = 0) => {
    tabContentItems.forEach(item => {
        item.style.display = 'none'
    })

    tabItems.forEach(item => {
        item.classList.remove('tab_contend_item_active')
    })

    tabContentItems[index].style.display = 'block'
    tabItems[index].classList.add('tab_contend_item_active')
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
        showTabContent(slideIndex)
        stopSlider()
    })
})




hideTabContend()
showTabContent()
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



// const slider = (i = 0) => {
//     setInterval(() => {
//         i++
//         if (i > tabContentItems.length - 1) {
//             i = 0
//         }
//         hideTabContent()
//         showTabContent(i)
//     }, 3000)
// }
//
// slider()


const somInput = document.querySelector('#som')
const usdInput = document.querySelector('#usd')
const eurInput = document.querySelector('#eur')

const converter = (sourceElement, targetElement, targetElement2, current) => {
    sourceElement.oninput = async () => {
        try {
            const response = await fetch('../data/converter.json')
            const data = await response.json()
            console.log(data)
            const inputValue = parseFloat(sourceElement.value)
        if (!isNaN(inputValue)) {
            switch (current) {
                case 'som':
                    targetElement.value = (sourceElement.value / data.usd).toFixed(2)
                    targetElement2.value = (sourceElement.value / data.eur).toFixed(2)
                    break
                case 'usd':
                    targetElement.value = (sourceElement.value * data.eur).toFixed(2)
                    targetElement2.value = (sourceElement.value * (data.usd / data.eur)).toFixed(2)
                    break
                case 'eur':
                    targetElement.value = (sourceElement.value * data.usd).toFixed(2)
                    targetElement2.value = (sourceElement.value * data.eur / data.usd).toFixed(2)
                    break
                default:
                    break
            }
            sourceElement.value === '' && (targetElement.value = "")
            sourceElement.value === '' && (targetElement2.value = "")
        }
    }catch (error) {
            alert('error', error)
        }
    }
}
converter(somInput, usdInput, eurInput, "som")
converter(usdInput, somInput, eurInput, "usd")
converter(eurInput, somInput, usdInput, "eur")

const card = document.querySelector('.card')
btnNext = document.querySelector('#btn-next')
btnPrev = document.querySelector('#btn-prev')

const BASE_URL = `https://jsonplaceholder.typicode.com/todos`
let limit = 1
let page = 1

const renderData = (data) => {
    card.innerHTML = ''
    data.forEach(item => {
        const newElement = document.createElement('div')
        newElement.innerHTML = `
      <h3>${item.id}</h3>
      <p>${item.title}</p>
      <p>${item.completed}</p>
    `
        card.appendChild(newElement)
    })
}

const getData = async () => {
    try {
        const response = await fetch(`${BASE_URL}?_limit=${limit}&_page=${page}`)
            .then(response => response.json())
            .then(data => renderData(data))
    }catch(error) {
        console.log('error', error)
    }
}

getData()

btnPrev.onclick = () => {
    page--
    if (page < 1) {
        page = 200
    }
    getData()
}

btnNext.onclick = () => {
    page++
    if (page > 200) {
        page = 1
    }
    getData()
}

// Weather

const cityInput = document.querySelector('.cityName')
const city= document.querySelector('.city')
const temp= document.querySelector('.temp')
const base_url="http://api.openweathermap.org"
const api_key='e417df62e04d3b1b111abeab19cea714'
const citySearch=() =>{
    cityInput.oninput= async (event) =>{
        try {
            const response = await fetch(`${base_url}/data/2.5/weather?q=${event.target.value}&appid=${api_key}`)
            const data = await response.json()
            city.innerHTML=data.name || 'Город не найден...'
            temp.innerHTML=data.main?.temp ? Math.round(data.main?.temp - 273) + '&degC': '...'
        }catch (error) {

        }
    }

}
citySearch()