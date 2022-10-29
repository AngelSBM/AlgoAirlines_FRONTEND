export default {
    namespaced: true,

    state: {
        selectedFilter:{
            placeFrom: null,
            placeTo: null,
            dateFrom: null,
            dateTo: null,
            passengers: 0
        },
        selectedFlight:{
            departure: null,
            arrive: null
        }
    },

    getters: {
        selectedFilter: state => state.selectedFilter,
        selectedFlight: state => state.selectedFlight
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
        
        setDepartureFlight(state, flight){
            state.selectedFlight.departure = flight;
        },

        setArrivalFlight(state, flight){
            state.selectedFlight.arrive = flight;
        },

        deleteSelectedFlight(state){
            state.selectedFlight.departure = null
        }
    },

    actions: {
        async selectAirport({commit}, airport){
            commit('selectAirport', airport)
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

        async deleteSelectedFlight({commit}){
            commit('deleteSelectedFlight')
        }

    },

}