function isPercentOf(oldNumber, newNumber){
    var decreaseValue = oldNumber - newNumber;

    return (decreaseValue / oldNumber) * 100;
}

function getProsentase(start, end){
    if(isNaN(start) || isNaN(end)){
        return start + " or " + end + " " + "harus dalam angka";
    }
    else{
        if(start > end){ 
            return "Total Penurunan income -" + Math.abs(Math.trunc(isPercentOf(end, start))) + "%";
        }
        else if(start < end){
            return "Total Kenaikan income " + Math.abs(Math.trunc(isPercentOf(start, end))) + "%";
        }
    }
}

console.log(getProsentase("abc","bca"));//abc or bca harus dalam angka
console.log(getProsentase(600000.00,750000.00));//Total kenaikan income 25%
console.log(getProsentase(750000.00,650000.00));//Total penurunan income -14%