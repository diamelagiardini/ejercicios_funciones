const calcularPorcentaje = (numero, porcentaje) => {
    const calculoPorcentaje = (numero * porcentaje) / 100;
    return calculoPorcentaje;
}

calcularPorcentaje(100, 15);
calcularPorcentaje(10, 50);
calcularPorcentaje(200, 10);

console.log(calcularPorcentaje(100, 15));
console.log(calcularPorcentaje(10, 50));
console.log(calcularPorcentaje(200, 10));
