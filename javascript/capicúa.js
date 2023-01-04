let verificarCapicua = (numero = 0) => {
    if(!numero) return console.warn("El numero ingresado esta vacia");

    if(typeof numero !== "number") return console.error("Se espera un numero mas no un string");

    let numeroString = numero.toString();   //convertido el numero en string
    
    let numeroArray = numeroString.split('');   //numero string convertido en arreglo

    //algoritmo para invertir los elementos del arreglo
    let izquierda = 0;
    let derecha = numeroArray.length - 1;

    while(izquierda < derecha) {
        aux = numeroArray[izquierda];   //aux = 2;
        numeroArray[izquierda] = numeroArray[derecha];  //numeroArray[0] = 2;
        numeroArray[derecha] = aux; //numeroArray[3] = 2

        izquierda++;
        derecha--;
    }

    let numeroInvertidoString = numeroArray.join('');   
    
    //operador ternario
    return (numeroString === numeroInvertidoString)
        ? console.log(`El numero ${numero} es capicúa con su invertida ${numeroInvertidoString}.` )
        : console.log(`El numero ${numero} no es capicúa`)
}

verificarCapicua(14.41);