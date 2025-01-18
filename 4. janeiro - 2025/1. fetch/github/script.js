async function buscar(user) {
    const url = `https://api.github.com/users/${user}`;

    let response = await fetch(url);
    if (response.ok) {
        let nome = await response.json();

        //nome 
        let pNome = document.createElement("p");
        let body = document.querySelector("body");
        pNome.textContent = nome['name'];
        pNome.classList.add('style');  
        body.appendChild(pNome);

        //avatar do usuário
        let fAvatar = document.createElement("img");
        fAvatar.src = nome['avatar_url'];
        fAvatar.classList.add('avatar');  
        body.appendChild(fAvatar);

        //número de repositórios
        let reposResponse = await fetch(nome['repos_url']);
        if (reposResponse.ok) {
            let repos = await reposResponse.json();
            let pRepos = document.createElement("p");
            pRepos.textContent = `Número de Repositórios: ${repos.length}`;
            body.appendChild(pRepos);
        } else {
            alert("Não foi possível carregar os repositórios.");
        }
    } else {
        alert("Usuário não encontrado.");
    }
}

function main() {
    let btn = document.querySelector('#buscar');
    btn.addEventListener('click', function() {
        let textUser = document.querySelector('#user');
        let user = textUser.value;
        buscar(user);
    });
}

main();