function isCharsUnique(string){
    var tampungan = [];

    for(var i = 0; i < string.length; i++) {
        tampungan.push(string[i]);
    }
    for(var x = 0; x < string.length; x++) {
        if(tampungan[x] == tampungan[string.length-1]) {
            return false;
        }else{
            return true;
        }
    }
}

console.log(isCharsUnique('abcdefg'));//true
console.log(isCharsUnique('abcdefga'));//false