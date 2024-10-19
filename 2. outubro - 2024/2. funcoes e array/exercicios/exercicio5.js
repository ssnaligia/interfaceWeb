/* Defina uma função potencia(a, b) que retorne o valor de ab. 
Assuma que o expoente b é não-negativo. Implemente esta função manualmente. Não use a classe Math. */

function potencia(a, b) {
    let resultado = 1;
    if (b > 0) {
        for (let i = 0; i < b; i++) {
            resultado *= a; 
        }
    } else if (b === 0) {
        return 1;
    }
    return resultado;
}

console.log(potencia(2, 5));