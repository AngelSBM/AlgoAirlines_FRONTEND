import axios from './axiosInstance';

export const getAirports = async () => {
    const response = await axios.get('Aeropuerto');
    return response.data;
}   