async function buscar_curriculo(genero, nacionalidade, usarNomePersonalizado) {
    const experiencias = [
        "Gerente de Projetos - Liderou equipes multifuncionais para entregar projetos dentro do prazo e do orçamento.",
        "Analista de Dados - Realizou análises detalhadas para identificar tendências e otimizar processos empresariais.",
        "Desenvolvedor Web - Criou e manteve websites responsivos e aplicativos, garantindo alta performance e experiência do usuário.",
        "Assistente Administrativo - Organizou agendas, documentos e comunicações, otimizando a produtividade do escritório.",
        "Especialista em Marketing Digital - Planejou e executou campanhas online, aumentando o engajamento em 30%.",
        "Atendente de Suporte Técnico - Resolveu problemas técnicos de clientes, atingindo uma taxa de satisfação de 95%.",
        "Consultor de Vendas - Desenvolveu estratégias para superar metas, gerando um aumento de 20% nas vendas anuais.",
        "Designer Gráfico - Criou identidades visuais e materiais de marketing para fortalecer marcas.",
        "Engenheiro de Software - Desenvolveu sistemas escaláveis e otimizados para empresas de médio porte.",
        "Professor de Inglês - Ministrou aulas personalizadas, melhorando as habilidades de conversação dos alunos em 40%.",
    ];

    const educacao = [
        "Bacharelado em Ciência da Computação - Universidade XYZ (2015-2019)",
        "Mestrado em Administração de Empresas - Universidade ABC (2019-2021)",
        "Tecnólogo em Marketing Digital - Instituto Tech (2018-2020)",
        "Licenciatura em Letras - Universidade Federal (2014-2018)",
    ];

    const habilidades = [
        "Liderança de Equipes",
        "Análise de Dados com Excel e Python",
        "Desenvolvimento Web com HTML, CSS e JavaScript",
        "Gestão de Projetos Ágeis",
        "SEO e Marketing de Conteúdo",
        "Desenvolvimento de Aplicações Móveis",
        "Consultoria de Vendas e Estratégias Comerciais",
        "Design Gráfico com Adobe Photoshop e Illustrator",
        "Inglês Avançado",
    ];

    const idiomas = [
        "Inglês - Avançado",
        "Espanhol - Intermediário",
        "Francês - Básico",
    ];

    function buscarExperiencia() {
        const experienciaAleatoria = experiencias[Math.floor(Math.random() * experiencias.length)];
        return experienciaAleatoria;
    }

    function buscarEducacao() {
        const educacaoAleatoria = educacao[Math.floor(Math.random() * educacao.length)];
        return educacaoAleatoria;
    }

    function buscarHabilidades() {
        const habilidadesAleatorias = [];
        for (let i = 0; i < 3; i++) {
            const habilidadeAleatoria = habilidades[Math.floor(Math.random() * habilidades.length)];
            habilidadesAleatorias.push(habilidadeAleatoria);
        }
        return habilidadesAleatorias.join(", ");
    }

    function buscarIdiomas() {
        const idiomasAleatorios = [];
        for (let i = 0; i < 2; i++) {
            const idiomaAleatorio = idiomas[Math.floor(Math.random() * idiomas.length)];
            idiomasAleatorios.push(idiomaAleatorio);
        }
        return idiomasAleatorios.join(", ");
    }

    const experiencia = buscarExperiencia();
    const educacaoCurriculo = buscarEducacao();
    const habilidadesCurriculo = buscarHabilidades();
    const idiomasCurriculo = buscarIdiomas();

    const url = `https://randomuser.me/api/?gender=${genero}&nat=${nacionalidade}`;

    try {
        let response = await fetch(url);
        if (response.ok) {
            let data = await response.json();

            let nomeApi = `${data.results[0].name.first} ${data.results[0].name.last}`;
            let foto = data.results[0].picture.large;
            let telefone = data.results[0].phone;

            let nomeUsuario = document.getElementById("nome").value.trim();
            let nomeFinal = (usarNomePersonalizado === "sim" && nomeUsuario) ? nomeUsuario : nomeApi;

            let email = usarNomePersonalizado === "sim" && nomeUsuario ? `${nomeUsuario.replace(/\s+/g, '').toLowerCase()}@exemplo.com` : data.results[0].email;

            document.querySelector('.meuCard').style.display = 'none';

            const userCard = document.getElementById('user-card');
            userCard.innerHTML = `
                <div class="cardCurriculo">
                    <div class="card-body text-center">
                        <img src="${foto}" alt="Foto de ${nomeFinal}" class="img-fluid rounded-circle" style="width: 150px;">
                        <h2 class="mt-3">${nomeFinal}</h2>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Telefone:</strong> ${telefone}</p>
                        <p><strong>Experiência Profissional:</strong></p>
                        <p>${experiencia}</p>
                        <p><strong>Educação:</strong></p>
                        <p>${educacaoCurriculo}</p>
                        <p><strong>Habilidades:</strong></p>
                        <p>${habilidadesCurriculo}</p>
                        <p><strong>Idiomas:</strong></p>
                        <p>${idiomasCurriculo}</p>
                        <button class="btn btn-primary mt-3" onclick="location.reload()">Voltar</button>
                    </div>
                </div>
            `;
        } else {
            Swal.fire("Erro na requisição", "Houve um problema ao acessar a API.", "error");
        }
    } catch (error) {
        Swal.fire("Erro na requisição", "Não foi possível acessar os dados. Verifique sua conexão.", "error");
    }
}

function main() {
    let btn = document.querySelector('#buscar');
    btn.addEventListener('click', function () {
        let nome = document.getElementById("nome").value.trim();
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
            Swal.fire({
                title: "<strong>Você não preencheu seu nome!</strong>",
                icon: "info",
                html: `Por favor, preencha o campo <b>nome</b> no formulário!`,
                showCloseButton: true,
                focusConfirm: false,
                confirmButtonText: `<i class="fa fa-thumbs-up"></i> Vou preencher!`,
            });
            return;
        }

        if (!genero) {
            Swal.fire({
                title: "<strong>Você não selecionou seu gênero!</strong>",
                icon: "info",
                html: `Por favor, selecione seu <b>gênero</b> no formulário!`,
                showCloseButton: true,
                focusConfirm: false,
                confirmButtonText: `<i class="fa fa-thumbs-up"></i> Vou selecionar!`,
            });
            return;
        }

        if (!nacionalidade) {
            Swal.fire({
                title: "<strong>Você não selecionou sua nacionalidade!</strong>",
                icon: "info",
                html: `Por favor, selecione sua <b>nacionalidade</b> no formulário!`,
                showCloseButton: true,
                focusConfirm: false,
                confirmButtonText: `<i class="fa fa-thumbs-up"></i> Vou selecionar!`,
            });
            return;
        }

        buscar_curriculo(genero, nacionalidade, usarNomePersonalizado);
    });
}

main();
