'use strict'

import { showArray } from "./module/showArray.js"

const numbers = [23, 5, 9, 10, 100, 45]

// MAP - Percorre (mapeia) o array e retorna um array do mesmo tamanho, mas modificado da forma como pedimos (pode não estar modificado também)
// Sintaxe - array.map(callback)
// Parâmetros do callback:
    // 1 - Elemento
    // 2 - Índice
    // 3 - Array

// Neste caso, usamos o MAP para descontar 2 reais de cada valor do Array
const discount2 = (number) => number - 2
const numbersDiscount = numbers.map(discount2)

// ********************************************************************** //

// FILTER - Percorre um array aplicando um callback e retorna um outro do mesmo tamanho ou não
// Sintaxe - array.filter(callback)
// Parâmetros do callback:
    // 1 - Elemento
    // 2 - Índice
    // 3 - Array
// Nesse caso, o retorno deve ser um boolean, já que ele vai literalmente filtrar. E o que não se adequar às especificações será false, portanto não entrará no array novo

// Filtrar os elementos menores que 20
const lessThan20 = (value) => value < 20
const numbersLessThan20 = numbers.filter(lessThan20)

// ********************************************************************** //

// REDUCE - Percorre o array aplicando um callback e *retorna um único valor*
// Sintaxe - array.reduce(callback, valorInicial)
// Parâmetros do callback:
    // 1 - Acumulador
    // 2 - Elemento
    // 3 - Índice
    // 4 - Array
// O valor inicial pode ser qualquer tipo de variável

// Somar todos os valores
const addNumbers = (a, b) => a + b
const amount = numbers.reduce(addNumbers, 0)


// Exercícios
// 1 - Aumentar 100 em cada elemento
// 2 - Somente os números pares
// 3 - Total dos valores com desconto de 4 (desconta tudo e depois exibe o resultado da soma dos valores já com o desconto)
// 4 - Array com todos os elementos ímpares somando 21

// Exercício 1:
const add100 = (number) => number + 100
const numbersPlus100 = numbers.map(add100)

// Exercício 2:
const findEvenNumbers = (number) => number % 2 == 0
const evenNumbers = numbers.filter(findEvenNumbers)

// Exercício 3:
const discount4 = (number) => number - 4
const totalDiscount4 = numbers.map(discount4)
const total = (a, b) => a + b
const totalValues = totalDiscount4.reduce(total, 0)

// Exercício 4:
const findOddNumbers = (number) => number % 2 != 0
const oddNumbers = numbers.filter(findOddNumbers)
const totalOddNumbers = (a, b) => a + b
const plus21 = oddNumbers.map(totalOddNumbers, 0)


showArray(numbers, 'main', 'Todos os números: ')
showArray(numbersDiscount, 'main', 'Com desconto: ')
showArray(numbersLessThan20, 'main', 'Menores que 20: ')
showArray([amount], 'main', 'Total: ')
showArray(numbersPlus100, 'main', 'Números mais 100:')
showArray(evenNumbers, 'main', 'Números pares: ')
showArray([totalValues], 'main', 'Total dos valores acrescidos de 4: ')
showArray(plus21, 'main', 'Números ímpares mais 21:')