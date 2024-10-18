function contarVogais(palavra) {
    let arrayLetras = palavra.split('');
    const vogais = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];
    let qtde = 0;
    
    for (let i = 0; i < arrayLetras.length; i++) {
        if (vogais.indexOf(arrayLetras[i]) !== -1) { // Verifica se a letra está na lista de vogais
            qtde++;
        }
    }
    
    return qtde;
}

let qtde = contarVogais('interestelar');
console.log('Vogais:', qtde);

//OUTRAS FORMAS

/* - if (/[aeiouAEIOU]/.test(arrayLetras[i])) { 
    
   - const vogais = { a: true, A: true, e: true, E: true, i: true, I: true, o: true, O: true, u: true, U: true };
         if (vogais[arrayLetras[i]]) {
*/
