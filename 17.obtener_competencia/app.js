const obtenerCompetencia = (a, b) => {
    const competencia = a + " vs. " + b;
    return competencia;
}

obtenerCompetencia('JavaScript', 'Python');
obtenerCompetencia('Coca', 'Pepsi');
obtenerCompetencia('Perros', 'Gatos');

console.log(obtenerCompetencia('JavaScript', 'Python'));
console.log(obtenerCompetencia('Coca', 'Pepsi'));
console.log(obtenerCompetencia('Perros', 'Gatos'));