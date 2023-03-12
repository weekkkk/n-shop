import axios from 'axios';

/**
 * * Ссылка на api
 */
export const API_URL = 'http://localhost:4000/api/type';

/**
 * * Объект api
 */
const $type = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

export default $type;
