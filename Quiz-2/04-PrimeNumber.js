
function showPrimeNumber(n){
    for(let i = 0; i < n + 1; i++){
        if (isPrime(i)) {
            console.log(i);
        }
    }
}

function isPrime(no){ 
    if (no < 2) {
        return false;
      }
      for (let i = 2; i < no; i++) {
        if (no % i == 0) {
          return false;
        }
      }
      return true;
}

console.log(showPrimeNumber(100));

/**

2	3	5	7	11
13	17	19	23	29
31	37	41	43	47
53	59	61	67	71
73	79	83	89	97

 */