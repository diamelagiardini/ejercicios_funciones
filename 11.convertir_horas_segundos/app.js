const convertirHorasEnSegundos = (horas) => {
    const conversion = horas * 3600;
    return conversion;
}

convertirHorasEnSegundos(1);
convertirHorasEnSegundos(3);
convertirHorasEnSegundos(4.5);

console.log(convertirHorasEnSegundos(1));
console.log(convertirHorasEnSegundos(3));
console.log(convertirHorasEnSegundos(4.5));