/** buat segitiga  */ 

var tampungan1 = [];
for (let i = 1; i < 5; i++) {
    tampungan1.push(i);
} 
for (let j = 4; j > 0; j--) {
    console.log(tampungan1.join(' '));
    tampungan1.pop(); 
}

// output 
// 1 2 3 4 
// 1 2 3 
// 1 2 
// 1 
console.log();

var tampungan2 = [];
for (let x = 5; x > 0; x--) {
    tampungan2.push(x);
}  
for (let j = 5; j > 0; j--) {
    console.log(tampungan2.join(' '));
    tampungan2.shift();
}

// output
// 5 4 3 2 1  
// 4 3 2 1  
// 3 2 1
// 2 1  
// 1  
