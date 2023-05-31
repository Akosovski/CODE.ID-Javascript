
function splitIntoArray(num) {
    return Array.from(String(num), Number);
}

function isPalindrome(angka){
    if(angka >= 10000){
        return angka + " harus lebih kecil dari 10000";
    }
    else if(isNaN(angka)){
        return angka + " is not an number";
    }
    else{
        var normal = splitIntoArray(angka);
        var balikan = splitIntoArray(angka);
        balikan.reverse();

        for(var i = 0; i < 4; i++){
            if(normal[i] == balikan[i]) {
                return angka + " is palindrome";
            }
            if(normal[i] != balikan[i]){
                return angka + " is not palindrome";
            }
        }
    }
}


console.log(isPalindrome("abcd"));//abcd is not an number
console.log(isPalindrome("123a"));//123a is not an number
console.log(isPalindrome("1234"));//1234 is not palindrome
console.log(isPalindrome(1221));//1221 is palindrome
console.log(isPalindrome("8888"));//8888 is palindrome