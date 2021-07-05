const saludarGritando = (saludo, nombreCompleto, grito) => {
    const saludandoGritando = `${saludo} ${nombreCompleto}, un gusto conocerte ${grito}`;
    return saludandoGritando;
}

saludarGritando("Holaa", "Diamela Giardini", "!");
console.log(saludarGritando("Holaaa", "Diamela Giardini","!"));