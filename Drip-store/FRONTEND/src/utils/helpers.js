// utils/helpers.js

/**
 * Função auxiliar para tratar erros de promessas.
 * @param {Promise} promise - A promessa a ser tratada.
 * @returns {Promise} - Uma promessa que resolve com um array [erro, resultado].
 */
export async function handlePromise(promise) {
    try {
      const result = await promise;
      return [null, result];
    } catch (error) {
      return [error, null];
    }
  }