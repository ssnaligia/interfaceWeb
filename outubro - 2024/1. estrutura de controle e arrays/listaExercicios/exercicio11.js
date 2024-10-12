const offset = 4;
const secret = 'LIPPSASVPH';
let char = [];
let letra = [];

for (let i = 0; i < secret.length; i++) {
    char[i] = secret[i].charCodeAt(0) - offset;

    if (char[i] < 65) {
        char[i] += 26; //ajuste para que vá de 'Z' a 'A'
    }

    letra[i] = String.fromCharCode(char[i]);
}

let message = letra.join('');  

console.log(message); 
