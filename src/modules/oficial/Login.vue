<template>
  <div class="contenedor">
    <!-- registry -->
    <div class="card">
        <div class="title" style="font-size: 24px">Login</div>
        <div class="field">
            <div class="field-title">
                Correo:
            </div>
            <div class="field-input">
                <input type="text" placeholder="Escriba aquí" v-model="correo">
            </div>
        </div>
        <div class="field">
            <div class="field-title">
                Contraseña:
            </div>
            <div class="field-input">
                <input type="password" placeholder="Escriba aquí" v-model="pass">
            </div>
        </div>

        <div class="button">
            <button @click="login">Ingresar</button>
        </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import store from "@/store";
import Swal from "sweetalert2";

export default {
    
    data(){
        return {
            correo: '',
            pass: ''
        }
    },
    computed: {
        ...mapGetters('flight', ['isAdmin']),
    },  
    methods: {
        async login(){

            if(this.correo === '' || this.pass === ''){
                Swal.fire({
                    icon: 'error',
                    title: 'INCOMPLETO',
                    text: 'Los campos son obligatorios',
                })
                return
            }

            const credentials = {
                email: this.correo,
                password: this.pass
            }

            await this.$store.dispatch('flight/login', credentials).then(r => {
              
                
                if(this.isAdmin){
                    this.$router.push({name:'admin'})
                }    
            

            }).catch(error => {
                Swal.fire({
                        icon: 'error',
                        title: 'Lo sentimos',
                        text: error.response.data,
                })
            })





        }
    }
}
</script>
<style scoped>
    .contenedor{
        background-color: rgb(242, 242, 242);
        height: 100%;        
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .card{
        height: 400px;
        width: 400px;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }

    .field{
        margin: 10px 0;
    }

    .field-title{
        font-weight: bold;
        text-align: left;
    }

    .field-input input{
        border: none;outline: 0px;
        border-bottom: 2px solid rgb(110, 110, 110);
        width: 300px;
    }

    .button button{
        border: none;
        padding: 10px;
        margin-top: 30px;
        background-color: rgb(11, 2, 58);
        border-radius: 3px;
        color: white;
    }

</style>