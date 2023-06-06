let triangle = '';
let number = 1;

for (let i = 1; i <= 7; i++) {
    for (let j = 1; j <= i; j++) {
        triangle += number + ' ';
        number++;
    }
    triangle += '\n';
}

console.log(triangle);