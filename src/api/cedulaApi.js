import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://api.adamix.net/apec/cedula/'
});


const obtenerDatosCliente = async (cedula) => {
   const response = await axiosInstance.get(`${cedula}`);
   return response.data;
}


export default obtenerDatosCliente;