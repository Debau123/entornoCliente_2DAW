function generarColorAleatorio() {
    const letras = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letras[Math.floor(Math.random() * 16)];
    }
    return color;
}

document.getElementById('cambiarFondoBtn').addEventListener('click', function() {
    const colorOriginal = document.body.style.backgroundColor;
    const colorAleatorio = generarColorAleatorio();
    document.body.style.backgroundColor = colorAleatorio;

    setTimeout(() => {
        document.body.style.backgroundColor = colorOriginal;
    }, 3000);
});