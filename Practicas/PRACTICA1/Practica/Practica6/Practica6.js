function reverseString(str) {
    return str.split("").reverse().join("");
}

let cadena = prompt("Introduce una cadena:");
let palabras = cadena.split(" ");

document.write(`La longitud de la cadena es: ${cadena.length} caracteres<br>`);
document.write(`La cadena en mayúsculas es: ${cadena.toUpperCase()}<br>`);
document.write(`La cadena en minúsculas es: ${cadena.toLowerCase()}<br>`);

document.write("CADENA NORMAL<br>");
palabras.forEach(palabra => {
    document.write(palabra + "<br>");
});

document.write("CADENA AL REVÉS<br>");
palabras.reverse().forEach(palabra => {
    document.write(palabra + "<br>");
});
