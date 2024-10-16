import React, { useEffect } from "react";
import './Home.css';
import TarjetaReceta from "../../Components/TarjetaReceta/TarjetaReceta";
import { useState } from "react";
import { getRecetas, addReceta, deleteReceta } from "../../api";
import { Link } from "react-router-dom";



function Home() {
  const [recetas, setRecetas] = useState([]);
  const [filter, setFilter] = useState('');

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  }

  const filteredRecetas = recetas.filter(receta => receta.type.toLowerCase().includes(filter.toLowerCase()));

  useEffect(() => {
    const fetchRecetas = async () => {
      const data = await getRecetas();
      setRecetas(data);
    };
    fetchRecetas();
  }, []);


  const handleDeleteReceta = async (id) => {
    await deleteReceta(id);
    const newRecetas = recetas.filter(receta => receta.id !== id);
    setRecetas(newRecetas);
  }


  if (!recetas.length) {
    return <div>Cargando recetas...</div>;
  }


  return (
    <div>
      <div>
        <h1>Recetas</h1>
        <input type="text" name='Filter' placeholder='Filtar por tipo de Comida' value={filter} onChange={handleFilterChange} />


        <Link to="/agregar">
          <button>Nueva Receta</button>
        </Link>
      </div>
      <div id="recetas_contenedor">
        {filteredRecetas.map(receta => (
          <TarjetaReceta key={receta.id} id={receta.id} image={receta.image} name={receta.name} type={receta.type} onDelete={handleDeleteReceta} />

        ))}

      </div>
    </div>
  );
}

export default Home;