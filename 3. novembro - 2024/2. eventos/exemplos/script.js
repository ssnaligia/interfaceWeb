function sayHello(e) {
    console.log('Oi! Eu sou o ' + e.target.textContent + '!');
}

const botao = document.querySelector('#botaoOK');
//botao.onclick = sayHello;

botao.addEventListener('click', sayHello);
