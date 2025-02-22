import React, { useState } from "react";
import destinos from "../data/destinos";
import Destino from "./Destino";


const DestinosLista = () => {
    const [indice, setIndice] = useState(0);

   
    const anteriorDestino = () => {
        if (indice > 0) {
            setIndice(indice - 1);
        }
    };
    const siguienteDestino = () => {
        if (indice < destinos.length - 1) {            setIndice(indice + 1);
        }
    };

    return (
        <div className="destinos-lista">
            <h1>Donde nos vamos de final de curso¿?</h1>
            <Destino destino={destinos[indice]} />
            <div className="botones">
                <button onClick={anteriorDestino} disabled={indice === 0}>Anterior</button>
                <button onClick={siguienteDestino} disabled={indice === destinos.length - 1}>Siguiente</button>
            </div>
        </div>
    );
};

export default DestinosLista;
