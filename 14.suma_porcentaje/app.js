const sumarPorcentaje = (numero, porcentaje) => {
    const calculoSumaPorcentaje = numero + ((numero * porcentaje) / 100);
    return calculoSumaPorcentaje;
}

sumarPorcentaje(100, 15);
sumarPorcentaje(10, 50);
sumarPorcentaje(200, 10);

console.log(sumarPorcentaje(100, 15));
console.log(sumarPorcentaje(10, 50));
console.log(sumarPorcentaje(200, 10));