async function buscar(cep) {
    const url = `http://viacep.com.br/ws/${cep}/json/`;

    let response = await fetch(url);
    if(response.ok) {
        let data = await response.json();
        console.log('Rua: ', data['logradouro']);
    }
}

function main() {
    let btn = document.querySelector('#carregar');
    btn.addEventListener('click', function() {
        let textCep = document.querySelector('#cep');
        let cep = textCep.value;
        buscar(cep);
    });
}

main();