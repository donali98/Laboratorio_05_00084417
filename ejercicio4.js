function fromDecimalToBinary(numero = 10){
    if(numero<0) return "No es un numero positivo"
    var intPart = numero;
    var binaryResult = "";
    while(intPart!=0){

        binaryResult= binaryResult.concat((intPart% 2).toString());        
        intPart = Math.floor(intPart/2);
        

    }
    return binaryResult.split("").reverse().join("");    
}

console.log(fromDecimalToBinary());
