const xs = [5, 3, 6, 1, 2, 4];

var menor = xs[0];

for(let i=0; i<6; i++) {
    if(xs[i] < menor) {
        menor = xs[i];
    }
}

console.log('O menor elemento do array é: ' + menor);