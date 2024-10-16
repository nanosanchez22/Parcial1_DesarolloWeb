import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { getRecetaById } from "../../api";
import { useNavigate } from "react-router-dom";
import { updateReceta } from "../../api";

import './Detalles.css';

function Detalles() {

    const [receta, setReceta] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const { id } = useParams();
    const [editedReceta, setEditedReceta] = useState({
        name: '',
        description: '',
        type: '',
        image: '',
        preparation: ''
    });

    const navigate = useNavigate(); 


    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleChange = (e) => {
        setEditedReceta({ ...editedReceta, [e.target.name]: e.target.value });
    };

    const handleSaveClick = async () => {
        await updateReceta(id, editedReceta);
        setReceta(editedReceta);
        setIsEditing(false);
        navigate('/');
    };




    useEffect(() => {
        const fetchReceta = async () => {
            const data = await getRecetaById(id);
            setReceta(data);
            setEditedReceta(data);
        }
        fetchReceta();

    }, [id]);


    if (!receta) {
        return <div>Cargando receta...</div>;
    }





    return (
        <div>
            <div>
                <h1>Detalles</h1>
                <div id="btn_contenedor">

                <Link to="/">
                    <button>Atras</button>
                </Link>
                <button onClick={handleEditClick}>Editar</button>
                </div>
            </div>
        <div id="detalles_contenedor">
            {isEditing ? 
            
            (
                <div>
                    <div>
                        <label>Nombre:</label>
                        <input type="text" name="name" value={editedReceta.name} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Descripción:</label>
                        <input type="text" name="description" value={editedReceta.description} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Tipo:</label>
                        <input type="text" name="type" value={editedReceta.type} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Imagen:</label>
                        <input type="text" name="image" value={editedReceta.image} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Preparación:</label>
                        <input type="text" name="preparation" value={editedReceta.preparation} onChange={handleChange} />
                    </div>
                    <button onClick={handleSaveClick}>Guardar</button>
                </div>
            ) : (
                <div>

                    <p id="comida_img">{receta.image}</p>
                    <p>Receta: {receta.name}</p>
                    <p>Descripcion: {receta.description}</p>
                    <p>Preparacion: {receta.preparation}</p>
                    <p>Categoria: {receta.type}</p>
                </div>
        )}

        </div>
        </div>
    );
}

export default Detalles;