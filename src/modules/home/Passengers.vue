<template>
  <div class="pasajeros-container">
    <div class="title">Pasajeros</div>
    <br>
    <br>

    <div class="id-filler container d-flex justify-content-end">
        <button class="btn btn-dark mb-4" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop" @click="searchClientInfo" id="fillInfoButton">
            Rellenar datos con cédula
        </button>
    </div>

    <div class="form-container">
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

            <!-- <div class="field">
                <div class="label">Sexo:</div>
                <select class="form-select" aria-label="Default select example" v-model="form.sexo">
                    <option selected>Elegir</option>
                    <option value="1">Masculino</option>
                    <option value="2">Femenino</option>
                </select>
            </div> -->

            <!-- <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                <label class="form-check-label" for="defaultCheck1">
                    M
                </label>
                <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                <label class="form-check-label" for="defaultCheck1">
                    M
                </label>
            </div> -->

            <div class="button-field">
                <button class="btn btn-primary">
                    Guardar
                </button>
            </div>
            
        </form>
    </div>



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
        async searchClientInfo(){
            const info = await obtenerDatosCliente(this.form.cedula);
            console.log(info);
            this.form.nombre = info.Nombres
            this.form.apellido = info.Apellido1 + ' ' + info.Apellido2
            this.form.sexo = info.IdSexo 
            this.form.fechaNacimiento = info.FechaNacimiento.split(' ')[0].slice(0, 10)
            this.clientPicture = info.foto

        }
    }
}
</script>

<style lang="scss" scoped>

    .pasajeros-container{
        height: 100%;
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