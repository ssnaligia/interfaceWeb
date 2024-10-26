/* Considere o array definido no Exercício 3. Escreva um programa que mostre — no console — o nome e o preço do terceiro produto que consta na lista. */

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


console.log(itens[2].nome,itens[2].preco);