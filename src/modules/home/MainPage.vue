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
        <div class="main-cards">

            <div class="main-card">
                <div class="image">
                    <img src="@/../public/card1.jpg" alt="">
                </div>
                <div class="body">
                    <div class="title">Nuestra experiencia a bordo</div>
                    <div class="text">
                        Usted merece llegar renovado, así que póngase cómodo en una de nuestras lujosas cabinas, relájese con su comida y bebida favoritas.
                    </div>
                </div>
            </div>


            <div class="main-card">
                <div class="image">
                    <img src="@/../public/card2.jpg" alt="">
                </div>
                <div class="body">
                    <div class="title">¿Listo para la aventura?</div>
                    <div class="text">
                        Explore ofertas de vuelos para viajar a sus lugares favoritos o conozca los nuevos destinos que puede descubrir. Planifique su próxima aventura hoy mismo.
                    </div>
                </div>
            </div>


            <div class="main-card">
                <div class="image">
                    <img src="@/../public/card3.jpg" alt="">
                </div>
                <div class="body">
                    <div class="title">Deléitese con un viaje premium</div>
                    <div class="text">
                        Disfrute del nuevo Delta Premium Select en vuelos más largos. Disfrutará de un asiento más espacioso con gastronomía mejorada y servicios premium.
                    </div>
                </div>
            </div>



        </div>
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
            margin-top: 40px;
            .first-title{
                font-weight: bold;
                margin-bottom: 10px;
            }
            .second-title{
                font-size: 29px;
                font-weight: lighter;
            }
            .main-cards{
                display: flex;
                justify-content: space-between;
                margin-top: 60px;
                padding-bottom: 100px;
                .main-card{
                    width: 30%;
                    .image{
                        width: 100%;
                        height: 150px;
                        img{
                            width: 100%;
                        height: 150px;
                            object-fit: cover;
                        }
                    }
                    .body{
                        padding: 15px;                        
                        background-color: rgb(240, 240, 240);
                        height: 220px;
                        .title{
                            font-weight: bold;
                            margin-bottom: 30px;
                        }
                    }
                }
            }
        }
    }
</style>