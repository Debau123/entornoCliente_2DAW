let numeros = [];
for (let i = 0; i < 5; i++) {
    let numero = parseFloat(prompt(`Introduce el número ${i + 1}:`));
    numeros.push(numero);
}

let suma = numeros.reduce((a, b) => a + b, 0);
let mayoresDe100 = numeros.filter(num => num > 100).length;

alert(`La suma de los números es: ${suma}`);
alert(`Cantidad de números mayores de 100: ${mayoresDe100}`);
