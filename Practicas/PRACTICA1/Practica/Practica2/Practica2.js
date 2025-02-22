let numeros = [6, 8, 3, 12, 18];
let suma = numeros.filter(num => num > 8).reduce((a, b) => a + b, 0);

alert(`La suma de los números mayores de 8 es: ${suma}`);