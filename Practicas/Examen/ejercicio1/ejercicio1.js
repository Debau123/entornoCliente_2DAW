function calcularPromedioAsync(numeros) {
    return new Promise((resolve, reject) => {
        if (numeros.length === 0) {
            reject('El array está vacío');
        } else {
            const suma = numeros.reduce((acc, num) => acc + num, 0);
            const promedio = suma / numeros.length;
            resolve(promedio);
        }
    });
}

async function main() {
    const numeros = [1,2,3,4,5]; 
    try {
        const promedio = await calcularPromedioAsync(numeros);
        console.log(`El promedio es: ${promedio}`);
        alert(`El promedio es: ${promedio}`)
    } catch (error) {
        console.error(`Error: ${error}`);
    }
}

main();