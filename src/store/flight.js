import * as api from '@/api/generalApi';

export default {
    namespaced: true,

    state: {
        selectedFilter:{
            placeFrom: null,
            placeTo: null,
            dateFrom: null,
            dateTo: null,
            passengers: 0,
            passengersInfo: []
        },
        selectedFlight:{
            departure: null,
            arrive: null
        },
        flights: []
    },

    getters: {
        selectedFilter: state => state.selectedFilter,
        selectedFlight: state => state.selectedFlight,
        flights: state => state.flights,
    },

    mutations: {
        selectAirport(state, airport){
            if(!state.selectedFilter.placeFrom){
                state.selectedFilter.placeFrom = airport;
            }else{
                state.selectedFilter.placeTo = airport;
            }

        },

        selectDateFrom(state, date){
            state.selectedFilter.dateFrom = date;
        },
        selectDateTo(state, date){
            state.selectedFilter.dateTo = date;
        },

        setPassengersNumber(state, quantity){
            if((state.selectedFilter.passengers + quantity) > 0){
              state.selectedFilter.passengers += quantity;
            }
        },     

        setPassengers(state, passengers){
            state.selectedFilter.passengersInfo = passengers;
        },
        
        setDepartureFlight(state, flight){
            state.selectedFlight.departure = flight;
        },

        setArrivalFlight(state, flight){
            state.selectedFlight.arrive = flight;
        },

        setFlight(state, flights){
            state.flights = flights;
        },

        deleteSelectedFlight(state){
            state.selectedFlight.departure = null
        }
    },

    actions: {
        async selectAirport({commit}, airport){
            commit('selectAirport', airport)
        },

        //TODO: TRAER VUELOS CON FILTROS SELECCIONADOS
        async searchFlights({commit}, filters){
            const response = await api.searchFlights(filters);
            commit('setFlight', response);
        },

        async selectDate({commit}, {date, dateType}){

            if(dateType === 'from'){
                commit('selectDateFrom', date);
            }

            if(dateType === 'to'){
                commit('selectDateTo', date);
            }
        },

        async changePassengersNumber({commit}, number){
            commit('setPassengersNumber', number)
        },

        async selectDepartureFlight({commit}, flight){
            commit('setDepartureFlight', flight)
        },

        async selectArrivalFlight({commit}, flight){
            commit('setArrivalFlight', flight)
        },

        async updatePassengersInfo({commit}, passengers){
            commit('setPassengers', passengers)
        },

        async deleteSelectedFlight({commit}){
            commit('deleteSelectedFlight')
        }

    },

}