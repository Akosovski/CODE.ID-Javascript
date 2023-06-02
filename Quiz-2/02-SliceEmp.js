// terdapat array employees
const cities = ["merak", "tangerang", "jakarta", "bogor", "cianjur", "cimahi", "bandung"];

const bogor = cities.indexOf("bogor")

const citiesSliced = [...cities.slice(0, bogor), ...cities.slice(bogor + 1)]

function citiesSlice(arrays, cityBetween) {
    var beda_depan = 0;
    var beda_belakang = 0;
    for (let i = 0; i < arrays.length; i++) {
        if (arrays[i] === cityBetween) {
            beda_depan = i;
            // console.log(beda_depan);
            beda_belakang = arrays.length - 1 - i;
            // console.log(beda_belakang);
        }
    }
    return arrays.slice(beda_depan, beda_belakang);
}

console.log(citiesSlice(cities,"jakarta"));
//['merak', 'tangerang', 'bogor', 'cianjur', 'cimahi', 'bandung']