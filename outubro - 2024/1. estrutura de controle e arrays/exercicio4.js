let frutas = ['abacaxi', 'banana', 'maçã', 'laranja', 'abacate', 'limão', 'tamarindo'];

console.log('Usando for of: ');
for(let fruta of frutas) {
    console.log(fruta);
}

console.log('\nUsando for tradicional: ');
for(let i=0; i<frutas.length; i++) {
    console.log(frutas[i]);
}