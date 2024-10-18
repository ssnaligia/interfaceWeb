function Processar(limite, statusCallback) {
    for(let i=0; i < limite; i++) {
        if(i % 10 == 0) {
            statusCallback(i);
        }
    }
}

/*function Status(step) {
    console.log('Step: ', step);
}*/

Processar(100, function(step) {
    console.log('Step: ', step);
});