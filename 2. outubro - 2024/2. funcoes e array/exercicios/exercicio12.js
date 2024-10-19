/* Escreva um programa que transforme um array de palavras em um array que contenha o número de caracteres de cada palavra. 
Por exemplo: ['ovo', 'cebola', 'sabão'] → [3, 6, 5]
Você deve usar o método Array.map(). Comece com o código a seguir.

let palavras = ['ovo', 'cebola', 'sabão']; */

function arrayCaracterQntd(array) {
    const quantidade = array.map(palavra => palavra.length);

    return quantidade;
}

let palavras = ['ovo', 'cebola', 'sabão']; 
console.log(arrayCaracterQntd(palavras));
