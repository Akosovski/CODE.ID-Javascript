function totalGaji(gaji1, gaji2, gaji3) {
    pajak1 = gaji1 * taxGaji(gaji1);
    pajak2 = gaji2 * taxGaji(gaji2);
    pajak3 = gaji3 * taxGaji(gaji3);
    total1 = gaji1 + pajak1;
    total2 = gaji2 + pajak2;
    total3 = gaji3 + pajak3;
    result = total1 + total2 + total3;

    console.log("Total gaji yang harus dibayar :");
    console.log("Emp1 : " + gaji1 + " + Pajak(" + taxGaji(gaji1)*100 + "%) = Rp. " + total1);
    console.log("Emp2 : " + gaji2 + " + Pajak(" + taxGaji(gaji2)*100 + "%) = Rp. " + total2);
    console.log("Emp3 : " + gaji3 + " + Pajak(" + taxGaji(gaji3)*100 + "%) = Rp. " + total3);
    return "Total : Rp. " + result;
}

function taxGaji(gaji) {
    if (gaji >= 10000) {
        return (10 / 100).toFixed(2)
    } else if (gaji >= 1000 && gaji < 10000) {
        return (5 / 100).toFixed(2)
    } else if (gaji >= 100 && gaji < 1000) {
        return (2 / 100).toFixed(2)
    }
}

console.log(totalGaji(500, 2000, 12000));
/**
    Total gaji yang harus dibayar :  
    Emp1 : Rp.500 + Pajak(2%)=Rp.510
    Emp1 : Rp.2000 + Pajak(5%)=Rp.2100
    Emp1 : Rp.12000 + Pajak(10%)=Rp.13200
    Total : Rp.15810
 */