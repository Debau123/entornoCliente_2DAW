import React from "react";


const Destino = ({ destino }) => {
    return (
        <div className="destino-container">
            <h2>{destino.nombre}</h2>
            <img src={destino.foto} alt={destino.nombre} className="destino-imagen" />
            <p>{destino.descripcion}</p>
            <p><strong>Precio:</strong> ${destino.precio}</p>
        </div>
    );
};

export default Destino;
