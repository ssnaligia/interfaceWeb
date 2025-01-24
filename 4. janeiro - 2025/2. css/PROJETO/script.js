async function buscar_curriculo(genero, nacionalidade, usarNomePersonalizado) {
    const experiencias = [
        "Gerente de Projetos - Gerenciamento de projetos, coordenação de equipes multifuncionais e entrega de soluções dentro dos prazos.",
        "Analista de Dados - Análise de dados para identificação de tendências e otimização de processos empresariais, aumentando a eficiência operacional em 25%.",
        "Desenvolvedor Web - Desenvolvimento e manutenção de websites responsivos e aplicativos, garantindo alto desempenho e experiência do usuário, resultando em um aumento de 40% no tempo médio de retenção.",
        "Assistente Administrativo - Organização de agendas, documentos e comunicações, otimizando a produtividade administrativa e reduzindo erros operacionais em 30%.",
        "Especialista em Marketing Digital - Planejamento e execução de campanhas de marketing digital, aumentando o engajamento em 30% e ampliando o alcance da marca.",
        "Atendente de Suporte Técnico - Atendimento e suporte técnico a clientes, solucionando problemas e garantindo uma taxa de satisfação de 95%.",
        "Consultor de Vendas - Desenvolvimento de estratégias de vendas para superação de metas, gerando um aumento de 20% no faturamento anual.",
        "Designer Gráfico - Criação de identidades visuais e materiais gráficos para fortalecimento de marcas, resultando em um aumento de 35% no reconhecimento da marca.",
        "Engenheiro de Software - Desenvolvimento de sistemas escaláveis e otimização de softwares para empresas de médio porte, reduzindo o tempo de resposta do sistema em 50%.",
        "Professor de Inglês - Planejamento e aplicação de metodologias para ensino de idiomas, proporcionando melhorias de 40% na conversação e compreensão dos alunos."
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

    function formatarNome(nome) {
        return nome
            .toLowerCase()
            .split(" ")
            .map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1))
            .join(" ");
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

            let nomeUsuario = formatarNome(document.getElementById("nome").value.trim());
            let nomeFinal = (usarNomePersonalizado === "sim" && nomeUsuario) ? nomeUsuario : nomeApi;

            let email = usarNomePersonalizado === "sim" && nomeUsuario ? `${nomeUsuario.replace(/\s+/g, '').toLowerCase()}@exemplo.com` : data.results[0].email;

            document.querySelector('.meuCard').style.display = 'none';

            const userCard = document.getElementById('user-card');
            userCard.innerHTML = `
                <div class="cardCurriculo">
                    <div class="cardHeader">
                        <img src="${foto}" alt="Foto de ${nomeFinal}" class="userFoto">
                        <div class="userInfo">
                            <h2>${nomeFinal}</h2>
                            <p><strong>Email:</strong> ${email}</p>
                            <p><strong>Telefone:</strong> ${telefone}</p>
                        </div>
                    </div>

                    <div class="cardContent">
                        <div class="cardSection">
                            <h3>Experiência Profissional</h3>
                            <p>${experiencia}</p>
                            <span class="tooltip-text">Dica: Tente encaixar experiências que complementam uma a outra!</span>
                        </div>

                        <div class="cardSection">
                            <h3>Educação</h3>
                            <p>${educacaoCurriculo}</p>
                            <span class="tooltip-text">Dica: Inclua o nome da instituição, o grau obtido e as datas de início e término. Se relevante, adicione cursos extras ou especializações.</span>
                        </div>

                        <div class="cardSection">
                            <h3>Habilidades</h3>
                            <p>${habilidadesCurriculo}</p>
                            <span class="tooltip-text">Dica: Liste habilidades relevantes para a vaga, como softwares específicos ou competências técnicas. Habilidades interpessoais também podem ser incluídas.</span>
                        </div>

                        <div class="cardSection">
                            <h3>Idiomas</h3>
                            <p>${idiomasCurriculo}</p>
                            <span class="tooltip-text">Dica: Indique seu nível de fluência (básico, intermediário, avançado ou fluente) e, se possível, o tempo de experiência com o idioma.</span>
                        </div>
                    </div>

                    <button class="btn-voltar" onclick="location.reload()"><img width="50" height="50" src="https://img.icons8.com/ios-filled/30/dbb7b7/long-arrow-left.png" alt="long-arrow-left"/> Voltar</button>                
                    <br>
                </div>
                <br>
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

        if (usarNomePersonalizado === "") {
            Swal.fire({
                title: "<strong>Você precisa selecionar uma opção!</strong>",
                icon: "info",
                html: `Por favor, selecione se deseja personalizar os templates com seu nome!`,
                showCloseButton: true,
                focusConfirm: false,
                confirmButtonText: `<i class="fa fa-thumbs-up"></i> Vou selecionar!`,
                confirmButtonColor: '#571e1e',
                iconColor: '#571e1e',
            });
            return;
        }

        buscar_curriculo(genero, nacionalidade, usarNomePersonalizado);
    });
}

main();