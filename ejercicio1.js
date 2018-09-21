function palindromo( texto = "181"){
    if(typeof(texto)!="string") return "no cadena";
    return texto.split("").reverse().join("") == texto;
}
console.log(palindromo());