const sumar = (num1, num2) => {
    const suma = num1 + num2;
    return suma;
}

sumar(2, 3);
sumar(1.2, 3.4);
sumar(3, -5);
  
console.log("El resultado de la suma es: " + sumar(2, 3)); 
console.log("El resultado de la suma es: " + sumar(1.2, 3.4));
console.log("El resultado de la suma es: " + sumar(3, -5));

//Sale un error en la linea 1 en consola pero no se exactamente que es.