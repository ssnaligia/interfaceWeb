let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

array.filter((x) => x >5);

array.map((x) => 2*x); 

let result = [];

/* se fosse fazer o filter na mão:

for(let i=0; i < array.length; i++) {
    if(array[i] > 5) {
        rest.push(array[i]);
    }
}*/

for(let i=0; i < array.length; i++) {
    result.push(2 * array[i]);
}
