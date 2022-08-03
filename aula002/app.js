'use strict'

function aplicarCor() {
    const nomeCor = document.getElementById('cor').value.toUpperCase()
    
    if(nomeCor == 'VERMELHO') {
        document.documentElement.style.setProperty('--bg-color', `#FF0000`)
    } else if(nomeCor == 'AZUL') {
        document.documentElement.style.setProperty('--bg-color', `#0000FF`)
    } else if(nomeCor == 'VERDE') {
        document.documentElement.style.setProperty('--bg-color', `#00FF00`)
    } else if(nomeCor == 'AMARELO') {
        document.documentElement.style.setProperty('--bg-color', `#FFFF00`)
    } else {
        alert('Opção Inválida!')
    }

    // document.documentElement.style.setProperty('--bg-color', $,{nomeCor})
}

document.getElementById('aplicar').addEventListener('click', aplicarCor)