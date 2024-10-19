/* Defina uma função que retorne o tempo decorrido entre dois instantes (dentro do mesmo dia). 
Sua função deve receber duas strings t1 e t2, no formato hh:mm:ss. 
Exemplo: para os argumentos '13:30:10' e '13:31:05', sua função deverá retornar 55 segundos. */

function calcularTempoDecorrido(t1, t2) {
    const [hora1, minutos1, segundos1] = t1.split(':').map(Number);
    const [hora2, minutos2, segundos2] = t2.split(':').map(Number);
    
    const totalSegundosT1 = hora1 * 3600 + minutos1 * 60 + segundos1;
    const totalSegundosT2 = hora2 * 3600 + minutos2 * 60 + segundos2;

    const segundosDecorridos = totalSegundosT2 - totalSegundosT1;
    return segundosDecorridos;
}

const t1 = '13:30:10';
const t2 = '13:31:05';
console.log(calcularTempoDecorrido(t1,t2));