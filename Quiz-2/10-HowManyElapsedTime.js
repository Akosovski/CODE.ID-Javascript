/** berapa banyak tahun kabisat antara tahun1 ke tahun2 */

function howManyKabisat(year1, year2){
    var count = 0;
    for(var i = year1; i < year2 + 1; i++){
        if(isKabisat(i)) count++;
    }
    return count;
}

function isKabisat(year){
    return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}

console.log(howManyKabisat(1997,2021));