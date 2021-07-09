const calcularPuntaje = (facil, normal, dificil) => {
    const calculoPuntaje = (3 * facil) + (5 * normal) + (10 * dificil);
    return calculoPuntaje;
}

calcularPuntaje(3, 0, 0);
calcularPuntaje(0, 2, 1);
calcularPuntaje(5, 1, 2);

console.log(calcularPuntaje(3, 0, 0));
console.log(calcularPuntaje(0, 2, 1));
console.log(calcularPuntaje(5, 1, 2));