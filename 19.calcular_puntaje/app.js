const calcularPuntaje = (facil, normal, dificil) => {
    const puntosFacil = 3
    const puntosNormal = 5
    const puntosDificil = 10
    const calculoDePuntaje = (facil * puntosFacil) + ", " +(normal * puntosNormal) + ", " + (dificil * puntosDificil);
    return calculoDePuntaje;
}

calcularPuntaje(3, 0, 0) // 9
calcularPuntaje(0, 2, 1) // 20
calcularPuntaje(5, 1, 2) // 40

console.log(calcularPuntaje(3, 0, 0));
console.log(calcularPuntaje(0, 2, 1));
console.log(calcularPuntaje(5, 1, 2));