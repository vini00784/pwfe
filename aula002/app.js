'use strict'

function aplicarCor() {
    const cor = document.getElementById('cor').value
    document.body.style.backgroundColor = cor
}

document.getElementById('aplicar').addEventListener('click', aplicarCor)