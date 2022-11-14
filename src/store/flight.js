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
        flights: [],
        reservationsGo: [],
        reservationsBack: [],
        isAdmin: false
    },

    getters: {
        selectedFilter: state => state.selectedFilter,
        selectedFlight: state => state.selectedFlight,
        flights: state => state.flights,
        reservationsGo: state => state.reservationsGo,
        reservationsBack: state => state.reservationsBack,
        isdmin: state => state.isAdmin
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

        setReservationsGo(state, reservationsGo){
            state.reservationsGo = reservationsGo;
        },

        setReservationsBack(state, reservationsBack){
            state.reservationsBack = reservationsBack;
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
        },
        cleanFilters(state){
            
            state.selectedFilter.placeFrom = null
            state.selectedFilter.placeTo = null
            state.selectedFilter.dateFrom = null
            state.selectedFilter.dateTo = null
            state.selectedFilter.passengers = 0
            state.selectedFilter.passengersInfo = []
            state.selectedFlight.departure = null
            state.selectedFlight.arrive = null
            state.flights = [],
            state.reservationsGo = [],
            state.reservationsBack = []
        },
        setPermission(state, permisison){
            state.isAdmin = permisison;
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

        async getReservation({commit}, {flightId, flightType}){

            const response = await api.getReservations(flightId);

            if(flightType === 'go'){
                commit('setReservationsGo', response)
            }

            if(flightType === 'back'){
                commit('setReservationsBack', response)
            }

        },

        async createReservation({commit}, agenda){
            await api.postReservation(agenda);
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
        },

        async purgeFilters ({commit}){
            commit('cleanFilters')
        },
        async login({commit}, credentials){
            const response  = api.login(credentials);
            commit('setPermission', response)
        }

    },

}