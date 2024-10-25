/* Uma empresa comprou um lote de botas de diversos tamanhos para seus funcionários. 
Mas o fornecedor não entregou os pares organizados, como a empresa esperava. 
Em vez disso, entregou um monte de sapatos misturados. Seu tio, que é dono da empresa, pediu sua ajuda. 
Você deve desenvolver um programa que analise os dados da entrega e calcule quantos pares de sapato de cada tamanho que podem ser formados. 
É possível que sobrem sapatos sem par.
*/

const numeros = [38, 42, 39, 40, 38, 40, 37, 44, 37, 42, 41, 44, 37, 42, 42];
const pes = "EEEDDDEDDDEEEDE";

const base = 37;
let esquerdos = new Array(8);
let direitos = new Array(8);
esquerdos.fill(0);
direitos.fill(0);

/* processando entradas */
for (let i=0; i < numeros.length; i++) {
    const n = numeros[i];
    const pe = pes[i];

    const pos = n - base;
    if (pe == 'E') {
        esquerdos[pos]++;
    } else {
        direitos[pos]++;
    }
}

/* gerando sai­da */
for (let i=0; i < direitos.length; i++) {
    const min = direitos[i] < esquerdos[i] ? direitos[i] : esquerdos[i];
    if (min > 0) {
        const num = base + i;
        console.log(num, min);
    }
}