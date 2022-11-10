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
                            <td>{{ ticket.NumeroAsiento }}</td>
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
                            <td>{{ ticket.NumeroAsiento }}</td>
                        </tr>

                    </tbody>
                    
                </table>
                
            </div>

        </div>

        <!-- <div class="info container">
            <div class="table-title">Ida</div>
            <table class="table table-bordered">
                <tbody>
                    <tr>
                        <td>Fecha salida:</td>
                        <td>{{ selectedFilter.dateFrom }}</td>
                    </tr>
                    <tr>
                        <td>Lugar salida:</td>
                        <td>{{ selectedFilter.placeFrom.nombre }} - {{ selectedFilter.placeFrom.ciudad }}</td>
                    </tr>
                    <tr>
                        <td>Lugar llegada:</td>
                        <td>{{ selectedFilter.placeTo.nombre }} - {{ selectedFilter.placeTo.ciudad }}</td>
                    </tr>
                </tbody>
            </table>


            <div class="table-title">Vuelta</div>
            <table class="table table-bordered">
                <tbody>
                    <tr>
                        <td>Fecha salida:</td>
                        <td>12-10-2022</td>
                    </tr>
                    <tr>
                        <td>Lugar llegada:</td>
                        <td>{{ selectedFilter.placeTo.nombre }} - {{ selectedFilter.placeTo.ciudad }}</td>
                    </tr>
                    <tr>
                        <td>Lugar salida:</td>
                        <td>{{ selectedFilter.placeFrom.nombre }} - {{ selectedFilter.placeFrom.ciudad }}</td>
                    </tr>
                </tbody>
            </table>

            <div class="" v-for="(passenger, index) in selectedFilter.passengersInfo" :key="index">

                <div class="table-title">Pasajero 1</div>
                <table class="table table-bordered">
                    <tbody>
                        <tr>
                            <td>Nombre</td>
                            <td>{{ passenger.Nombre }}</td>
                        </tr>
                        <tr>
                            <td>Apellidos:</td>
                            <td>{{ passenger.Apellido }}</td>
                        </tr>
                        <tr>
                            <td>Fecha de nacimiento:</td>
                            <td>{{ passenger.FechaNacimiento }}</td>
                        </tr>
                        <tr>
                            <td>Cédula:</td>
                            <td>{{ passenger.Cedula }}</td>
                        </tr>
                        <tr>
                            <td>Pasaporte:</td>
                            <td>{{ passenger.Pasaporte }}</td>
                        </tr>
                        <tr>
                            <td>Numero de asiento:</td>
                            <td>{{ passenger.NumeroAsiento }}</td>
                        </tr>
                    </tbody>
                </table>

            </div>

            <div class="button m-5">
                <button class="btn btn-success block">
                    Agendar
                </button>
            </div>
            <div class="button m-5">
                <button class="btn btn-danger">
                    Desestimar
                </button>
            </div>

        </div> -->
    </div>

</template>

<script>
import { mapGetters } from 'vuex'
export default {

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