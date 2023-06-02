function maxWordLength(params) {
    var tampungan = params.split(" ");
    var count = 0;
    var max = "";
    for(let i = 0; i < tampungan.length; i++) {
        if(tampungan[i].length > count){
            count = tampungan[i].length;
            max = tampungan[i];
        }
    }
    return max;
}

console.log(maxWordLength("aku suka bootcamp sentul city"));//bootcamp