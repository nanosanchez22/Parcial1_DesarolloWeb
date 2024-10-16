import React from "react";
import './TarjetaReceta.css';
import { Link } from "react-router-dom";



function TarjetaReceta({ id, image, name, type, onDelete }) {
    return (
        <div id="tarjeta_contenedor">
            <div>
                <h3 id="img_contenedor">{image}</h3>
                <h3>Receta: {name}</h3>
                <h3>Comida: {type}</h3>
            </div>

            <div>
                <Link to={`/detalles/${id}`}>
                    <button>Detalles</button>
                </Link>
                <button onClick={() => onDelete(id)}>Eliminar</button>
            </div>
        
        </div>
    );
}

export default TarjetaReceta;