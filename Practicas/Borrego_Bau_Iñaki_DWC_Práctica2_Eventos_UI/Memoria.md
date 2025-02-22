
# Memoria - Tarea 2: Eventos UI

## Introducción
En esta tarea se desarrollaron ejercicios que exploran el manejo de eventos en JavaScript, 
como `onclick`, `mouseover`, `mousedown`, entre otros, utilizando distintos métodos para 
gestionar interacciones con el usuario y aplicar efectos dinámicos en páginas HTML.

Se presentaron cuatro actividades principales, cada una con su respectivo enfoque en el uso 
de eventos y DOM.

---

## Actividad 1: Eventos asociados a botones
### Descripción
En esta actividad se implementaron botones con las siguientes funcionalidades:
1. **Botón Mágico**: Un botón que desaparece al ser pulsado.
2. **Botón Pulsador**: Muestra un mensaje al pulsarlo.
3. **Botones Deslizantes**:
   - **Películas**: Despliega o colapsa un submenú con tres películas favoritas.
   - **Series**: Despliega o colapsa un submenú con tres series favoritas.

### Código
```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <script>
        function desaparecerBoton(event) { /* Código omitido por brevedad */ }
        function mostrarMensaje() { /* Código omitido por brevedad */ }
        function toggleMenu(menuId) { /* Código omitido por brevedad */ }
    </script>
</head>
<body>
    <!-- Botones y estructura inicial omitidos -->
</body>
</html>
```

### Resultado
La interacción con los botones funciona correctamente, mostrando los efectos esperados al pulsarlos.

---

## Actividad 2: Gestionar el comportamiento de un tooltip
### Descripción
Se creó un sistema de tooltips que:
1. Muestra un mensaje al colocar el cursor sobre un elemento con el atributo `data-tooltip`.
2. El texto del tooltip proviene del valor del atributo `data-tooltip`.
3. Se asegura que solo un tooltip esté visible al mismo tiempo.

### Código
```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <style>
        .tooltip { /* Código omitido por brevedad */ }
    </style>
</head>
<body>
    <div data-tooltip="Aquí está el interior de la casa" id="house">
        <!-- Estructura omitida -->
    </div>
    <script>
        document.addEventListener('mouseover', function (event) { /* Código omitido */ });
        document.addEventListener('mouseout', function (event) { /* Código omitido */ });
    </script>
</body>
</html>
```

### Resultado
El tooltip se despliega al colocar el cursor y desaparece al quitarlo, cumpliendo los requisitos.

---

## Actividad 3: Control Deslizante
### Descripción
Se implementó un control deslizante funcional con las siguientes características:
1. Permite mover la "thumb" dentro del área del slider.
2. El movimiento está limitado a los bordes del slider, incluso si se arrastra rápidamente.

### Código
```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <style>
        .slider { /* Código omitido por brevedad */ }
    </style>
</head>
<body>
    <div id="slider" class="slider">
        <div class="thumb" id="thumb"></div>
    </div>
    <script>
        const thumb = document.getElementById('thumb');
        thumb.onmousedown = function (event) { /* Código omitido */ };
    </script>
</body>
</html>
```

### Resultado
El deslizante responde correctamente al movimiento del ratón y se detiene en los bordes del slider.

---

## Actividad 4: Arrastrar objetos por el campo
### Descripción
Se implementaron objetos arrastrables con las siguientes características:
1. Las imágenes (`coca.jpg` y `pepsi.jpg`) pueden ser arrastradas dentro del contenedor.
2. El movimiento está restringido a los bordes del contenedor.
3. Se utilizaron eventos de ratón (`mousedown`, `mousemove`, `mouseup`) para gestionar el arrastre.

### Código
```html
<!DOCTYPE HTML>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <style>
        #field { /* Código omitido por brevedad */ }
        .draggable { /* Código omitido por brevedad */ }
    </style>
</head>
<body>
    <div id="field">
        <div class="draggable" id="coca"></div>
        <div class="draggable" id="pepsi"></div>
    </div>
    <script>
        let currentItem = null;
        document.addEventListener('mousedown', (event) => { /* Código omitido */ });
    </script>
</body>
</html>
```

### Resultado
Las imágenes se arrastran correctamente y se mantienen dentro de los límites del contenedor.

---

## Conclusión
Las actividades permitieron explorar de manera efectiva el manejo de eventos en JavaScript y las posibilidades que ofrecen para enriquecer la experiencia del usuario en la web. Los requisitos especificados en cada tarea se cumplieron satisfactoriamente.
