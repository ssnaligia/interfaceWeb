let opcao = 'audi';

function carregar() {
    let img = document.getElementById('carroImagem');
    img.src = opcao + '.png';     
    div.innerHTML = '';
    div.appendChild(img);
}

function selecionar() {
    let select = document.getElementById('marca');
    select.addEventListener('change', (e) => { 
        opcao = e.target.value; 
        carregar(); 
    }); //quando o valor do select mudar, ele vai adicionar a referencia do elemento por meio do "e.target" e adicionar o valor na variavel opcao, chamando a funcao carregar 
}

selecionar();
carregar(); 
