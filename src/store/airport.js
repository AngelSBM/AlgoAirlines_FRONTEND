import * as api from '@/api/generalApi'

export default {
    namespaced: true,

    state:{
        airports: []
    },

    getters: {
        airports: state => state.airports
    },

    actions: {
        async obtenerAeropuertos({commit}){
            const airports = await api.getAirports();
            commit('setAirports', airports)
        }
    },

    mutations: {
        setAirports(state, airports){
            state.airports = airports;
        }
    }


}