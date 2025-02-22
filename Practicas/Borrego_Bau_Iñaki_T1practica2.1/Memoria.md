# Memoria de Ejercicios de Programación Avanzada en JavaScript

## Ejercicio 1: Cálculo de IVA y Precio Total

### Enunciado
Introducir el precio de varios artículos, mínimo diez, solicitando por el input un total de al menos 5 artículos. Se debe detener la entrada de datos con el valor `0` o una cadena vacía. Luego, calcular el IVA (21%) y el precio total con el importe incluido, redondeando a dos decimales. La implementación debe hacerse usando una función.

### Solución
Para este ejercicio, implementamos una función `calcularTotal` que pide precios al usuario usando un bucle `do...while`. Los precios son almacenados en un array y, si el usuario ingresa al menos cinco precios, se calcula el IVA y el precio total. Estos se muestran al usuario mediante un `alert`.

---

## Ejercicio 2: Determinar Estación del Año

### Enunciado
Introducir un mes y devolver la estación del año a la que pertenece. Los meses se agrupan de la siguiente manera:
- Diciembre, enero, febrero: Invierno
- Marzo, abril, mayo: Primavera
- Junio, julio, agosto: Verano
- Septiembre, octubre, noviembre: Otoño

Utilizar la estructura `switch` para resolver este ejercicio.

### Solución
Creamos una función `determinarEstacion` que solicita un mes al usuario y, utilizando un `switch`, determina la estación correspondiente. El resultado se muestra mediante un `alert`.

---

## Ejercicio 3: Cálculo de Sumatorio y Productorio

### Enunciado
Calcular el sumatorio y productorio de dos números `a` y `b`. Primero se deben introducir ambos valores. Si `a > b`, mostrar un mensaje de error. Si `a ≤ b`, calcular el sumatorio desde `a` hasta `b`. Luego calcular el productorio desde `a` hasta `b`. Si el productorio parcial excede el valor 100, se debe detener el cálculo y mostrar el valor parcial junto con un mensaje.

### Solución
Implementamos una función `calcularSumatorioProductorio` que solicita los valores de `a` y `b` al usuario. Si `a > b`, se muestra un mensaje de error. De lo contrario, se calcula el sumatorio y productorio, mostrando el resultado mediante `alert`. Si el productorio excede 100, se detiene y se muestra el valor parcial.

---

## Ejercicio 4: Redimensionar Pantalla

### Enunciado
Crear un programa que permita redimensionar la pantalla a 500x500 si el navegador utilizado es Google Chrome. Si es otro navegador, mostrar el mensaje "Operación no permitida con este navegador".

### Solución
Creamos una función `redimensionarPantalla` que utiliza el objeto `navigator` para verificar si el navegador es Chrome. Si lo es, se redimensiona la pantalla utilizando `window.resizeTo(500, 500)`. En caso contrario, se muestra un mensaje de error.

---

## Ejercicio 5: Calculadora en JavaScript

### Enunciado
Crear un objeto `calculator` con los siguientes métodos:
- `read()`: Solicita dos valores y los almacena.
- `sum()`, `mul()`, `rest()`, `divi()`, `modu()`: Realizan las operaciones correspondientes con los valores almacenados.

### Solución
Definimos un objeto `calculator` que tiene los métodos solicitados. La función `ejecutarCalculadora` permite que el usuario ingrese los valores y elija la operación deseada. Dependiendo de la operación ingresada, se llama al método correspondiente y se muestra el resultado.

---

## Ejercicio 6: Suma de Números Ingresados

### Enunciado
Escribir una función `sumInput()` que solicite al usuario valores mediante `prompt` y los almacene en un array. Se debe dejar de solicitar valores cuando se ingrese un valor no numérico, una cadena vacía o se presione "Escape". Luego, calcular y retornar la suma de los elementos del array.

### Solución
Creamos una función `sumInput` que utiliza un bucle `do...while` para solicitar números al usuario y almacenarlos en un array. Luego, se calcula la suma utilizando `reduce()` y se muestra el resultado mediante un `alert`.

---

## Ejercicio 7: Calculadora Extensible

### Enunciado
Crear una función `Calculator` que cree objetos calculadores extensibles. Implementar un método para realizar operaciones del tipo "número operador número" y un método `addMethod` para añadir nuevas operaciones.

### Solución
Definimos una clase `Calculator` con un constructor que inicializa métodos básicos (`+`, `-`). Implementamos el método `calculate` para realizar operaciones y el método `addMethod` para añadir nuevas. Luego, se mostraron ejemplos de uso (e.g., "3 + 7", "2 ** 3") y se permite al usuario realizar una operación mediante `prompt`.

---

## Ejercicio 8: Barajar un Arreglo

### Enunciado
Introducir números por pantalla que se almacenan en un arreglo. Se introducirán números hasta que se ingrese el número `0`, que detendrá la solicitud. Luego, se debe barajar el arreglo y mostrar el resultado, garantizando que todos los posibles reordenamientos tengan la misma probabilidad.

### Solución
Creamos una función `shuffle` que implementa el algoritmo de Fisher-Yates para barajar los elementos de un array de forma aleatoria. La función `ejecutarShuffle` solicita los números al usuario, los almacena en un array y luego utiliza `shuffle` para reordenar los elementos. Finalmente, muestra el resultado al usuario mediante un `alert`.

