import axios from 'axios';

const apiURL = import.meta.env.VITE_API_URL;


//Requisições gets do backend
export const fetchProducts = async () => {
  console.log('Buscando produtos com Axios...');
  console.log(apiURL);
  try {
    const productsURL = `${apiURL}/produtos`;
    const response = await axios.get(productsURL);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar produtos:'.error);
    throw error;
  }
};


export const fetchCategories = async () => {
  console.log('Buscando categorias com Axios...');
  try {
    const productsURL = `${apiURL}/categorias`
    const response = await axios.get(productsURL);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
    throw error;
  }
};


//Requisições posts do backend
export const registerUser = async (userName, userEmail, userPassword, userPasswordConfirmation) => {
  console.log("Registrando usuarios com Axios...");
  try {
    const registerURL = `${apiURL}/register`;
    console.log(registerURL);
    const response = await axios.post(registerURL, {
      name: userName,
      email: userEmail,
      password: userPassword,
      password_confirmation: userPasswordConfirmation
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao cadastrar usuário\n"+ error.message);
    throw error;
  }
}


export const loginUser = async (userEmail, userPassword) => {
  console.log('Buscando categorias com Axios...');
  try {
    const loginURL = `${apiURL}/login`
    const response = await axios.post(loginURL, {
      email: userEmail,
      password: userPassword
    });

    const { user, token } = response.data;

    console.log(user);

    localStorage.setItem('authToken', token);

    return { user, token };
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    throw error;
  }
};

