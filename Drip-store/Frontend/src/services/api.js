// src/services/api.js
export async function fetchData() {
    try {
      const response = await fetch('https://api-store-do1w.onrender.com/shoes');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
      throw error; // Re-throw the error if you want to handle it further up the call stack
    }
  }