<template>
    
    <div class="" style="padding-bottom: 50px">
        <div class="title">Resumen</div>

        <div class="info container">
            <div class="table-title">Ida</div>
            <table class="table table-bordered">
                <tbody>
                    <tr>
                        <td>Fecha salida:</td>
                        <td>{{ selectedFilter.dateFrom }}</td>
                    </tr>
                    <tr>
                        <td>Lugar salida:</td>
                        <td>SDQ - Santo Domingo</td>
                    </tr>
                    <tr>
                        <td>Lugar llegada:</td>
                        <td>JFK - Nueva York</td>
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
                        <td>JFK - Nueva York</td>
                    </tr>
                    <tr>
                        <td>Lugar salida:</td>
                        <td>SDQ - Santo Domingo</td>
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

        </div>
    </div>

</template>

<script>
import { mapGetters } from 'vuex'
export default {

    computed: {
        ...mapGetters('flight', ['selectedFilter', 'selectedFlight']),
    },

}
</script>

<style lang="scss" scoped>
    .info{
        .table-title{
            padding-top: 30px;
            padding-bottom: 10px;
            font-weight: bold;
        }
    }
</style>