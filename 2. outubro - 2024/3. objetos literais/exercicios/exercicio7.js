/* Foram anotadas as idades e alturas de 30 alunos em uma sala de aula. 
Faça um programa que determine quantos alunos com mais de 13 anos possuem altura inferior à média de alturas da sala.
Você deve representar as idades em um vetor (array) de objetos. 
Cada objeto representará um aluno, que tem idade e altura. Veja um exemplo:

const alunos = [
    {idade: 13, altura: 1.40},
    {idade: 14, altura: 1.55},
];

Você pode fixar os valores no código-fonte. Não é preciso fazer leitura de dados do teclado.*/

let alunos = [
    {idade: 13, altura: 1.40}, {idade: 14, altura: 1.51},
    {idade: 12, altura: 1.32}, {idade: 15, altura: 1.60},
    {idade: 16, altura: 1.70}, {idade: 13, altura: 1.45},
    {idade: 14, altura: 1.52}, {idade: 15, altura: 1.62},
    {idade: 14, altura: 1.38}, {idade: 15, altura: 1.48},
    {idade: 14, altura: 1.57}, {idade: 15, altura: 1.65},
    {idade: 16, altura: 1.72}, {idade: 12, altura: 1.30},
    {idade: 15, altura: 1.80}, {idade: 14, altura: 1.54},
    {idade: 15, altura: 1.53}, {idade: 12, altura: 1.42},
    {idade: 16, altura: 1.75}, {idade: 15, altura: 1.68},
    {idade: 14, altura: 1.61}, {idade: 13, altura: 1.47},
    {idade: 12, altura: 1.35}, {idade: 16, altura: 1.78},
    {idade: 15, altura: 1.73}, {idade: 14, altura: 1.66},
    {idade: 12, altura: 1.39}, {idade: 13, altura: 1.44},
    {idade: 15, altura: 1.63}, {idade: 14, altura: 1.59}, 
    {idade: 16, altura: 1.74}, {idade: 12, altura: 1.31},
];

let somaAlturas = 0;
for (let i = 0; i < alunos.length; i++) {
    somaAlturas += alunos[i].altura; 
}

let mediaAlturas = somaAlturas / alunos.length; 

let alunosBaixos = [];

for (let aluno of alunos) {
    if (aluno.idade > 13 && aluno.altura < mediaAlturas) {
        alunosBaixos.push(aluno);
    }
}

console.log('Média de altura: ',mediaAlturas.toFixed(3));
console.log('\n\nAlunos +13 com altura inferior a média: \n');
console.log(alunosBaixos);

