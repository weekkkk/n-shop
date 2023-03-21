import axios from 'axios';

/**
 * * Ссылка на api
 */
export const API_URL = 'http://localhost:4000/api/basket';

/**
 * * Объект api
 */
const $basket = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

export default $basket;
