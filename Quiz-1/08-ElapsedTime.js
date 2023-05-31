/**
 * hitung detik ke dalam day, hour, minute and seconds
 */

function getPeriodTimes(seconds) {
    if(isNaN(seconds)){
        return seconds + " is not number";
    }
    else{
        var day = Math.floor(seconds/86400);
        var hour = Math.floor((seconds - day * 86400)/3600);
        var minute = Math.floor((seconds - day * 86400 - hour * 3600)/60);
        var second = seconds - day * 86400 - hour * 3600 - minute * 60;

        return day + " hari " + hour + " jam " + minute + " menit " + second + " detik";
    }
}

console.log(getPeriodTimes("700005A"));//700005A is not number
console.log(getPeriodTimes("700005"));//8 hari 2 jam 26 menit 45 detik