/**
 * input 4 digit integer lalu hitung jumlahnya
 */

function splitIntoArray(num) {
    return Array.from(String(num), Number);
}

function sumDigit(n){
   if(n >= 10000){
    return "n harus lebih kecil dari 10000";
   }
   else if(isNaN(n)){
    return "n is not number, try again...";
   }
   else{
    var total = 0;
    var pisahan = splitIntoArray(n)
    for (var i in pisahan) {
        total += pisahan[i];
    }
    return total;
   }

}   

console.log(sumDigit(1234)); //10
console.log(sumDigit("1234"));//10
console.log(sumDigit(12345));//12345 harus lebih kecil dari 10000
console.log(sumDigit("a123"));//a123 is not number, try again...