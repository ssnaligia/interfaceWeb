/* Defina uma função e_vogal(c), que retorne true se o caracter c for uma vogal.*/

function e_vogal(c) {
    let array = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];
    return array.includes(c);
}

console.log(e_vogal('b'));
console.log(e_vogal('e'));
console.log(e_vogal('A'));
