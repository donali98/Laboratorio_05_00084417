function fromDecimalToBinary(numero = 174){
    var intPart = numero;
    var binaryResult = "";
    while(intPart!=0){

        binaryResult= binaryResult.concat((intPart% 2).toString());        
        intPart = Math.floor(intPart/2);
        

    }
    return binaryResult.split("").reverse().join("");    
}

console.log(fromDecimalToBinary());
