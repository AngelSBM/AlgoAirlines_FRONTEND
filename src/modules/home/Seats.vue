<template>
  <div class="select-passenger-container row mt-5">    
    <div class="current-passenger col-6">
        <span class="title">Seleccionar asiento para:</span>
        <div class="passenger mt-1">{{ currentPassengerSelected.Nombre }}</div>
        <div class="button-container">
            <button class="btn btn-info mt-5">
                Seleccionar
            </button>            
        </div>
        <div class="button-container">
            <button class="btn btn-danger mt-5" @click="deshacerSeleccion">
                Deshacer seleccion
            </button>            
        </div>
    </div>

    <!-- <h2 class="mb-4">Asientos</h2> -->
    <div class="seats-container col-6">
    <div class="hallway"></div>

        <div v-for="(seat, index) in seats" :key="index" @click="seleccionarAsiento(index)"
            :class="{'seat': true, 'taken': isSeatTaken(index), 'selected': isSelected(index)}">
            <span>
                {{ index + 1 }}
            </span>
        </div>
    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    data(){
        return {
            selectedSeats: [],
            currentPassenger: 1,
            passengersUpdated: []
        }
    },
    computed: {
        ...mapGetters('flight', ['selectedFilter', 'selectedFlight']),
        seats(){
            let array = []

            for (let index = 1; index < 60; index++) {
                const element = "free";
                array.push(element)                
            }
            return array;
        },
        takenSeats(){
            return [2,3]
        },
        currentPassengerSelected(){
            return this.selectedFilter.passengersInfo[this.currentPassenger - 1]
        }
        // isSelected(){
        //     return this.seats
        // }
    },
    methods: {
        isSeatTaken(index){
            return this.takenSeats.includes(index + 1)
        },
        seleccionarAsiento(index){

            if(this.selectedSeats.includes(index + 1) || this.takenSeats.includes(index + 1)){
                return
            }

            this.selectedSeats.push(index + 1);

            const passengerInfoUpdated = {
                ...this.selectedFilter.passengersInfo[this.currentPassenger - 1],
                NumeroAsiento: index + 1
            }


            this.passengersUpdated.push(passengerInfoUpdated);
            if(this.selectedFilter.passengersInfo.length === this.currentPassenger){
                this.$store.dispatch('flight/updatePassengersInfo', this.passengersUpdated);        
                this.$router.push({name: 'resumen'})
            }

            this.currentPassenger += 1;
            
        },
        deshacerSeleccion(){
            this.currentPassenger -= 1;
            this.selectedSeats.pop()

        },  
        isSelected(index){
            return this.selectedSeats.includes(index + 1)
        }
    },
    created(){
    }
}
</script>

<style scoped>
    /* PASAJERO */
    .title{
        font-size: 20px;
    }

    .passenger{
        color: rgb(95, 45, 141);
        font-weight: bold;
        
    }


    /* SEATS */
    .select-passenger-container{
        width: 90%;
        max-width: 1000px;
        margin: auto;
    }

    .seats-container{
        /* background-color: aquamarine; */
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
        justify-content: center;
        position: relative;
        text-align: center;
        border: 1px solid black;
    }

    .hallway{
        position: absolute;
        height: 100%;
        width: 20px;
        background-color: rgb(67, 67, 67);
        left: 45%;
    }

    .seat{
        height: 30px;
        width: 30px;
        background-color: green;

        margin: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        cursor: pointer;
    }

    .taken{
        background-color: rgb(77, 8, 8);
        cursor: not-allowed;
    }

    .selected {
        background-color: rgb(11, 8, 77);
    }

    
</style>