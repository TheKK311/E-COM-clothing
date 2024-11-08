
import axios from 'axios';

// const DEPLOYED='https://pear-poised-hen.cyclic.app/' just example
const LOCALHOST='https://e-com-clothing-l0ce.onrender.com'



export const API_BASE_URL = LOCALHOST;

const api = axios.create({
  baseURL: API_BASE_URL,
});

const token = localStorage.getItem('jwt');

api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

api.defaults.headers.post['Content-Type'] = 'application/json';

export default api;
