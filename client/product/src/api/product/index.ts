import axios from 'axios';

/**
 * * Ссылка на api
 */
export const API_URL = 'http://localhost:4000/api/product';

/**
 * * Объект api
 */
const $product = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

export default $product;
