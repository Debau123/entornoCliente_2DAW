
// Array con los meses del año en formato alfanumérico
const meses = [
    "01 - Enero", 
    "02 - Febrero", 
    "03 - Marzo", 
    "04 - Abril", 
    "05 - Mayo", 
    "06 - Junio", 
    "07 - Julio", 
    "08 - Agosto", 
    "09 - Septiembre", 
    "10 - Octubre", 
    "11 - Noviembre", 
    "12 - Diciembre"
];

for (let i = 0; i < meses.length; i++) {
    let mensaje = meses[i]; 
    if ((i + 1) % 2 !== 0) {
        mensaje += ": Este mes es impar";
        alert(mensaje);
    }
}
