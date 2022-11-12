<template>
  
  <div class="main-page">
    <div class="main-header">
      <div class="filters">
        <div class="filter places-filter">
          <div class="place-filter" type="button" data-toggle="modal" data-target="#exampleModal">

            <div class="place-abreviation">
              {{ selectedFilter.placeFrom ? selectedFilter.placeFrom.nombre : 'Desde' }}
            </div>
            <div class="place-name">
              {{ selectedFilter.placeFrom ? selectedFilter.placeFrom.ciudad : 'De donde sale' }}
            </div>


          </div>

          <div class="double-arrow">
            <i class="fa-solid fa-arrows-left-right"></i>
          </div>

          <div class="place-filter" type="button" data-toggle="modal" data-target="#exampleModal">
            <div class="place-abreviation">
              {{ selectedFilter.placeTo ? selectedFilter.placeTo.nombre : 'Hasta' }}
            </div>
            <div class="place-name">
              {{ selectedFilter.placeTo ? selectedFilter.placeTo.ciudad : 'Hacia donde va' }}
            </div>
          </div>
        </div>
        <div class="filter date-filters">

            <div class="date-filter">
              <label for="from-date">Fecha desde</label>
              <input type="date" id="datepicker-from" name="from-date" @change="setSelectedDate('from')" v-model="dateFrom">
            </div>

            <div class="date-filter">
              <label for="to-date">Fecha hasta</label>
              <input type="date" id="datepicker-to" name="to-date" @change="setSelectedDate('to')" v-model="dateTo">
            </div>


        </div>
        <div class="filter passengers-filters">
          <div class="passengers-filter-title">
            Pasajeros
          </div>
          <div class="passenger-actions">
            <i class="fa-solid fa-plus" @click="changePassengerNumber(1)"></i>
            <i class="fa-solid fa-minus" @click="changePassengerNumber(-1)"></i>
          </div>
          <div class="passenger-number">
            <i class="fa-solid fa-users"></i>
            <div class="number">{{ selectedFilter.passengers }}</div>
          </div>

        </div>
        <div class="search-button" @click="goToFlights">        
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
    </div>


    <!-- MAIN CONTENT -->
    <main-page></main-page>

    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Escriba el aeropuerto</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close" id="modal-close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <input type="text" class="form-control mb-5" v-model="airportSearchValue">

              <!-- AIRPORTS -->
              <table class="table">
                <tbody>
                  <tr v-for="(airport, index) in filteredAirports" :key="index" style="cursor: pointer">
                    <td @click="selectAirport(airport)">{{ airport.nombre }} - {{ airport.ciudad }}</td> 
                  </tr>
                </tbody>
              </table>

          </div>
        </div>

      </div>

    </div>
        
  </div>

  

</template>

<script>
// import flatpickr from "flatpickr";
import moment from "moment";
import Flights from "./Flights.vue";
import { mapGetters } from 'vuex';
import MainPage from './MainPage.vue';
import Swal from 'sweetalert2';

export default {
  components: {
    Flights,
    mainPage: MainPage
  },  
  data(){
    return{
      dateFrom: null,
      dateTo: null,
      airportSearchValue: '',
      // airports: [
      //   {
      //     nomenclatura: 'SDQ',
      //     ciudad: 'Santo Domingo'
      //   },
      //   {
      //     nomenclatura: 'NW',
      //     ciudad: 'Newark'
      //   }
      // ]
    }
  },
  computed: {
    ...mapGetters('flight', ['selectedFilter']),
    ...mapGetters('airport', ['airports']),
    // selectedFilter(){
    //   this.$store.getters["flight/selectedFilter"];
    // },  
    filteredAirports(){
      if(this.airportSearchValue === ''){
        return this.airports;
      }
      return this.airports.filter(airport => airport.nombre.toLowerCase().includes(this.airportSearchValue.toLocaleLowerCase()) 
                            || airport.ciudad.toLowerCase().includes(this.airportSearchValue.toLocaleLowerCase()));
    }
  },
  mounted(){

    const minDate = moment().format().split("T")[0];
    document.getElementById('datepicker-from').setAttribute("min", minDate);
    document.getElementById('datepicker-to').setAttribute("min", minDate);

  },
  async created(){
    await this.$store.dispatch('airport/obtenerAeropuertos')
  },  
  methods: {
    selectAirport(airport){
      
      this.$store.dispatch("flight/selectAirport", airport);
      document.getElementById('modal-close').click();
      this.airportSearchValue = '';

    },
    setSelectedDate(dateType){

      if(dateType === 'from'){
        this.$store.dispatch("flight/selectDate", {date: this.transformDate(this.dateFrom), dateType });
      }

      
      if(dateType === 'to'){
        this.$store.dispatch("flight/selectDate", {date: this.transformDate(this.dateTo), dateType});
      }

    },
    transformDate(date = ''){
      const splittedDate = date.split('-');
      const newFormatDate = `${splittedDate[0]}-${splittedDate[1]}-${splittedDate[2]}`
      return newFormatDate;
    },
    changePassengerNumber(quantity){
      this.$store.dispatch('flight/changePassengersNumber', quantity);
    },
    goToFlights(){
      if(     !this.selectedFilter.placeFrom 
          || !this.selectedFilter.placeTo 
          || !this.selectedFilter.dateFrom 
          || !this.selectedFilter.dateTo 
          || this.selectedFilter.passengers === 0){

            Swal.fire({
                    icon: 'info',
                    title: 'ERROR',
                    text: 'Los filtros son obligatorios.',
            })
            return

      }

      this.$router.push({ name: 'vuelos'})

    }    
  }
}
</script>

<style lang="scss" scoped>

  .main-page{
    height: 100%;
    .main-header{
      height: 180px;
      background-color: #0c1d2d;
      color: white;
    }
    .filters{
      // background-color: bisque;
      width: 90%;
      max-width: 1000px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-around;
      height: 100%;
      .filter{
        height: 50%;
        width: 27%;
        // background-color: rebeccapurple;        
        .place-filter{
          height: 30px;
        }
        .double-arrow{
          width: 20%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgb(107, 13, 13);
          font-size: 40px;
          font-weight: lighter;
        }
      }
      .places-filter{
        display: flex;        
        .place-filter{
          // background-color: aqua;
          height: 100%;
          width: 40%;
          display: flex;
          cursor: pointer;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          .place-abreviation{
            font-size: 25px;
            font-weight: lighter;
            margin-bottom: 10px;
          }
          .place-name{
            font-size: 10px;
          }
        }
      }
      .date-filters{
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          .date-filter{
            label{
              margin-right: 10px;
            }
            input{
              width: 150px;
            }
          }
        }
      .passengers-filters{
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-size: 20px;
        .passenger-actions{
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          width: 30px;
          cursor: pointer;
          // background-color: firebrick;
          height: 90%;
        }
        .passenger-number{
          i{
            font-size: 30px;
          }
        }
      }
      .search-button{
        width: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50%;
        // background-color: forestgreen;
        i{
          font-size: 20px;
          padding: 15px;
          border-radius: 100%;
          background-color: rgb(72, 4, 4);
          color: white;
          cursor: pointer;
        }
      }
    }
  }  


  input[type=”date”]{
    border: none;
    outline: none;
  }


  /* MODALS */
  .modal-dialog {
    position: absolute;
    top: 22%;
    right: 31%;
    bottom: 0;
    left: 0;
    z-index: 10040;
    overflow: auto;
    overflow-y: auto;
  }

</style>