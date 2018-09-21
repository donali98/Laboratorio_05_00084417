function bisiesto(anio=2000){
    if( typeof(anio)!="number") return "Error no numero";
    //Ignorando parte decimal si se manda
    return Math.floor(anio%4) == 0;
}

console.log(bisiesto(2000.1));
