let numSorteado = 15;

do {
    var num = parseInt(prompt('Dê um palpite: '));
    if (num > numSorteado) {
        alert('Tente um número menor.');
    } else if(num < numSorteado) {
        alert('Tente um número maior.');
    }
}while(num != numSorteado);

    alert('Parabéns! Você acertou.');

