import axios from 'axios';

const apiURL = import.meta.env.VITE_API_URL;

export const fetchProducts = async () => {
  console.log('Buscando produtos com Axios...');
  console.log(apiURL);
  try {
    const productsURL = `${apiURL}/produtos`;
    const response = await axios.get(productsURL);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar produtos:'. error);
    throw error;
  }
};


export const fetchCategories = async () => {
  console.log('Buscando categorias com Axios...');
  try {
    const productsURL =  `${apiURL}/categorias`
    const response = await axios.get(productsURL);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
    throw error;
  }
};

export const fetchLogin = async () => {
  console.log('Buscando categorias com Axios...');
  try {
    const productsURL =  `${api}/categorias`
    const response = await axios.post(productsURL);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
    throw error;
  }
};