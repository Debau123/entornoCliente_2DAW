import React from "react";
import DestinosLista from "./components/DestinosLista";
import FormularioVotacion from "./components/FormularioVotacion";


const App = () => {
    return (
        <div className="contenedor-principal">
            <DestinosLista />
            <FormularioVotacion />
        </div>
    );
};

export default App;
