console.log('%c HI', 'color: firebrick')


const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = "https://dog.ceo/api/breeds/list/all"


function fetchImg(imgUrl) {
        fetch(imgUrl).then(resp => resp.json())
        .then(json => addImg(json));
}

function fetchBreed(breedUrl) {
    fetch(breedUrl).then(resp => resp.json())
        .then(json => addBreed(json));
}

function addImg(json) {
    const imgContainer = document.getElementById("dog-image-container")
    json.message.forEach(img => {
        const imgTag = document.createElement('img')
        imgTag.src = img
        imgContainer.appendChild(imgTag)
    })
    
}


function addBreed(json) {
    const ul = document.getElementById('dog-breeds')
    for (let [breed, sub] of Object.entries(json.message)) {
        const li = document.createElement('li')
        li.innerText = breed
        ul.appendChild(li)
    }
    listenForBreed()
    listenForDropdown()
}

function listenForBreed() {
    const breedList = document.querySelectorAll('li')
    breedList.forEach(breed => {
        breed.addEventListener('click', () => {
            breed.style.color = "red"
        })        
    })
    
}

function listenForDropdown() {
    const breedList = document.querySelectorAll('li')
    const dropDown = document.getElementById('breed-dropdown')
    dropDown.addEventListener('change', (event) => {
        breedList.forEach(breed => {
            if (!breed.innerText.startsWith(event.target.value)) {
                breed.style.display = 'none' 
            } else {
                breed.style.display = 'list-item'
            }

        })
    })        
}

document.addEventListener('DOMContentLoaded', function() {
    fetchImg(imgUrl)
    fetchBreed(breedUrl)
  })