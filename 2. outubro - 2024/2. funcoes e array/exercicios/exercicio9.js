/* O método Array.from() cria um vetor (array) a partir de um objeto iterável 
(iterable — uma série de valores que possam ser percorridos). 
Para compreender melhor, execute o código de exemplo a seguir no Console do seu navegador.

const word = 'interestelar';
Array.from(word);

Complete este código para fazê-lo exibir o número de vogais na palavra word. 
Você deve usar o método Array.filter().
 */

function contarVogais(palavra) {
    let vogais = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];
    
    const letras = Array.from(palavra);
    
    const vogaisFiltradas = letras.filter(letra => vogais.includes(letra));
    
    return vogaisFiltradas.length; 
}

console.log(contarVogais('interestelar'));
