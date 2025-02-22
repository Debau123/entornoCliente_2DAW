import React, { useState } from "react";
import destinos from "../data/destinos"; 
const FormularioVotacion = () => {

    const [formulario, setFormulario] = useState({
        nombre: "",
        apellido1: "",
        apellido2: "",
        dni: "",
        telefono: "",
        preferencia1: "",
        preferencia2: "",
        preferencia3: ""
    });

  
    const manejarCambio = (evento) => {
        const { name, value } = evento.target;

        if (name === "telefono") {
            const soloNumeros = value.replace(/\D/g, ""); 
            setFormulario({ ...formulario, [name]: soloNumeros });
        } else {
            setFormulario({ ...formulario, [name]: value });
        }
    };

   
    const manejarEnvio = (evento) => {
        evento.preventDefault(); 
        
       
        const { nombre, apellido1, dni, telefono, preferencia1, preferencia2, preferencia3 } = formulario;

        
        if (!nombre || !apellido1 || !dni || !telefono || !preferencia1 || !preferencia2 || !preferencia3) {
            alert("Por favor, completa todos los campos antes de enviar.");
            return;
        }

        
        alert("Voto registrado con éxito. ¡Gracias por participar!");
    };

  
    const limpiarFormulario = () => {
        setFormulario({
            nombre: "",
            apellido1: "",
            apellido2: "",
            dni: "",
            telefono: "",
            preferencia1: "",
            preferencia2: "",
            preferencia3: ""
        });
    };

    return (
        <form onSubmit={manejarEnvio} className="formulario-votacion">
            <h2>Formulario de Votación</h2>

          
            <input 
                type="text" 
                name="nombre" 
                placeholder="Nombre" 
                value={formulario.nombre} 
                onChange={manejarCambio} 
                required 
            />

         
            <input 
                type="text" 
                name="apellido1" 
                placeholder="Primer Apellido" 
                value={formulario.apellido1} 
                onChange={manejarCambio} 
                required 
            />

            
            <input 
                type="text" 
                name="apellido2" 
                placeholder="Segundo Apellido" 
                value={formulario.apellido2} 
                onChange={manejarCambio} 
            />

          
            <input 
                type="text" 
                name="dni" 
                placeholder="DNI" 
                value={formulario.dni} 
                onChange={manejarCambio} 
                required 
            />

        
            <input 
                type="text" 
                name="telefono" 
                placeholder="Teléfono" 
                value={formulario.telefono} 
                onChange={manejarCambio} 
                pattern="\d+" 
                required 
            />

            <h3>Selecciona tus preferencias</h3>

       
            <select 
                name="preferencia1" 
                value={formulario.preferencia1} 
                onChange={manejarCambio} 
                required
            >
                <option value="">Selecciona un destino</option>
                {destinos.map(destino => (
                    <option key={destino.id} value={destino.nombre}>
                        {destino.nombre}
                    </option>
                ))}
            </select>

            
            <select 
                name="preferencia2" 
                value={formulario.preferencia2} 
                onChange={manejarCambio} 
                required 
                disabled={!formulario.preferencia1} 
            >
                <option value="">Selecciona un destino</option>
                {destinos
                    .filter(destino => destino.nombre !== formulario.preferencia1) 
                    .map(destino => (
                        <option key={destino.id} value={destino.nombre}>
                            {destino.nombre}
                        </option>
                    ))}
            </select>

          
            <select 
                name="preferencia3" 
                value={formulario.preferencia3} 
                onChange={manejarCambio} 
                required 
                disabled={!formulario.preferencia2} 
            >
                <option value="">Selecciona un destino</option>
                {destinos
                    .filter(destino => destino.nombre !== formulario.preferencia1 && destino.nombre !== formulario.preferencia2) 
                    .map(destino => (
                        <option key={destino.id} value={destino.nombre}>
                            {destino.nombre}
                        </option>
                    ))}
            </select>

            <button type="submit">Enviar</button>
            <button type="button" onClick={limpiarFormulario}>Limpiar</button>
        </form>
    );
};

export default FormularioVotacion;
