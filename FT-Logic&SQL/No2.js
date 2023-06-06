const arr = [3,8,9,7,6]

function rotater(array){
    var arrhasil = [];
    var arrawal = array;
        for (var i = 0; i < arrawal.length; i++){
            if(i != arrawal.length-1){
                arrhasil[i+1] = arrawal[i];
            }else{
                arrhasil[0] = arrawal[i];
            }
        }
    return arrhasil;
}

function rotateArray(array, k){
    var arrSebelum = array;
    var arrSesudah = [];
    for (var i = 0; i < k; i++){
        arrSesudah = rotater(arrSebelum);
        arrSebelum = arrSesudah;
    }
    return arrSesudah;
}

console.log(rotateArray(arr, 3));