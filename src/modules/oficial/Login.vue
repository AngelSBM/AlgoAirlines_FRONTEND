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
                <input type="text" placeholder="Escriba aquí">
            </div>
        </div>
        <div class="field">
            <div class="field-title">
                Contraseña:
            </div>
            <div class="field-input">
                <input type="text" placeholder="Escriba aquí">
            </div>
        </div>

        <div class="button">
            <button @click="$router.push({name:'admin'})">Ingresar</button>
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