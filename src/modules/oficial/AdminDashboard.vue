<template>
  <div class="contenedor">
    <div class="sidebar">
        <div class="option">
            <i class="fa-solid fa-plane-circle-check"></i> Vuelos
        </div>
        <div class="option">
            <i class="fa-solid fa-users"></i> Pasajeros
        </div>
        <div class="option">
            <i class="fa-solid fa-gauge"></i> Itinerarios
        </div>
        <div class="option">
            <i class="fa-solid fa-calendar-days"></i> Reservar
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
        text-align: left;
        cursor: pointer;
        height: 20px;
        width: 50%;
        margin: 25px auto;
    }

    .option:hover{
        opacity: .5;
    }

    i{
        margin-right: 15px;
    }
</style>