/* Defina uma função que receba a hora atual por meio de três argumentos inteiros 
(hora, minuto e segundos) e então retorne o número de segundos decorridos desde a meia-noite. */

function converterHoras(hora, minuto, segundos) {
    let segundosD = (hora * 3600) + (minuto * 60) + segundos;
    return segundosD;
}

console.log(converterHoras(5, 15, 59));