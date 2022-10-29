<template>
  <div class="pasajeros-container">
    <div class="title">Pasajeros</div>
    <br>
    <br>

    <div class="id-filler container d-flex justify-content-end">
        <button class="btn btn-dark mb-4">
            Rellenar datos con cédula
        </button>
    </div>

    <div class="form-container">
        <form action="">
            <div class="field">
                <div class="label">Nombre:</div>
                <input type="text" name="" id="" class="form-control">
            </div>

            <div class="field">
                <div class="label">Apellido:</div>
                <input type="text" name="" id="" class="form-control">
            </div>

            <div class="field">
                <div class="label">Edad:</div>
                <input type="text" name="" id="" class="form-control">
            </div>

            <div class="field">
                <div class="label">Cédula:</div>
                <input type="text" name="" id="" class="form-control">
            </div>

            <div class="field">
                <div class="label">Sexo:</div>
                <select class="form-select" aria-label="Default select example">
                    <option selected>Elegir</option>
                    <option value="1">Masculino</option>
                    <option value="2">Femenino</option>
                </select>
            </div>
        </form>
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

    .pasajeros-container{
        height: 100%;
        .form-container{
            width: 50%;
            margin: 0 auto;
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