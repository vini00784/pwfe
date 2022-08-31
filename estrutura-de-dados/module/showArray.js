'use strict'

const showArray = (array, element, title='Array') => {
    // Selecionando um elemento no DOM (no caso, o main)
    const container = document.querySelector(element)

    // Cria um novo elemento, no caso uma DIV
    const div = document.createElement('div')

    // Atribue classe à DIV criada
    div.classList.add('numbers-container')

    // Preenchendo a DIV criada com os elementos do Array
    div.innerHTML = `
        <h2>${title}</h2>
        <div class="numbers-item">
            ${array.join('</div><div class="numbers-item">')}
        </div>
    `

    // Insere o novo elemento DIV no DOM
    container.appendChild(div)
}

export {
    showArray
}