// Isso faz com que o navegador seja mais "rígido" em relação à declaração do escopo da variável:
'use strict'

// O código sem o uso da função não funcionaria corretamente
// Para que tudo funcione corretamente é necessário o uso de uma função
function juntarNome (){
    const nome = document.getElementById('nome').value
    const sobrenome = document.getElementById('sobrenome').value
    const resultado = document.getElementById('resultado')
    
    // Os dois códigos (linhas 12 e 13) são a mesma coisa, mas a segunda opção é melhor.
    // As aspas indicam que o que será chamado é uma variável.

    // const nomeCompleto = nome + ' ' + sobrenome
    const nomeCompleto = `Seu nome completo é: ${nome} ${sobrenome}`
    resultado.textContent = nomeCompleto
}

document.getElementById('juntar').addEventListener('click', juntarNome)