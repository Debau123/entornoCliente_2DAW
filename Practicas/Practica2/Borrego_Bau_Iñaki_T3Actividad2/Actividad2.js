function calcularPresupuesto() {
    try {
       
        const procesador = document.querySelector('input[name="procesador"]:checked').value;
        const caja = document.querySelector('input[name="caja"]:checked').value;
        const refrigeracion = document.querySelector('input[name="refrigeracion"]:checked').value;
        const monitor = document.querySelector('input[name="monitor"]:checked').value;
        const grafica = document.querySelector('input[name="grafica"]:checked').value;

      
        const total = Number(procesador) + Number(caja) + Number(refrigeracion) + Number(monitor) + Number(grafica);

    
        let tabla = `
            <table id="tabla">
                <tr>
                    <th>Procesador</th>
                    <th>Caja</th>
                    <th>Refrigeración</th>
                    <th>Monitor</th>
                    <th>Gráfica</th>
                    <th>Total</th>
                </tr>
                <tr>
                    <td>${procesador}€</td>
                    <td>${caja}€</td>
                    <td>${refrigeracion}€</td>
                    <td>${monitor}€</td>
                    <td>${grafica}€</td>
                    <td>${total}€</td>
                </tr>
            </table>
        `;

       
        document.getElementById('tablaPresupuesto').innerHTML = tabla;
    } catch (error) {
        alert("Por favor, selecciona todas las opciones.");
    }
}
