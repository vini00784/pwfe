'use strict'

function mostrarResultado() {
    const nome = document.getElementById('nome').value
    const altura = parseFloat(document.getElementById('altura').value)
    const peso = parseFloat(document.getElementById('peso').value)
    const imcForm = document.getElementById('imc-form')
    const resultado = document.getElementById('result')

    if (imcForm.reportValidity()) {
        const valorImc = (peso / altura ** 2).toFixed(2)
        let classificacao
        if(valorImc < 18.5) {
            classificacao = 'abaixo do peso.'
        } else if(valorImc < 25) {
            classificacao = 'com o peso ideal. Parabéns!'
        } else if(valorImc < 30) {
            classificacao = 'levemente acima do peso.'
        } else if(valorImc < 35) {
            classificacao = 'com obesidade grau I.'
        } else if(valorImc < 40) {
            classificacao = 'com obesidade grau II.'
        } else {
            classificacao = 'com obesidade grau III. Tome cuidado!'
        }

        resultado.textContent = `${nome}, seu IMC é: ${valorImc}, e você está ${classificacao}`
    }
}

document.getElementById('calcular')
        .addEventListener('click', mostrarResultado)