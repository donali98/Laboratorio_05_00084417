function bisiesto(anio){
    return anio%100 ==0 && anio%400 == 0;
}

console.log(bisiesto(2016));
