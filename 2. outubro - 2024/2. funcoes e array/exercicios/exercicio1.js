/* Defina uma função multiplo(a, b), que determine se b é múltiplo de a — ambos são números inteiros. 
A função deve retornar true, se b for múltiplo de a, ou false em caso contrário.*/

function ultiplos(a, b) {
    return b % a === 0;
}

console.log(multiplos(5, 10));
console.log(multiplos(3, 10));

