/* Foram anotadas as idades e alturas de 30 alunos em uma sala de aula. 
Faça um programa que determine quantos alunos com mais de 13 anos possuem altura 
inferior à média de alturas da sala. Você pode representar as idades em um vetor e as alturas em outro. 
Os dois vetores são paralelos — isto é, o elemento que estiver na posição i se refere à mesma pessoa.

Você pode fixar os valores no código-fonte. Não é preciso fazer leitura de dados do teclado.
 */

function informacoesAlunos() {
    const idades = [12, 14, 15, 13, 12, 16, 14, 13, 17, 12, 15, 14, 13, 12, 16, 15, 14, 13, 18, 19, 12, 15, 16, 17, 18, 20, 21, 14, 13, 19];
    const alturas = [150, 160, 165, 155, 145, 170, 158, 162, 168, 140, 155, 164, 160, 150, 175, 162, 161, 159, 170, 180, 145, 150, 160, 167, 174, 168, 155, 160, 163, 170, 175];

    let somaAlturas = 0;
    for (let i = 0; i < alturas.length; i++) {
        somaAlturas += alturas[i];
    }
    const mediaAlturas = somaAlturas / alturas.length;

    let contador = 0;
    for (let i = 0; i < idades.length; i++) {
        if (idades[i] > 13 && alturas[i] < mediaAlturas) {
            contador++;
        }
    }

    return contador; 
}

const resultado = informacoesAlunos();
console.log(`Número de alunos com mais de 13 anos e altura inferior à média: ${resultado}`);
