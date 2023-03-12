import axios from 'axios';

/**
 * * Ссылка на api
 */
export const API_URL = 'http://localhost:4000/api/brand';

/**
 * * Объект api
 */
const $brand = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

export default $brand;
