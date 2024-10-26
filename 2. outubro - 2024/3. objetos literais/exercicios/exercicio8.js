/* Uma empresa comprou um lote de botas de diversos tamanhos para seus funcionários. 
Mas o fornecedor não entregou os pares organizados, como a empresa esperava. 
Em vez disso, entregou um monte de sapatos misturados. Seu tio, que é dono da empresa, pediu sua ajuda. 
Você deve desenvolver um programa que analise os dados da entrega e calcule quantos pares de sapato de cada tamanho que podem ser formados. 
É possível que sobrem sapatos sem par.
Seu programa receberá como entrada uma sequência de valores no seguinte formato:
*/

const sapatos = [
    {'tamanho': 38, 'pe': 'E'}, {'tamanho': 42, 'pe': 'E'},
    {'tamanho': 39, 'pe': 'E'}, {'tamanho': 40, 'pe': 'D'},
    {'tamanho': 38, 'pe': 'D'}, {'tamanho': 40, 'pe': 'D'},
    {'tamanho': 37, 'pe': 'E'}, {'tamanho': 44, 'pe': 'D'},
    {'tamanho': 37, 'pe': 'D'}, {'tamanho': 42, 'pe': 'D'},
    {'tamanho': 41, 'pe': 'E'}, {'tamanho': 44, 'pe': 'E'},
    {'tamanho': 37, 'pe': 'E'}, {'tamanho': 42, 'pe': 'D'}
];

const base = 37;
let esquerdos = new Array(8);
let direitos = new Array(8);
esquerdos.fill(0);
direitos.fill(0);

for (let i=0; i < sapatos.length; i++) {
    const n = sapatos[i].tamanho;
    const pe = sapatos[i].pe;

    const pos = n - base;
    if (pe == 'E') {
        esquerdos[pos]++;
    } else {
        direitos[pos]++;
    }
}

for (let i=0; i < direitos.length; i++) {
    const min = direitos[i] < esquerdos[i] ? direitos[i] : esquerdos[i];
    if (min > 0) {
        const num = base + i;
        console.log(`Tamanho ${num}: ${min} par`);
    }
}