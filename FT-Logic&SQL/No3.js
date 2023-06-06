const array1 = ["Mangga","Apel","Melon","Pisang","Sirsak","Tomat","Nanas","Nangka","Timun","Mangga"];
const array2 = ["Bayam","Wortel","Kangkung","Mangga","Tomat","Kembang Kol","Nangka","Timun"];

function pencariBeda(array1, array2) {
    var sama = [];
    var beda = [];

    for (let i = 0; i < array1.length; i++) {
        if (array2.includes(array1[i])) {
            if (sama.includes(array1[i]) == false) {
                sama.push(array1[i]);
            }
        }
    }

    for (let i = 0; i < array1.length; i++) {
        if (sama.includes(array1[i]) == false) {
            beda.push(array1[i]);
        }
    }
    for (let i = 0; i < array2.length; i++) {
        if (sama.includes(array2[i]) == false) {
            if (beda.includes(array2[i]) == false){
                beda.push(array2[i]);
            }
        }
    }

    return beda;
}

function pencariSama(array1, array2) {
    var sama = [];

    for (let i = 0; i < array1.length; i++) {
        if (array2.includes(array1[i])) {
            if (sama.includes(array1[i]) == false) {
                sama.push(array1[i]);
            }
        }
    }

    return sama;
}

console.log("Same = " + pencariSama(array1, array2) +"\nDifferent = " + pencariBeda(array1, array2));