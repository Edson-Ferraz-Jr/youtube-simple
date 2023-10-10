import axios from 'axios';

const api = axios.create({
    baseURL: 'https://youtube-simple-api.onrender.com',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
    }
});

export default api;
