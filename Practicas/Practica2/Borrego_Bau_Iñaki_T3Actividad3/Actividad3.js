
const libros = [
    { title: "ELantris", year: 2014, isbn: "852-456789", author: "Brandon Sanderson" },
    { title: "Archivo de las tormentas", year: 2019, isbn: "123-987654", author: "Brandon Sanderson" },
    { title: "Nacidos de la bruma", year: 2021, isbn: "541-456123", author: "Brandon Sanderson" },
    { title: "Aliento de los dioses", year: 2018, isbn: "354-654321", author: "Brandon Sanderson" }
];


function obtenerLibros() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(libros); 
        }, 2000);
    });
}


function mostrarLibros() {
    obtenerLibros()
        .then(libros => {
            let html = "<ul>";
            libros.forEach(libro => {
                html += `<li>${libro.title} - ${libro.author} (ISBN: ${libro.isbn}, Año: ${libro.year})</li>`;
            });
            html += "</ul>";
            document.getElementById("listaLibros").innerHTML = html;
        })
        .catch(error => {
            console.error("Error al obtener los libros: ", error);
        });
}
