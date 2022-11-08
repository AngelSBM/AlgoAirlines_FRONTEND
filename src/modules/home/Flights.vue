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
            <div class="">Salida</div>
        </div>
        <div class="type" v-if="selectedFlight.departure">
            <i class="fa-solid fa-plane-arrival"></i>
            <div class="">Llegada</div>
        </div>
        
        <button class="btn btn-primary" @click="backToDepartureFlight" v-if="selectedFlight.departure">
            <i class="fa-solid fa-arrow-left"></i> Volver
        </button>
    </div>

    <div class="flights">
        <div class="flight" v-for="(flight, index) in [1,1,1]" :key="index" @click="selectFlight(flight)">
            <div class="flight-info">
                <div class="info-place">
                    <div class="hour">
                        8:00 PM
                    </div>
                    <div class="place">
                        SDQ
                    </div>
                </div>


                <div class="icon">
                    <i class="fa-solid fa-plane"></i>
                    <div class="line"></div>
                </div>

                <div class="info-place">
                    <div class="hour">
                        11:00 PM
                    </div>
                    <div class="place">
                        JFK
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
        ...mapGetters('flight', ['selectedFilter', 'selectedFlight']),
    },
    methods: {
        selectFlight(flight){
            if(!this.selectedFlight.departure){
                this.$store.dispatch('flight/selectDepartureFlight', flight);
            }else{
                this.$store.dispatch('flight/selectArrivalFlight', flight);
            }

            if(this.selectedFlight.departure && this.selectedFlight.arrive){
                this.$router.push({name: 'pasajeros'})
            }
        },
        backToDepartureFlight(){
            this.$store.dispatch('flight/deleteSelectedFlight');
        },
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
                    background-color: blueviolet;
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
                background-color: rgb(121, 121, 121);
                margin-bottom: 20px;
                border-radius: 5px;
                display: grid;     
                grid-template-columns: 3fr 1fr;
                cursor: pointer;
                .flight-info{
                    background-color: rgb(139, 75, 52);
                    height: 100%;
                    display: grid;
                    grid-template-columns: 3fr 1fr 3fr;
                    .info-place{
                        background-color: forestgreen;
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
                    i{
                        color: #0c1d2d;
                    }
                
                }
                .flight-price{
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        flex-direction: column;
                        height: 100%;
                        .price{
                            font-size: 25px;
                        }
                        .description{
                            font-weight: lighter;
                            font-size: 14px;
                        }
                }
            }
        }
    }
</style>