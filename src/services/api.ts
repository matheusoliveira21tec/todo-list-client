import axios from 'axios';

const api = axios.create({
    baseURL :"https://localhost:7148/api"
});
export default api;
