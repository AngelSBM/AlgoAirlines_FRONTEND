<template>
  <div class="pasajeros-container">
    <div class="title">Pasajeros</div>
    <br>
    <br>

    <div class="accordion container" id="accordionExample" style="padding-bottom: 30px">


        <div class="card" v-for="(passenger, index) in selectedFilter.passengers" :key="index">
            <div class="card-header" id="headingOne">
            <h2 class="mb-0">
                <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" :data-target="'#collapse' + index" aria-expanded="true" aria-controls="collapseOne">
                    Pasajero {{ index + 1 }}
                </button>
            </h2>
            </div>

            <div :id="'collapse' + index" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                <div class="card-body">

                    <div class="id-filler container d-flex justify-content-end">
                        <button class="btn btn-dark mb-4" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop" @click="searchClientInfo(index)" id="fillInfoButton">
                            Rellenar datos con cédula
                        </button>
                    </div>


                    <div class="form-container">
                        <div class="client-pic">
                            <img alt="" :id="'imageId' + index">
                        </div>

                        <form action="">
                            <div class="field">
                                <div class="label">Nombre:</div>
                                <input type="text" name="" :id="'inputNombre' + index" class="form-control" >
                            </div>

                            <div class="field">
                                <div class="label">Apellido:</div>
                                <input type="text" name="" :id="'inputApellido' + index" class="form-control" >
                            </div>

                            <div class="field">
                                <div class="label">Fecha de nacimiento:</div>
                                <input type="date" name="" :id="'inputFecha' + index" class="form-control" >
                            </div>

                            <div class="field">
                                <div class="label">Cédula:</div>
                                <input type="text" name="" :id="'inputCedula' + index" class="form-control" >
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>

        
        <div class="button-field m-5">
            <button class="btn btn-primary" @click="savePassengerInfo">
                Guardar
            </button>
        </div>

    </div>

    <!-- <div class="form-container">
        <div class="client-pic" v-if="clientPicture !== ''">
            <img :src="clientPicture" alt="">
        </div>

        <form action="">
            <div class="field">
                <div class="label">Nombre:</div>
                <input type="text" name="" id="" class="form-control" v-model="form.nombre">
            </div>

            <div class="field">
                <div class="label">Apellido:</div>
                <input type="text" name="" id="" class="form-control" v-model="form.apellido">
            </div>

            <div class="field">
                <div class="label">Fecha de nacimiento:</div>
                <input type="date" name="" class="form-control" v-model="form.fechaNacimiento" id="birthDate">
            </div>

            <div class="field">
                <div class="label">Cédula:</div>
                <input type="text" name="" id="" class="form-control" v-model="form.cedula">
            </div>

            <div class="button-field">
                <button class="btn btn-primary">
                    Guardar
                </button>
            </div>
            
        </form>
    </div> -->

    <!-- MODAL -->
    


  </div>
</template>

<script>

import { mapGetters } from 'vuex'
import obtenerDatosCliente from "@/api/cedulaApi";


export default {
    data(){
        return {
            form: {
                nombre: '',
                apellido: '',
                fechaNacimiento: '',
                cedula: '',
                sexo: 'M'
            },
            clientPicture: ''
        }
    },
    computed: {
        ...mapGetters('flight', ['selectedFilter', 'selectedFlight']),
    },
    methods:{
        async searchClientInfo(index){

            const inputNombre = document.getElementById('inputNombre' + index);
            const inputApellido = document.getElementById('inputApellido' + index);
            const inputFecha = document.getElementById('inputFecha' + index);
            const inputCedula = document.getElementById('inputCedula' + index);
            const imageId = document.getElementById('imageId' + index);
            const info = await obtenerDatosCliente(inputCedula.value);            

            inputNombre.value = info.Nombres
            inputApellido.value = info.Apellido1 + ' ' + info.Apellido2
            inputFecha.value = info.FechaNacimiento.split(' ')[0].slice(0, 10)
            imageId.src = info.foto;

            return
            // this.clientPicture = info.foto

        },
        async savePassengerInfo(){
            
            let passengers = [];

            for (let i = 0; i < this.selectedFilter.passengers; i++) {


                const inputNombre = document.getElementById('inputNombre' + i);
                const inputApellido = document.getElementById('inputApellido' + i);
                const inputFecha = document.getElementById('inputFecha' + i);
                const inputCedula = document.getElementById('inputCedula' + i);                

                const passengerInfo = {
                    Nombre: inputNombre.value,
                    Apellido: inputApellido.value,
                    FechaNacimiento: inputFecha.value,
                    Cedula: inputCedula.value
                }

                passengers.push(passengerInfo)

            }

            this.$store.dispatch('flight/updatePassengersInfo', passengers);
            this.$router.push({ name: 'resumen' })
            
        } 
    }
}
</script>

<style lang="scss" scoped>

    .pasajeros-container{
        height: 100%;
        .title{
            font-size: 30px;
        }
        .form-container{
            width: 50%;
            margin: 0 auto;
            .client-pic{
                margin-bottom: 20px;
                img{
                    border-radius: 5px;
                }
            }
            form{
                .field{
                    display: flex;
                    margin-bottom: 20px;
                    .label{
                        margin-right: 10px;
                    }
                }
            }
        }
    }

</style>