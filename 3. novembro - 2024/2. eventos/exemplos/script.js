function sayHello(e) {
    const btn = e.target; //referencia o elemento
    console.log('Oi! Eu sou o ' + btn.textContent + '!');
}

const botao = document.querySelector('#botaoOK');
//botao.onclick = sayHello;

botao.addEventListener('click', sayHello);
