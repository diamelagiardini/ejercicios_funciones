const restarPorcentaje = (numero, porcentaje) => {
    const calculoRestaporcentaje = numero - ((numero * porcentaje) / 100);
    return calculoRestaporcentaje;
}

restarPorcentaje(100, 15);
restarPorcentaje(10, 40);
restarPorcentaje(200, 10);

console.log(restarPorcentaje(100, 15));
console.log(restarPorcentaje(10, 40));
console.log(restarPorcentaje(200, 10));