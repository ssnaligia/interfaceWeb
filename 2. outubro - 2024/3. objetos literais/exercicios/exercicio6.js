/* Considere que os itens listados na tabela do Exercício 3 representam o conteúdo de um carrinho de compras. Escreva um programa que mostre:
    a) O total a pagar sem os descontos;
    b) O total a pagar considerando os descontos;
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

let total = 0;
for (const item of itens) {
    total += item.preco;
}

console.log('Total a pagar sem os descontos: R$', total.toFixed(2));

let totalComDesc = 0;
for (const item of itens) {
    let desconto = item.descAVista / 100;
    let valorComDesc = item.preco - (item.preco * desconto);
    totalComDesc += valorComDesc;
}

console.log('Total a pagar com os descontos: R$', totalComDesc.toFixed(2));
