const obtenerDatosDeCiudad = (nombre, poblacion, pais) =>{
    const datoObtenido = `La ciudad de ${nombre} tiene una población de ${poblacion} habitantes y está ubicada en ${pais}`;
    return datoObtenido;
}

obtenerDatosDeCiudad("Barcelona", 1664182, "España");
console.log(obtenerDatosDeCiudad("Barcelona", 1664182, "España"));