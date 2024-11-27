import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000',
});

export const fetchData = async () => {
  try {
    const response = await api.get('/shoes');
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error('Erro na resposta do servidor', error.response.status, error.response.data);
    } else if (error.request) {
      console.error('Nenhuma resposta recebida', error.request);
    } else {
      console.error('Erro ao configurar a requisição', error.message);
    }
    throw error;
  }
};