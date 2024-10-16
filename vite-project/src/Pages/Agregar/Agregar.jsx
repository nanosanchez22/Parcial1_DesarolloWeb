import React from "react";
import './Agregar.css';
import { Link } from "react-router-dom";
import { addReceta } from "../../api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Agregar() {
    const [nuevaReceta, setNuevaReceta] = useState({
        name: '',
        description: '',
        type: '',
        image: '',
        preparation: ''
    });

    const handleChange = (e) => {
        setNuevaReceta({ ...nuevaReceta, [e.target.name]: e.target.value });
    }

    const navigate = useNavigate();

    const handleAddReceta = async () => {
        await addReceta(nuevaReceta);
        setNuevaReceta({ name: '', description: '', type: '', image: '', preparation: '' });
        navigate('/');
    }

    return (
        <div id="agregar_contenedor">
            <h1>Agregar Receta</h1>
            <div>
                <label>Nombre:</label>
                <input type="text" name="name" value={nuevaReceta.name} onChange={handleChange} />
            </div>
            <div>
                <label>Descripción:</label>
                <input type="text" name="description" value={nuevaReceta.description} onChange={handleChange} />
            </div>
            <div>
                <label>Tipo:</label>
                <input type="text" name="type" value={nuevaReceta.type} onChange={handleChange} />
            </div>
            <div>
                <label>Imagen:</label>
                <input type="text" name="image" value={nuevaReceta.image} onChange={handleChange} />
            </div>
            <div>
                <label>Preparación:</label>
                <input type="text" name="preparation" value={nuevaReceta.preparation} onChange={handleChange} />
            </div>
            <button onClick={handleAddReceta}>Agregar Receta</button>
            <Link to="/">
                <button>Cancelar</button>
            </Link>
        </div>
    );
}

export default Agregar;