const obtenerNombre = (nombre, apellido) => {
    const nombreCompleto = `El nombre completo es ${nombre} ${apellido}.`;
    return nombreCompleto;
}

obtenerNombre("Ada", "Lovelace");
obtenerNombre("Diamela", "Giardini");

console.log(obtenerNombre("Ada", "Lovelace"));
console.log(obtenerNombre("Diamela", "Giardini"));