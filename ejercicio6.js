function calcularValorAbsoluto(valor = 2){
    if( typeof(valor)!="number") return "Error no numero";
    if(valor >0) return valor;
    
    else return valor * -1;
}

console.log(calcularValorAbsoluto(-3));
