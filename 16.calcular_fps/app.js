const calcularFPS = (fps, minutos) => {
    const calculoFPS = (minutos * 60) * fps;
    return calculoFPS;
}

calcularFPS(1, 1) // 60
calcularFPS(10, 2) // 1200
calcularFPS(2, 3) // 360

console.log(calcularFPS(1, 1));
console.log(calcularFPS(10, 2));
console.log(calcularFPS(2, 3));