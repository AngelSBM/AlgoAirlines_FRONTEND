<template>
  <div class="content">
    <div class="portrait">
        <div class="text">
            <div class="text-one">
                VIAJAR POR EL MUNDO
     
                AHORA ES MÁS FÁCIL
            </div>
            <div class="text-two">
                Ya no se requiere una prueba de la COVID-19 para los clientes que ingresen a los EE. UU.

                    Los ciudadanos extranjeros aún deben estar completamente vacunados para ingresar.
            </div>
        </div>
    </div>
    <div class="container mt-3 info">
        <div class="first-title">La experiencia del cliente ayuda</div>
        <div class="second-title">Brindándole apoyo en su viaje</div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .content{
        height: 100%;
        .portrait{
            background: url('./../../../public/plane.jpg')  no-repeat center center;
            height: 400px;
            width: 100%;
            background-size: cover;
            filter: brightness(80%);
            display: grid;
            grid-template-columns: 1fr 1fr;
            .text{
                color: white;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                .text-one{
                    width: 60%;
                    font-size: 27px;
                    font-weight: bold;
                    &:hover{
                        text-decoration: underline;
                    }
                }
                .text-two{
                    width: 70%;
                    &:hover{
                        text-decoration: underline;
                    }
                }
            }
        }
        .info{
            .first-title{
                font-weight: bold;
                margin-bottom: 10px;
            }
            .second-title{
                font-size: 29px;
                font-weight: lighter;
            }
        }
    }
</style>