const vetorM = [9, 6, 3, 8, 7, 5];
//const vetorM = [9, 6, 3, 7, 5, 2, 4];

vetorM.sort();

if(vetorM.length %2 == 0) {
    let tamanho = vetorM.length / 2;
    let mediana = (vetorM[tamanho] + vetorM[tamanho-1]) / 2;
    console.log('Vetor Ordenado: ' + vetorM);
    console.log('A mediana é: ' + mediana);
} else {
    let indice = Math.floor(vetorM.length / 2);
    let mediana = vetorM[indice];
    console.log('Vetor Ordenado: ' + vetorM);
    console.log('A mediana é: ' + mediana);
}


