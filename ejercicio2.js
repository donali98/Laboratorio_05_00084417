function ordenarArreglo(arreglo = [3,2,1,5]){

    for(let i = 0; i<arreglo.length -1;i++){
        
        
        for(let j = 0;j<arreglo.length - i - 1;j++){
            
            if(arreglo[j]>arreglo[j+1]){

                let temp  = arreglo[j];
                arreglo[j] = arreglo[j+1];
                arreglo[j+1] = temp;
            }
        }
    }
    return arreglo;

}
console.log(ordenarArreglo([10,10000,3,1,-19]));
