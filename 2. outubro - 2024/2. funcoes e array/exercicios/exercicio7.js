/* Observe os dois vetores no trecho de código a seguir.
const vet1 = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
const vet2 = [20, 21, 22, 23, 24, 25, 26, 27, 28, 29];
Defina uma função mesclar(vet1, vet2), que retorne um terceiro vetor composto pelos elementos de vet1 e vet2 intercalados.*/

function mesclar(vet1, vet2) {
    const arrayMesclado = [];

    for (let i = 0; i < vet1.length || i < vet2.length; i++) {
        if (i < vet1.length) {
            arrayMesclado.push(vet1[i]);
        }
        if (i < vet2.length) {
            arrayMesclado.push(vet2[i]);
        }
    }

    return arrayMesclado;
}

const vet1 = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
const vet2 = [20, 21, 22, 23, 24, 25, 26, 27, 28, 29];

console.log(mesclar(vet1, vet2));
