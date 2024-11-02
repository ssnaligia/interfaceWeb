const data = {
    "cep": "14802-000",
    "logradouro": "Avenida Padre Francisco Sales Colturato",
    "complemento": "lado par",
    "unidade": "",
    "bairro": "Centro",
    "localidade": "Araraquara",
    "uf": "SP",
    "estado": "São Paulo",
    "regiao": "Sudeste",
    "ibge": "3503208",
    "gia": "1818",
    "ddd": "16",
    "siafi": "6163"
};

function preencher() {
    const logradouro = document.querySelector('#logradouro')
    logradouro.value = data['logradouro']; 
    const bairro = document.querySelector('#bairro')
    bairro.value = data['bairro']; 
    const cidade = document.querySelector('#cidade')
    cidade.value = data['localidade'];
    const estado = document.querySelector('#estado')
    estado.value = data['estado']; 

    console.log(logradouro);
}

preencher();
