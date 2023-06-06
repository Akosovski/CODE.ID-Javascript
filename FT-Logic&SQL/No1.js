
function totalLompat(x, y, k) {

    var distance = y-x;
    var count = 1;
    for (var i = 0; i < distance; i++){
        if (k*count < y){
            count = count + 1;
        }
    }
    return count;
}

console.log(totalLompat(10,85,30));