'use strict'

const searchDog = async (hound) => {
    const url = `https://dog.ceo/api/breed/${hound}/images`

    const response = await fetch(url)

    const dogsList = await response.json()

    return dogsList.message
}

export {
    searchDog
}