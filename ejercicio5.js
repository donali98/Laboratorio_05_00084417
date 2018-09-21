function  calcularAreaCircunferencia(radio){

    if( radio <= 0 || radio == null) return "ERROR:El radio debe ser mayor que cero";
    else return (Math.PI * Math.pow(radio,2)).toFixed(2);
    
}

console.log(calcularAreaCircunferencia(2));
