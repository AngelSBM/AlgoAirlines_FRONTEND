<template>
    
    <div class="" style="padding-bottom: 50px">
        <div class="title">Resumen</div>

        <div class="tickets container">

            <div class="mt-5">
                <div class="title">Tickets de ida</div>

                <table class="table table-bordered" v-for="(ticket, index) in ticketsIda" :key="index" style="margin-top:100px;">
                    <tbody>
                        <tr>
                            <td>Número de vuelo:</td>
                            <td style="font-weight: bold;">{{ ticket.publicId }}</td>
                        </tr>
                        <tr>
                            <td>Nombre pasajero:</td>
                            <td>{{ ticket.Nombre }}</td>
                        </tr>
                        <tr>
                            <td>Id nacional:</td>
                            <td>{{ ticket.Cedula }}</td>
                        </tr>
                        <tr>
                            <td>Pasaporte:</td>
                            <td>{{ ticket.Pasaporte }}</td>
                        </tr>
                        <tr>
                            <td>Lugar de despegue:</td>
                            <td>{{ ticket.lugarSalida.nombre }} - {{ ticket.lugarSalida.ciudad }}</td>
                        </tr>
                        <tr>
                            <td>Lugar de aterrizaje:</td>
                            <td>{{ ticket.lugarLlegada.nombre }} - {{ ticket.lugarSalida.ciudad }}</td>
                        </tr>
                        <tr>
                            <td>Despegue:</td>
                            <td>{{ ticket.fechaSalida }}</td>
                        </tr>
                        <tr>
                            <td>Aterrizaje:</td>
                            <td>{{ ticket.fechaLlegada }}</td>
                        </tr>
                        <tr>
                            <td>Numero asiento:</td>
                            <td>{{ ticket.NumeroAsientoIda }}</td>
                        </tr>

                    </tbody>
                </table>

            </div>
            <div class="line"></div>
            <div class="mt-5">
                <div class="title">Tickets de vuelta</div>

                <table class="table table-bordered" v-for="(ticket, index) in ticketsVuelta" :key="index" style="margin-top:100px;">
                    <tbody>
                        <tr>
                            <td>Número de vuelo:</td>
                            <td style="font-weight: bold;">{{ ticket.publicId }}</td>
                        </tr>
                        <tr>
                            <td>Nombre pasajero:</td>
                            <td>{{ ticket.Nombre }}</td>
                        </tr>
                        <tr>
                            <td>Id nacional:</td>
                            <td>{{ ticket.Cedula }}</td>
                        </tr>
                        <tr>
                            <td>Pasaporte:</td>
                            <td>{{ ticket.Pasaporte }}</td>
                        </tr>
                        <tr>
                            <td>Lugar de despegue:</td>
                            <td>{{ ticket.lugarSalida.nombre }} - {{ ticket.lugarSalida.ciudad }}</td>
                        </tr>
                        <tr>
                            <td>Lugar de aterrizaje:</td>
                            <td>{{ ticket.lugarLlegada.nombre }} - {{ ticket.lugarSalida.ciudad }}</td>
                        </tr>
                        <tr>
                            <td>Despegue:</td>
                            <td>{{ ticket.fechaSalida }}</td>
                        </tr>
                        <tr>
                            <td>Aterrizaje:</td>
                            <td>{{ ticket.fechaLlegada }}</td>
                        </tr>
                        <tr>
                            <td>Numero asiento:</td>
                            <td>{{ ticket.NumeroAsientoVuelta }}</td>
                        </tr>

                    </tbody>
                    
                </table>
                
            </div>

        </div>

        <payment></payment>

    </div>

</template>

<script>
import { mapGetters } from 'vuex'
import Payment from './Payment.vue'
export default {
    components:{
        Payment
    },  
    computed: {
        ...mapGetters('flight', ['selectedFilter', 'selectedFlight']),
        ticketsIda(){

            let tickets = [];

            this.selectedFilter.passengersInfo.forEach(element => {
                
                const newTicket = {
                    ...element,
                    ...this.selectedFlight.departure
                }

                tickets.push(newTicket)
            });

            return tickets;
        },
        ticketsVuelta(){

            let tickets = [];

            this.selectedFilter.passengersInfo.forEach(element => {
                
                const newTicket = {
                    ...element,
                    ...this.selectedFlight.arrive
                }

                tickets.push(newTicket)
            });
            return tickets;

        }
    },

}
</script>

<style lang="scss" scoped>
    .info{
        .table-title{
            padding-top: 30px;
            padding-bottom: 10px;
            font-weight: bold;
            font-size: 23px;
        }        
    }

    .title{
        font-size: 23px;
    }

    .line{
        height: 5px;
         background-color: rgb(102, 14, 93);;
    }
</style>