const generarEmail = (usuario, dominio) => {
    const mailGenerado = usuario + "@" + dominio + ".com";
    return mailGenerado;
}

generarEmail('giardinidiamela', 'gmail');
console.log(generarEmail('giardinidiamela', 'gmail'));

