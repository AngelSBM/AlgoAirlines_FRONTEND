<template>
  <div class="contenedor">
    <div class="message">
        <div class="text"><i class="fa-solid fa-ban"></i> Lo sentimos, no tiene permisos para ingresar</div>
        <div class="button">
            <button class="btn btn-info" @click="$router.push({name:'home'})">Ir a home</button>
        </div>
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
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .text{
      font-size: 25px;
      margin-bottom: 20px;
    }
</style>