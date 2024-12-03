let carrinho = [];

function calcularTotal() {
    let total = 0;
    let totalItens = 0;

    carrinho.forEach(item => {
        total += item.preco * item.quantidade;
        totalItens += item.quantidade;
    });

    document.getElementById('valorTotal').textContent = `R$ ${total.toFixed(2)}`;
    document.getElementById('totalItens').textContent = totalItens;
}

function adicionarCarrinho(event) {
    const produto = event.target.parentElement; 
    const nome = produto.querySelector('.nome').textContent;
    const preco = parseFloat(produto.querySelector('.preco').textContent.replace('R$ ', '').replace(',', '.'));
    const quantidade = parseInt(produto.querySelector('.quantidadeInput').value) || 1;

    let produtoExistente = carrinho.find(item => item.nome === nome);

    if (produtoExistente) {
        produtoExistente.quantidade += quantidade;
    } else {
        carrinho.push({ nome, preco, quantidade });
    }

    renderizarCarrinho(); 
    calcularTotal(); 
}

function removerProduto(nome) {
    carrinho = carrinho.filter(item => item.nome !== nome);
    renderizarCarrinho();
    calcularTotal();
}

function atualizarQuantidade(nome, novaQuantidade) {
    let produto = carrinho.find(item => item.nome === nome);
    if (produto) {
        produto.quantidade = novaQuantidade;
        if (produto.quantidade <= 0) {
            removerProduto(nome);
        } else {
            renderizarCarrinho();
            calcularTotal();
        }
    }
}

document.querySelectorAll('.diminuir').forEach(button => {
    button.addEventListener('click', () => {
        const input = button.nextElementSibling;
        let currentValue = parseInt(input.value);
        if (currentValue > 1) {
            input.value = currentValue - 1;
        }
    });
});

document.querySelectorAll('.aumentar').forEach(button => {
    button.addEventListener('click', () => {
        const input = button.previousElementSibling;
        let currentValue = parseInt(input.value);
        input.value = currentValue + 1;
    });
});


document.addEventListener('click', (event) => {
    if (event.target.classList.contains('alterarQuantidade')) {
        const operacao = event.target.dataset.operacao; 
        const linha = event.target.closest('tr'); 
        const inputQuantidade = linha.querySelector('.quantidadeInput'); 
        const precoUnitario = parseFloat(linha.querySelector('td:nth-child(2)').textContent.replace('R$', '').trim()); 
        const subtotalCelula = linha.querySelector('td:nth-child(4)'); 

        let quantidade = parseInt(inputQuantidade.value);

        if (operacao === '+' && quantidade < 999) {
            quantidade++;
        } else if (operacao === '-' && quantidade > 1) {
            quantidade--;
        }

        inputQuantidade.value = quantidade;
        subtotalCelula.textContent = `R$ ${(quantidade * precoUnitario).toFixed(2)}`; 

        atualizarResumoCarrinho(); 
    }
});

document.querySelectorAll('.alterarQuantidade').forEach(button => {
    button.addEventListener('click', (event) => {
        const input = event.target.previousElementSibling; 
        let quantidade = parseInt(input.value);

        if (event.target.textContent === '+') {
            input.value = quantidade + 1;
        } else if (event.target.textContent === '-' && quantidade > 1) {
            input.value = quantidade - 1;
        }

        atualizarTotal();
    });
});

function atualizarTotal() {
    let total = 0;
    document.querySelectorAll('.quantidadeInput').forEach(input => {
        let quantidade = parseInt(input.value);
        let preco = parseFloat(input.closest('tr').querySelector('.preco').textContent.replace('R$ ', '').replace(',', '.'));
        total += quantidade * preco;
    });

    document.getElementById('valorTotal').textContent = `R$ ${total.toFixed(2)}`;
}

function renderizarCarrinho() {
    const tbody = document.querySelector('#carrinho tbody');
    tbody.innerHTML = ''; 

    carrinho.forEach(item => {
        let tr = document.createElement('tr');

        let nomeT = document.createElement('td');
        nomeT.textContent = item.nome;

        let precoT = document.createElement('td');
        precoT.textContent = `R$ ${item.preco.toFixed(2)}`;

        let quantidadeT = document.createElement('td');

        let btnDiminuir = document.createElement('button');
        btnDiminuir.textContent = '-';
        btnDiminuir.classList.add('alterarQuantidade');
        btnDiminuir.addEventListener('click', () => {
            if (item.quantidade > 1) {
                item.quantidade -= 1;
                renderizarCarrinho();
                calcularTotal();
            }
        });

        let inputQuantidade = document.createElement('input');
        inputQuantidade.type = 'number';
        inputQuantidade.value = item.quantidade;
        inputQuantidade.min = 1;
        inputQuantidade.classList.add('quantidadeInput');
        inputQuantidade.addEventListener('input', (e) => atualizarQuantidade(item.nome, parseInt(e.target.value)));

        let btnAumentar = document.createElement('button');
        btnAumentar.textContent = '+';
        btnAumentar.classList.add('alterarQuantidade');
        btnAumentar.addEventListener('click', () => {
            item.quantidade += 1;
            renderizarCarrinho();
            calcularTotal();
        });

        quantidadeT.appendChild(btnDiminuir);
        quantidadeT.appendChild(inputQuantidade);
        quantidadeT.appendChild(btnAumentar);


        let acoesT = document.createElement('td');
        let btnRemover = document.createElement('button');
        btnRemover.textContent = 'Remover';
        btnRemover.addEventListener('click', () => removerProduto(item.nome));

        acoesT.appendChild(btnRemover);

        tr.appendChild(nomeT);
        tr.appendChild(precoT);
        tr.appendChild(quantidadeT);
        tr.appendChild(acoesT);

        tbody.appendChild(tr);
    });
}

function esvaziarCarrinho() {
    carrinho = [];
    renderizarCarrinho();
    calcularTotal();
}

document.querySelectorAll('.adicionar').forEach(button => {
    button.addEventListener('click', adicionarCarrinho);
});

document.getElementById('esvaziar').addEventListener('click', esvaziarCarrinho);


