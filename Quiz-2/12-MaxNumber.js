const numbers = [44,131,335,223,21,66,87];
// This syntax is not allowed. The result is NaN.

function maxNumber(arrays){
    var max = 0;
    for (var i = 0; i < arrays.length; i++) {
        if (arrays[i] > max) {
            max = arrays[i];
        }
    }
    return max;
}

console.log(maxNumber(numbers));