/** ubah value string ke date 
 *  gunakan split
 *  inputan s = bulan/hari/tahun
*/


function strToDate(s){
    var pisah = s.split('/');
    if(isNaN(pisah[0]) || isNaN(pisah[1]) || isNaN(pisah[2])){
        return s + ' bad format date';
    }else{
        var mydate = new Date(pisah[2], pisah[0]-1, pisah[1]);
        return mydate.toDateString() + ' 00:00:00 GMT+0700 (Western Indonesia Time)';
    }
}

console.log(strToDate('12/30/2021'));//Thu Dec 30 2021 00:00:00 GMT+0700 (Western Indonesia Time)
console.log(strToDate('12/aa/bb')); //12/aa/bb bad format date