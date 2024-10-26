let cliente = {
    nome: 'João',
    email: 'joaoadm@gmail.com.br',
    isAdmin: true,
    dizerOi: function() {
        console.log('Oi', this.nome,'!');
    }
};

/*
--para visualizar
cliente.nome

--para alterar
cliente.nome = 'Ana Ligia'*/

let produtos = [
    {
        nome: 'Sabão',
        preco: 2.40
    },
    {
        nome: 'Arroz',
        preco: 24.90
    },
    {
        nome: 'Café',
        preco: 16.50
    },
];

// -- Lista de nomes dos produtos --

//Alternativa 1
let nomes = [];
for(let prod of produtos) {
    nomes.push(prod.nome);
}

//Alternativa 2
nomes = produtos.map(p => p.nome)

// -- Produtos que custam mais do que R$10,00 --

//Alternativa 1
let caros = [];
for(let prod of produtos) {
    if(prod.preco > 10) {
        caros.push(prod);
    }
}

//Alternativa 2
caros = produtos.filter(p => p.preco > 10);
