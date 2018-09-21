function fibonacci(numero = 11){
    let nuevoArreglo = [];
    for(let i = 0; i<numero; i++){
        if(i == 0) {
            nuevoArreglo.push(i);
            continue;
        }
        if(i == 1 || i ==2) {
            nuevoArreglo.push(1);
            continue;
        }
        nuevoArreglo.push(nuevoArreglo[i-1] + nuevoArreglo[i-2]);
    }
    return nuevoArreglo;
}

console.log(fibonacci());