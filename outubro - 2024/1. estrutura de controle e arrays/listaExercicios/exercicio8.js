let frutas = ['abacaxi', 'banana', 'maçã', 'laranja', 'abacate', 'limão', 'tamarindo'];

const abrev = [];

for(let fruta of frutas) {
    abrev.push(fruta.substring(0, 3));
}

for(let abrevs of abrev) {
    console.log('\n' + abrevs);
}
