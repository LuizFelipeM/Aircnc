import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.68.106:8080'
})

export default api;