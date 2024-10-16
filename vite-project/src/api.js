const BASE_URL = 'http://localhost:3000/dishes';


export const getRecetas = async () => {
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) {
      throw new Error('Error al obtener recetas');
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getRecetaById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`);
    if (!response.ok) {
      throw new Error('Error al obtener la receta');
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const addReceta = async (receta) => {
  try {
    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(receta)
    });
    if (!response.ok) {
      throw new Error('Error al agregar la receta');
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const deleteReceta = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE'
    });
    if (!response.ok) {
      throw new Error('Error al eliminar la receta');
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const updateReceta = async (id, receta) => {
    try {
      const response = await fetch(`${BASE_URL}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(receta)
      });
      if (!response.ok) {
        throw new Error('Error al actualizar la receta');
      }
      return await response.json();
    } catch (error) {
      console.error(error);
      return null;
    }
  };