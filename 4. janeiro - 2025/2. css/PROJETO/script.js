async function buscar_curriculo(genero, nacionalidade, usarNomePersonalizado) {
    const url = `https://randomuser.me/api/?gender=${genero}&nat=${nacionalidade}`;

    try {
        let response = await fetch(url);
        if (response.ok) {
            let data = await response.json();

            let nomeApi = `${data.results[0].name.first} ${data.results[0].name.last}`;
            let foto = data.results[0].picture.large;
            let email = data.results[0].email;
            let telefone = data.results[0].phone;

            let nomeUsuario = document.getElementById("nome").value.trim();

            let nomeFinal = (usarNomePersonalizado === "sim" && nomeUsuario) ? nomeUsuario : nomeApi;

            document.querySelector('.meuCard').style.display = 'none';

            const userCard = document.getElementById('user-card');
            userCard.innerHTML = `
                <div class="cardCurriculo">
                    <div class="card-body text-center">
                        <img src="${foto}" alt="Foto de ${nomeFinal}" class="img-fluid rounded-circle" style="width: 150px;">
                        <h2 class="mt-3">${nomeFinal}</h2>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Telefone:</strong> ${telefone}</p>
                        <button class="btn btn-primary mt-3" onclick="location.reload()">Voltar</button>
                    </div>
                </div>
            `;
        } else {
            swal("Erro na requisição", "error");
        }
    } catch (error) {
        swal("Erro na requisição", "error");
    }
}

function main() {
    let btn = document.querySelector('#buscar');
    btn.addEventListener('click', function () {
        let nome = document.getElementById("nome").value;
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

        let usarNomePersonalizado = document.getElementById("personalizar").value;

        if (!nome) {
            swal("ATENÇÃO!", "Por favor, preencha o campo nome.", "warning");
            return;
        }

        if (!genero) {
            swal("ATENÇÃO!", "Por favor, selecione um gênero.", "warning");
            return;
        }

        if (!nacionalidade) {
            swal("ATENÇÃO!", "Por favor, selecione uma nacionalidade.", "warning");
            return;
        }

        buscar_curriculo(genero, nacionalidade, usarNomePersonalizado);
    });
}

main();
