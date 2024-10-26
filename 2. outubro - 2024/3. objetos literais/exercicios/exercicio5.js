/* Ainda considerando o array definido no Exercício 3, escreva um programa que mostre o nome e o preço dos produtos que:
    a. Custam menos de R$ 10,00;
    b. Não têm desconto no preço à vista.
 */

let itens = [
    {
        id: 1,
        nome: 'Caneta BIC Cristal 0.7mm',
        preco: 6.60,
        descAVista: 10
    },
    {
        id: 2,
        nome: 'Caneta Esferográfica Trilux',
        preco: 5.50,
        descAVista: 0
    },
    {
        id: 3,
        nome: 'Lapiseira 0.5mm Pentel',
        preco: 27.90,
        descAVista: 15
    },
    {
        id: 4,
        nome: 'Grafite Fino 0.5mm HB 2 Faber-Castell',
        preco: 10.90,
        descAVista: 5
    },
    {
        id: 5,
        nome: 'Pincel quadro branco recarregável',
        preco: 9.80,
        descAVista: 0
    },
];
    

let prodCaros = itens.filter(i => i.preco < 10);
let semDesc = itens.filter(i => i.descAVista === 0);

console.log('Itens que custam menos de R$10,00\n');
console.log(prodCaros);

console.log('\n\nItens que não tem desconto à vista\n');
console.log(semDesc);