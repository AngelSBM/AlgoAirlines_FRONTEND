import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://localhost:7246/'
});


export default axiosInstance;