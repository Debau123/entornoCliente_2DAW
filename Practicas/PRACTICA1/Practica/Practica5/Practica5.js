let precio = parseFloat(prompt("Introduce el precio del artículo:"));
let iva = precio * 0.21;
let precioTotal = precio + iva;

alert(`El IVA es: ${iva.toFixed(2)}€`);
alert(`El precio total con IVA es: ${precioTotal.toFixed(2)}€`);
