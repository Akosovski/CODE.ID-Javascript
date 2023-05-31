/**
 * Convert rupiah to other currency
 */

function convertToRupiah(money, type){
    one_yen = 130.12;
    one_dollar = 14382.5;
    one_euro = 16000;

    if(type == ''){
        return "no match type currency";
    }
    else{
        if(type == "yen"){
            var result = money * one_yen; 
            return "Rp. " + result.toLocaleString('id');
        }
        else if(type == "usd"){
            var result = money * one_dollar; 
            return "Rp. " + result.toLocaleString('id');
        }
        else if(type == "euro"){
            var result = money * one_euro; 
            return "Rp. " + result.toLocaleString('id');
        }
    }
}

console.log(convertToRupiah(1000,'yen'));//1000 yen  = Rp.130.120
console.log(convertToRupiah(100,'usd'));//100 dollar  = Rp.1.438.250
console.log(convertToRupiah(100,'euro'));//100 euro = Rp.1.600.000
console.log(convertToRupiah(100,''));//no match type currency