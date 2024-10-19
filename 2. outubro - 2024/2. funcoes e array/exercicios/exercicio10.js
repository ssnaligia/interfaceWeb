/* Escreva um programa que crie um array chamado abrev (abreviações). 
Os elementos de o array abrev devem corresponder às 3 primeiras letras de 
cada palavra contida no array frutas. 
Você deve usar o método Array.map().

let frutas = ['abacaxi', 'banana', 'maçã', 'laranja', 'abacate', 'limão', 'tamarindo'];
*/

function arrayAbrev() {
    const frutas = ['abacaxi', 'banana', 'maçã', 'laranja', 'abacate', 'limão', 'tamarindo'];

    const abrev = frutas.map(fruta => fruta.substring(0, 3));

    return abrev; 
}

console.log(arrayAbrev());


