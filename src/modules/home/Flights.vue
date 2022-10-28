<template>
  <div class="flights-container">
    <div class="selected-filters">

    </div>

    <div class="flights">
        <div class="flight" v-for="(flight, index) in [1,1,1]" :key="index">
            <div class="flight-info">
                <div class="info-place">
                    <div class="hour">
                        8:00 PM
                    </div>
                    <div class="place">
                        SDQ
                    </div>
                </div>


                <div class="icon">
                    <i class="fa-solid fa-plane"></i>
                    <div class="line"></div>
                </div>

                <div class="info-place">
                    <div class="hour">
                        11:00 PM
                    </div>
                    <div class="place">
                        JFK
                    </div>
                </div>
                
            </div>
            <div class="flight-price">
                <div class="price">
                    $500
                </div>
                <div class="description">
                    Ida y vuelta
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

<style  lang="scss" scoped>
    .flights-container{
        padding-bottom: 50px;
        .selected-filters{
            height: 100px;
            background-color: #0c1d2d;
            margin-bottom: 40px;
        }
        .flights{
            width: 90%;
            max-width: 1000px;
            margin: auto;
                   
            .flight{
                height: 200px;
                background-color: rgb(121, 121, 121);
                margin-bottom: 20px;
                border-radius: 5px;
                display: grid;     
                grid-template-columns: 3fr 1fr;
                cursor: pointer;
                .flight-info{
                    background-color: coral;
                    height: 100%;
                    display: grid;
                    grid-template-columns: 3fr 1fr 3fr;
                    .info-place{
                        background-color: forestgreen;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        flex-direction: column;
                        .hour{
                            font-weight: bold;
                            font-size: 30px;
                        }
                        .place{
                            font-weight: lighter;
                        }
                    }    
                }
                .icon{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 40px;
                    position: relative;
                    i{
                        color: #0c1d2d;
                    }
                
                }
                .flight-price{
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        flex-direction: column;
                        height: 100%;
                        .price{
                            font-size: 25px;
                        }
                        .description{
                            font-weight: lighter;
                            font-size: 14px;
                        }
                }
            }
        }
    }
</style>