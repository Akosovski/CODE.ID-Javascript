
function isPalindrome(word){
    return word.toUpperCase() == word.split("").reverse().join("").toUpperCase();
}

console.log(isPalindrome('kasur ini rUsak'));//true