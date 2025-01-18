async function buscar_curriculo(genero, nacionalidade) {
    const url = `https://randomuser.me/api/?gender=${genero}&nat=${nacionalidade}`;

    try {
        let response = await fetch(url);
        if (response.ok) {
            let data = await response.json();

            let nomeCompleto = `${data.results[0].name.first} ${data.results[0].name.last}`;
            let foto = data.results[0].picture.large;
            let email = data.results[0].email;
            let telefone = data.results[0].phone;

            const userCard = document.getElementById('user-card');
            userCard.innerHTML = `
                <img src="${foto}" alt="Foto de ${nomeCompleto}">
                <h2>${nomeCompleto}</h2>
                <p>Email: ${email}</p>
                <p>Telefone: ${telefone}</p>
            `;
        } else {
            console.error("Erro na requisição:", response.status);
        }
    } catch (error) {
        console.error("Erro ao buscar o currículo:", error);
    }
}

function main() {
    let btn = document.querySelector('#buscar');
    btn.addEventListener('click', function () {
        let radiosGenero = document.getElementsByName('genero');
        let genero = '';
        for (let radio of radiosGenero) {
            if (radio.checked) {
                genero = radio.value;
                break;
            }
        }

        let radiosNacionalidade = document.getElementsByName('nacionalidade');
        let nacionalidade = '';
        for (let radio of radiosNacionalidade) {
            if (radio.checked) {
                nacionalidade = radio.value;
                break;
            }
        }

        if (!genero) {
            alert('Por favor, selecione um gênero.');
            return;
        }

        if (!nacionalidade) {
            alert('Por favor, selecione uma nacionalidade.');
            return;
        }

        buscar_curriculo(genero, nacionalidade);
    });
}

main();
