function traduzirTexto(texto) {
    const palavras = texto.split(' '); 
    const resultado = palavras.map(palavra => {
        if (palavra.length >= 2) { 
            const primeiraSilaba = palavra.slice(0, 2); //pega a primeira sílaba
            
            if (palavra.startsWith(primeiraSilaba + primeiraSilaba)) { //determina se uma string começa com a sílaba repetida
                return palavra.slice(0, 2) + palavra.slice(4); //se a palavra começa com a sílaba repetida, remove a repetição
            }
        }
        return palavra; 
    });

    return resultado.join(' '); //junta as palavras novamente em um texto
}

const texto1 = 'Juca comprou fafarinha na memercearia e papagou 4 reais o quilo. A mamae de Juca pediu para ele comprar mamais 2 quilos.';
const texto2 = 'O papassarinho vovoou para bem longe.';

console.log(traduzirTexto(texto1));
console.log(traduzirTexto(texto2));
