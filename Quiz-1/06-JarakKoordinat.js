/**
 * Menghitung jarak kordinat
 * 𝑑 = √(𝑥1 − 𝑥2)^2 + (𝑦1 −𝑦2)^2
 */

function getCoordinate(x1,y1,x2,y2) {

    if(isNaN(x1) || isNaN(x2) || isNaN(y1) || isNaN(y2)) {
        return "Input Koordinat dalam angka"
    }
    else {
        eq_1_a = x1 - x2;
        eq_1_b = Math.pow(eq_1_a, 2);
        
        eq_2_a = y1 - y2;
        eq_2_b = Math.pow(eq_2_a, 2);

        eq_res = eq_1_b + eq_2_b;
        hasil = Math.sqrt(eq_res);

        return hasil;
    }
}
49 + 81
console.log(getCoordinate(3,4,-4,-5)); //9
console.log(getCoordinate("1","2","-1","-2")); //1
console.log(getCoordinate("x","2","-y","-2")); //input kordinat dalam angka
console.log(getCoordinate(3.2,4.5,-4.4,-5)); //13.695801445917125