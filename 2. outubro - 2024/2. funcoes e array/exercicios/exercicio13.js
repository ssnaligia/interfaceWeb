/* Repita o Exercício 12. Desta vez, você deve considerar somente as palavras que contenham a letra 'a'. As demais devem ser ignoradas. */

function arrayCaracterQntdComA(array) {
    const arrayFiltro = array.filter(palavra => palavra.includes('a'));
    quantidade = arrayFiltro.map(palavra => palavra.length);
    return quantidade;
}

let palavras = ['ovo', 'cebola', 'sabão', 'maçã', 'laranja']; 
console.log(arrayCaracterQntdComA(palavras)); 
