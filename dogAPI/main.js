'use strict'

import { searchDog } from "./module/dogapi.js"

const createImage = (imageAddress) => {
    const image = document.createElement('img')
    image.src = imageAddress
    return image
}

const search = async () => {
    const hound = document.getElementById('hound').value
    const images = await searchDog(hound)
    const gallery = document.getElementById('gallery')
    const imageTag = images.map(createImage)
    gallery.replaceChildren(...imageTag)



    // const div = document.createElement('div')

    // div.classList.add('dogs-container')

    // div.innerHTML = `
    //     <h1>${hound}</h1>
    //     <div class="dog-image">
    //         <img src="${hound}"></img>
    //     </div>
    // `

    // gallery.appendChild(div)

    // console.log(await searchDog(hound))
}

const handleKeyPress = (event) => {
    if(event.key == 'Enter') {
        search()
    }
}

document.getElementById('hound')
        .addEventListener('keypress', handleKeyPress)