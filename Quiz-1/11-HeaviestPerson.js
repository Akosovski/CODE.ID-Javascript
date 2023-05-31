/**
 * hitung orang yg memiliki berat badan paling tinggi
 */

function getHeavier(wg1,wg2,wg3){
    var array = [];
    array.push(wg1);
    array.push(wg2);
    array.push(wg3);

    return Math.max(...array);
}

console.log(getHeavier(12,45,70));//70