/** Display year is kabisat and display month */

function getDays(month, year){
    var bulan = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    bool = false;
    if(isNaN(month) && isNaN(year)) {
        return "inputan bulan & tahun harus dalam integer";
    }
    else if(isNaN(month)) {
        return "inputan bulan harus dalam integer"; 
    }
    else if(isNaN(year)){
        return "inputan tahun harus dalam integer";
    } 
    else {
        for(var i = 0; i < 12; i++) {
            if(i-1 == month) {
                if((0 == year % 4) && (0 != year % 100) || (0 == year % 400)){
                    if(bulan[month-1] == 28){
                        var febkab = bulan[month-1]+1;
                        return "This month has " + febkab + " hari, " + year + " adalah tahun kabisat";
                    }
                    return "This month has " + bulan[month-1] + " hari, " + year + " adalah tahun kabisat";
                }
                else{
                    return "This month has " + bulan[month-1] + " hari";
                }
                
            }
        }    
    }
}

console.log(getDays("a",2021)); //inputan bulan harus dalam integer
console.log(getDays("2","year")); //inputan tahun harus dalam integer
console.log(getDays("m","year"));//inputan bulan & tahun harus dalam integer
console.log(getDays(2,2000)); //This month has 29 hari, 2000 adalah tahun kabisat
console.log(getDays(8,2021)); //This month has 31 hari