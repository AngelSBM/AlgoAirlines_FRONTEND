<template>
  <div class="payment-container">
    <h3 class="title">Datos de pago</h3>
    <div class="all mb-5">
      <div class=" card-container">
        <div class="card-image">
          <img src="@/../assests/front_card.png" alt="">
          <div class="card-info">
            <div class="card-number">{{ cardNumberFormat }}</div>
            <div class="card-expires" v-if="expireDateFormat !== ''">
              <span style="font-size:12px; display: block;">Expiración</span>
              {{ expireDateFormat }}
            </div>
          </div>
        </div>     
        
      </div>
      <div class="">
        <form>
          <div class="form-group" style="text-align: left;">
            <label for="card-number">Número de tarjeta</label>
            <input type="text" class="form-control w-50" id="card-number" v-model="cardNumber" maxlength="16">
            <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> -->
            <div class="row">
              <div class="col-4">
                <label for="card-expires" class="mt-4 ">Fecha de expiración</label>
                <input type="text" class="form-control w-75" id="card-expires" v-model="expireDate" maxlength="4">                
              </div>  
              <div class="col-4">
                <label for="card-expires" class="mt-4 ">CVC</label>
                <input type="text" class="form-control w-75" id="card-expires" maxlength="3" v-model="cvc">
              </div>
            </div>
            
          </div>
        </form>
      </div>
    </div>


    <!-- EMAIL -->
    <div class="row">
      <div class="col-4"></div>
      <form class="mt-5 col-4">
        <div>
          <label for="exampleInputEmail1">Dirección de correo</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="mainMail">
          <small id="emailHelp" class="form-text text-muted">Aquí llegará la factura con el recibo de compra</small>

        </div>
    </form>
    <div class="col-4"></div>    
   </div>
  
    <div class="buttons" style="text-align: center; margin-top: 50px;">

      <button class="btn btn-success" @click="completarPago">
        <span v-if="!loading">
            Completar pago
        </span>
        <span class="buying" v-else>
            <i class="fa-solid fa-spinner fa-spin"></i>
            Agendando
        </span>
      </button>

    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
import { mapGetters } from 'vuex';

export default {
  data(){
    return{
      cardNumber: '',
      expireDate: '',
      mainMail: '',
      cvc: '',
      loading: false
    }
  },
  computed:{
    ...mapGetters('flight', ['selectedFilter', 'selectedFlight']),
    cardNumberFormat(){
      let newString = '';
      for (let i = 0; i < this.cardNumber.length; i++) {
        if(!(i % 4 === 0)){
          newString += this.cardNumber[i]
        }else{
          newString +=  ' ' + this.cardNumber[i]
        }
        
      }     
      return newString
    },
    expireDateFormat(){
      let newString = '';
      for (let i = 0; i < this.expireDate.length; i++) {
        const element = this.expireDate[i];
        if(i === 2){
          newString += '/' + element
        }else{
          newString += element
        }
      }
      return newString;
    }
  },
  methods: {
    async completarPago(){
      
      this.loading = true;

      if(this.cardNumber.length !== 16 || this.expireDate.length !== 4 || this.mainMail === '' || this.cvc === ''){
        Swal.fire({
          icon: 'error',
          title: 'INCOMPLETO',
          text: 'Los datos de pago son obligatorios para completar la transacción.',
        })
        this.loading = false;
        return
      }

      let datosAgenda = {
        vueloIdaId: this.selectedFlight.arrive.id,
        vueloVueltaId: this.selectedFlight.departure.id,
        pasajeros: [],
        mailConfirmacion: this.mainMail
      }

      this.selectedFilter.passengersInfo.forEach(passenger => {
        const passengerNew = {
          nombre: passenger.Nombre,
          fechaNacimiento: passenger.FechaNacimiento,
          cedula: passenger.Cedula,
          numeroPasaporte: passenger.Pasaporte,
          numeroAsientoIda: passenger.NumeroAsientoIda,
          numeroAsientoVuelta: passenger.NumeroAsientoVuelta,
          sexo: 'M'
        }
        datosAgenda.pasajeros.push(passengerNew)
      });

      await this.$store.dispatch('flight/createReservation', datosAgenda)


      this.loading = false
      Swal.fire({
          icon: 'success',
          title: 'Compra completada',
          text: 'Por favor revise su correo.',
      });
      this.$router.push({name: 'home'});

      // console.log(datosAgenda);


    },
    // validarDatosPago(){
    //   let valid = true;

    //   if(this.cardNumber.length !== 16 || this.expireDate.length !== 4){
    //     Swal.fire({
    //       icon: 'error',
    //       title: 'INCOMPLETO',
    //       text: 'Los datos de pago son obligatorios para completar la transacción.',
    //     })
    //     return
    //   }
 
    //   Swal.fire({
    //       icon: 'success',
    //       title: 'Compra completada',
    //       text: 'Por favor revise su correo.',
    //     })
    // }

  }
}
</script>

<style lang="scss" scoped>
  .payment-container{
    margin: 50px 0;
    .all{
      display: grid;
      grid-template-columns: 1fr 1fr;      
      .card-image{
        position: relative;
        display: inline-block;
        img{
          border-radius: 5px;
        }
        .card-info{
          position: absolute;
          top: 115px;
          right: -10px;
          .card-number{
            font-size: 29px;
            width: 400px;
          }
          .card-expires{
            margin-top: 15px;
            margin-right: 200px;
            font-size: 20px;
            font-weight: bold;
          }
        }
      }     
    }
  }


  .my-form{
    background-color: red;
    text-align: center;
  }


</style>