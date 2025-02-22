
# Memoria - Tarea 1: DOM

## Introducción
En esta tarea se trabajaron diversos ejercicios relacionados con la manipulación del DOM
(Document Object Model) utilizando JavaScript. Cada actividad implicó el uso de métodos y 
propiedades del DOM para acceder, modificar y gestionar los nodos en páginas HTML.

A continuación, se describe el desarrollo de cada actividad, el código utilizado y los resultados obtenidos.

---

## Actividad 1: Manipulación de Párrafos
### Descripción
Se creó una página HTML con un párrafo inicial y botones que permiten realizar las siguientes acciones:
1. Añadir un párrafo al final.
2. Insertar un párrafo después del primero.
3. Reemplazar el segundo párrafo.
4. Borrar el segundo párrafo.
5. Clonar el contenido completo del `div`.

### Código
```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Actividad 1 - Manipulación de Párrafos</title>
    <script>
        function anadirParrafo() { /* Código omitido por brevedad */ }
        function insertarParrafo() { /* Código omitido por brevedad */ }
        function reemplazarParrafo() { /* Código omitido por brevedad */ }
        function borrarParrafo() { /* Código omitido por brevedad */ }
        function clonarDiv() { /* Código omitido por brevedad */ }
    </script>
</head>
<body>
    <!-- Botones y estructura inicial omitidos -->
</body>
</html>
```

### Resultado
La página permite realizar todas las operaciones sobre los párrafos, modificando el contenido dinámicamente según la acción del usuario.

---

## Actividad 2: Manipulación de Listas
### Descripción
Se creó una página con una lista desordenada y botones para realizar las siguientes operaciones:
1. Añadir un elemento al final de la lista.
2. Insertar un elemento en la segunda posición.
3. Reemplazar el segundo elemento.
4. Borrar el último elemento.
5. Clonar la lista completa.
6. Crear sublistas dentro del primer elemento utilizando funciones DOM y `innerHTML`.

### Código
```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Actividad 2 - Manipulación de Listas</title>
    <script>
        function anadirElemento() { /* Código omitido por brevedad */ }
        function insertarElemento() { /* Código omitido por brevedad */ }
        function reemplazarElemento() { /* Código omitido por brevedad */ }
        function borrarElemento() { /* Código omitido por brevedad */ }
        function clonarLista() { /* Código omitido por brevedad */ }
        function crearSublistaDOM() { /* Código omitido por brevedad */ }
        function crearSublistaInnerHTML() { /* Código omitido por brevedad */ }
    </script>
</head>
<body>
    <!-- Botones y estructura inicial omitidos -->
</body>
</html>
```

### Resultado
La página permite realizar todas las manipulaciones de la lista y la creación de sublistas utilizando DOM o `innerHTML`, según se especifica en la tarea.

---

## Actividad 3: Cambio de Color
### Descripción
Se creó una página con un `div` que cambia de color según el botón presionado:
1. Azul.
2. Verde.
3. Blanco (restaurar color inicial).

### Código
```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Actividad 3 - Cambio de Color</title>
    <script>
        function cambiarColor(color) { /* Código omitido por brevedad */ }
    </script>
</head>
<body>
    <!-- Botones y estructura inicial omitidos -->
</body>
</html>
```

### Resultado
El `div` cambia dinámicamente de color al presionar los botones, cumpliendo con los requisitos de la tarea.

---

## Actividad 4: Información de Enlaces
### Descripción
Se creó una página con párrafos que contienen enlaces a sitios web deportivos. Los botones permiten:
1. Contar el número total de enlaces.
2. Mostrar todas las referencias de los enlaces.
3. Mostrar las referencias de los enlaces agrupadas por párrafo.

### Código
```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Actividad 4 - Información de Enlaces</title>
    <script>
        function contarEnlaces() { /* Código omitido por brevedad */ }
        function mostrarReferencias() { /* Código omitido por brevedad */ }
        function mostrarReferenciasPorParrafo() { /* Código omitido por brevedad */ }
    </script>
</head>
<body>
    <!-- Botones y estructura inicial omitidos -->
</body>
</html>
```

### Resultado
La página cuenta correctamente los enlaces y muestra las referencias según la configuración seleccionada.

---

## Conclusión
Se implementaron las cuatro actividades cumpliendo con los requisitos y restricciones indicados en el enunciado. El uso de funciones DOM permitió realizar las manipulaciones dinámicas de contenido de manera eficiente y flexible.

