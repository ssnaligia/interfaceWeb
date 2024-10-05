function escopoLet() { //só "enxerga" dentro do bloco, nesse caso o if
    if(2 > 1) {
        let x = 10;
        console.log('[Dentro do if - let]', x);
    }
    console.log('[Fora do if - let]', x);
}

function escopoVar() {
    if(2 > 1) {
        var x = 10;
        console.log('[Dentro do if - var]', x);
    }
    console.log('[Fora do if - var]', x);
}

escopoVar();
escopoLet();