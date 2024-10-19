/* No trecho de código a seguir, observe o array xs. Você deve filtrá-lo deixando apenas os números ímpares. 
Use a função filter(), da classe Array.

const xs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; */

function arrayImpar(array) {
    return array.filter((x) => x % 2 !== 0);
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arrayImpar(array));
