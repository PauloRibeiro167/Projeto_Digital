import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000',
});

export const login = async (userData) => {
  try {
    const response = await api.post('/login', userData);
    return response.data;
  } catch (error) {
    console.error('Erro ao fazer login', error);
    throw error;
  }
};

export const fetchData = async () => {
  try {
    const response = await api.get('/data');
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar dados', error);
    throw error;
  }
};