const button = document.querySelector("button")
const PersonGet = document.querySelector(".person_cards")

button.onclick = ()=>{

    const getCards = async ()=>{
        try{
            const data =await  fetch('../data/card.json').then(response => response.json())

            console.log(data)
            data.forEach(persons =>{
                const person = document.createElement('div')
                person.innerHTML = `
            <img class="img" src="${persons.person_photo}" alt="">
            <p>name: ${persons.name}</p>
            <span>age: ${persons.age}</span>
            `
                PersonGet.append(person)
            })
        } catch (error){
            alert('error', error)
        }
    }
    getCards()
}
