function calcularLetraDNI(dni) {
    try {
        const numero = parseInt(dni);
        if (isNaN(numero) || numero < 0 || numero > 99999999) {
            throw new Error("El DNI debe ser un número entre 0 y 99999999.");
        }

        const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
        const letra = letras[numero % 23];

        return letra;
    } catch (error) {
        console.error(error.message);
        return null;
    }
}

function calcularLetra() {
    const dniInput = document.getElementById('dniInput').value;
    const letra = calcularLetraDNI(dniInput);
    const resultadoDiv = document.getElementById('resultado');

    if (letra) {
        resultadoDiv.textContent = `La letra correspondiente al DNI ${dniInput} es: ${letra}`;
    } else {
        resultadoDiv.textContent = 'Error: Introduce un número válido.';
    }
}
