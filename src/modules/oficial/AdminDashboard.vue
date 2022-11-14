<template>
  <div class="contenedor">
    <div class="sidebar">
        <div class="option">
            Vuelos
        </div>
        <div class="option">
            Pasajeros
        </div>
        <div class="option">
            Itinerarios
        </div>
        <div class="option">
            Reservar
        </div>
    </div>
    <div class="page">
        ¡Bienvenido oficial!
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .contenedor{
        height: 100%;

        display: grid;
        grid-template-columns: 1fr 4fr;
    }

    .sidebar{
        background-color: rgb(12, 6, 39);
        color: white;
        height: 100%;
    }

    .page{
        font-size: 30px;
        color: rgb(186, 186, 186);
    }

    .option{
        margin-top: 20px;
        cursor: pointer;
        height: 20px;
    }

    .option:hover{
        opacity: .5;
    }
</style>