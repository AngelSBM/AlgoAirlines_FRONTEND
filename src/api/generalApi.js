import axios from './axiosInstance';

export const getAirports = async () => {
    const response = await axios.get('Aeropuerto');
    return response.data;
}   


export const searchFlights = async (filters) => {
    const response = await axios. post('Vuelo/Filtro', filters);
    return response.data;
}   