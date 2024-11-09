function mostrarId(e) {
    const botao = e.target; 
    console.log(botao.id); 
}

const botoes = document.querySelectorAll('button');

for (let botao of botoes) {
    botao.addEventListener('click', mostrarId);
}
