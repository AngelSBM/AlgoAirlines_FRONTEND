import axios from './axiosInstance';

export const getAirports = async () => {
    const response = await axios.get('Aeropuerto');
    return response.data;
}   


export const searchFlights = async (filters) => {
    const response = await axios.post('Vuelo/Filtro', filters);
    return response.data;
}   

export const getReservations = async (vueloId) => {
    const response = await axios.get(`Vuelo/Reservaciones?vueloId=${vueloId}`);
    return response.data;
}


export const postReservation = async (agenda) => {
    const response = await axios.post(`Vuelo/Agendar`, agenda);
    return response.data;
}


export const login = async (credenciales) => {
    try {
        const response = await axios.post(`Oficial/Login`, credenciales);
        return response.data        
    } catch (error) {
        throw error
    }
}