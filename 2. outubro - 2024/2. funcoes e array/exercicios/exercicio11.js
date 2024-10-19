/* Repita o Exercício 10, fazendo com que todas as abreviações contidas no vetor abrev estejam em letras maiúsculas. 
O conteúdo do vetor frutas não deve ser alterado. Você deve usar somente o método Array.map(). 
Não use for nem while. */


function arrayAbrev() {
    const frutas = ['abacaxi', 'banana', 'maçã', 'laranja', 'abacate', 'limão', 'tamarindo'];

    const abrev = frutas.map(fruta => fruta.substring(0, 3));
    const abreviacoesMaiusculas = abrev.map(abrev => abrev.toUpperCase());

    return abreviacoesMaiusculas; 
}

console.log(arrayAbrev());
