<template>
  
  <div class="main-page">
    <div class="main-header">
      <div class="filters">
        <div class="filter places-filter">
          <div class="place-filter" type="button" data-toggle="modal" data-target="#exampleModal">

            <div class="place-abreviation">
              Desde
            </div>
            <div class="place-name">
              De donde sale
            </div>
          </div>

          <div class="double-arrow">
            <i class="fa-solid fa-arrows-left-right"></i>
          </div>

          <div class="place-filter">
            <div class="place-abreviation">
              Hacia
            </div>
            <div class="place-name">
              Su destino
            </div>
          </div>
        </div>
        <div class="filter date-filters">

            <div class="date-filter">
              <label for="from-date">Fecha desde</label>
              <input type="date" id="datepicker-from" name="from-date">
            </div>

            <div class="date-filter">
              <label for="to-date">Fecha hasta</label>
              <input type="date" id="datepicker-to" name="to-date">
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
            <div class="number">{{ passengersNumber }}</div>
          </div>

        </div>
      </div>
    </div>


    <!-- VUELOS -->
    <!-- <Flights></Flights> -->


    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            ...
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
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

export default {
  components: {
    Flights
  },  
  data(){
    return{
      passengersNumber: 0
    }
  },
  mounted(){

    const minDate = moment().format().split("T")[0];
    document.getElementById('datepicker-from').setAttribute("min", minDate);
    document.getElementById('datepicker-to').setAttribute("min", minDate);

    
  },
  methods: {
    changePassengerNumber(quantity){
      if((this.passengersNumber + quantity) > 0){
        this.passengersNumber += quantity;
      }
    }
  }
}
</script>

<style lang="scss" scoped>

  .main-page{
    .main-header{
      height: 250px;
      background-color: #0c1d2d;
    }
    .filters{
      background-color: bisque;
      width: 90%;
      max-width: 1000px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-around;
      height: 100%;
      .filter{
        height: 50%;
        width: 30%;
        background-color: rebeccapurple;        
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
          background-color: aqua;
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
          background-color: firebrick;
          height: 90%;
        }
        .passenger-number{
          i{
            font-size: 30px;
          }
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