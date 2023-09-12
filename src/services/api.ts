import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://digimonback.onrender.com'
})