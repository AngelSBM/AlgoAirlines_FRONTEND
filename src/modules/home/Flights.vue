<template>
  <div class="flights-container">
    <div class="selected-filters" v-if="selectedFilter.placeFrom">
        <div class="container filters">
            <div class="selected-places">                
                {{ selectedFilter.placeFrom.nombre }} - {{ selectedFilter.placeTo.nombre }}                
            </div>
            <div class="selected-dates">
                {{ selectedFilter.dateFrom }} - {{ selectedFilter.dateTo }}
            </div>
            <div class="selected-passengers">
                {{ selectedFilter.passengers }} pasajeros
            </div>
        </div>
    </div>

    <div class="flight-type container">
        
        <div class="type" v-if="!selectedFlight.departure">
            <i class="fa-solid fa-plane-departure"></i>
            <div class="">Ida</div>
        </div>
        <div class="type" v-if="selectedFlight.departure">
            <i class="fa-solid fa-plane-departure"></i>
            <div class="">Vuelta</div>
        </div>
        
        <button class="btn btn-primary" @click="backToDepartureFlight" v-if="selectedFlight.departure">
            <i class="fa-solid fa-arrow-left"></i> Volver
        </button>
    </div>

    <div class="flights">
        <div class="flight" v-for="(flight, index) in filteredFlights" :key="index" @click="selectFlight(flight)">
            <span class="flight-number">No. Vuelo: {{ flight.publicId }}</span>
            <div class="flight-info">
                <div class="info-place">
                    <div class="hour">
                        {{ pipeDate(flight.fechaSalida) }}
                    </div>
                    <div class="place">
                        {{ flight.lugarSalida.nombre }}
                    </div>
                </div>


                <div class="icon">
                    <i class="fa-solid fa-plane"></i>
                    <div class="line"></div>
                </div>

                <div class="info-place">
                    <div class="hour">
                        {{ pipeDate(flight.fechaLlegada) }}
                    </div>
                    <div class="place">
                        {{ flight.lugarLlegada.nombre }}
                    </div>
                </div>
                
            </div>
            <div class="flight-price">
                <div class="price">
                    $500
                </div>
                <div class="description">
                    Ida y vuelta
                </div>
            </div>
        </div>
    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
        computed: {
        ...mapGetters('flight', ['selectedFilter', 'selectedFlight', 'flights']),
        filteredFlights(){


            if(!this.selectedFlight.departure){
                return this.flights.filter(flight => flight.lugarSalida.id === this.selectedFilter.placeFrom.id)
            }else{
                return this.flights.filter(flight => flight.lugarSalida.id === this.selectedFilter.placeTo.id)
            }

        }
    },
    methods: {
        selectFlight(flight){
            if(!this.selectedFlight.departure){
                this.$store.dispatch('flight/selectDepartureFlight', {...flight, tipoVuelo: 'ida'});
            }else{
                this.$store.dispatch('flight/selectArrivalFlight', {...flight, tipoVuelo: 'vuelta'});
            }

            if(this.selectedFlight.departure && this.selectedFlight.arrive){
                this.$router.push({name: 'pasajeros'})
            }
        },
        backToDepartureFlight(){
            this.$store.dispatch('flight/deleteSelectedFlight');
        },
        pipeDate(date = ''){

            
            const time = date.split('T')[1];
            const time_part_array = time.split(":");
            let ampm = 'AM';
            if (time_part_array[0] >= 12) {
                ampm = 'PM';
            }
            if (time_part_array[0] > 12) {
                time_part_array[0] = time_part_array[0] - 12;
            }
            const formatted_time = time_part_array[0] + ':' + time_part_array[1] + ':' + time_part_array[2] + ' ' + ampm;
            return formatted_time;
                

        }
    },
    async created(){
        const filters = {
            desdeId: this.selectedFilter.placeFrom.id,
            hastaId: this.selectedFilter.placeTo.id,
            fechaDesde: this.selectedFilter.dateFrom,            
            fechaHasta: this.selectedFilter.dateTo
        };

        // console.log(filters);
        await this.$store.dispatch('flight/searchFlights', filters)
    }   
}
</script>

<style  lang="scss" scoped>
    .flights-container{
        padding-bottom: 50px;
        .selected-filters{
            height: 50px;
            background-color: #0c1d2d;
            margin-bottom: 40px;
            font-weight: normal;
            font-size: 17px;
            .filters{
                display: flex;
                justify-content: space-between;
                height: 100%;
                div{
                    // background-color: blueviolet;
                    color: white;
                    width: 30%;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
            }
        }
        .flight-type{
            padding: 10px 0;
            display: flex;
            justify-content: space-between;
            font-size: 22px;
            i{
                margin-right: 15px;
            }
            .type{
                display: flex;
                align-items: center;
            }
        }
        .flights{
            width: 90%;
            max-width: 1000px;
            margin: auto;
                   
            .flight{
                height: 200px;
                // background-color: rgb(121, 121, 121);
                margin-bottom: 20px;
                border-radius: 5px;
                display: grid;     
                grid-template-columns: 3fr 1fr;
                cursor: pointer;
                position: relative;
                overflow: hidden;
                border: 1px solid rgb(118, 118, 118);
                .flight-number{
                    position: absolute;
                    padding: 3px;
                    top: -30px;
                    left: 32%;
                    background-color: #153c60;
                    color: white;
                    transition: .3s ease all;
                    z-index: 1000;
                }
                .flight-info{
                    // background-color: rgb(139, 75, 52);
                    height: 100%;
                    display: grid;
                    grid-template-columns: 3fr 1fr 3fr;
                    .info-place{
                        // background-color: forestgreen;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        flex-direction: column;
                        .hour{
                            font-weight: bold;
                            font-size: 30px;
                        }
                        .place{
                            font-weight: lighter;
                        }
                    }    
                }
                .icon{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 40px;
                    position: relative;
                    background-color: rgb(10, 11, 34);                    
                    i{
                        color: white;
                    }
                
                }
                .flight-price{
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        flex-direction: column;
                        height: 100%;
                        border-left: 1px solid #000;
                        .price{
                            font-size: 25px;
                        }
                        .description{
                            font-weight: lighter;
                            font-size: 14px;
                        }
                }
                &:hover{
                    .flight-number{
                        transform: translateY(30px);
                    }
                }
            }
        }
    }
</style>