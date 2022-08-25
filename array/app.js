'use strict'

const numbers = [2, 5, 7, 45, 23, 80, 120, 255]
const names = ['Yuri Aberto', 'Roger Calvo Jegues']
const fruits = ['Uva', 'Morango', 'Banana', 'Melancia']

// Problema: Exibir os elementos do array no console.log

// Solução imperativa (While)

// const ultimoIndice = numeros.length - 1
// let contador = 0
// while(contador <= ultimoIndice) {
//     console.log(numeros[contador])
//     contador++
// }

// Solução imperativa (For)
// const ultimoIndice = numeros.length
// for (let contador = 0; contador < ultimoIndice; contador++) {
//     console.log(numeros[contador])
// }

const createContainer = (title, array) => {
    const main = document.querySelector('main')
    const div = document.createElement('div')
    div.classList.add('array-container')
    div.innerHTML = `
        <h2>${title}</h2>
        <ul>
            <li class = "items">
                ${array.join("</li><li class = 'items'>")}
            </li>
        </ul>
    `
    main.appendChild(div)
}

createContainer('Números:', numbers)
createContainer('Nomes:', names)
createContainer('Produtos:', fruits)































// // Solução Declarativa (forEach) 
// const showElements = (number) => console.log(number)
// numeros.forEach(showElements)

// // Problema: Exibir os elementos do array no layout
// const createItems = (numbers) => {
//     const ul = document.querySelector('ul')
//     const div = document.createElement('div')
//     div.classList.add('items')
//     div.textContent = numbers
//     ul.appendChild(div)
// }

// numeros.forEach(createItems)