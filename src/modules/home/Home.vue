<template>
  
  <div class="main-page">
    <div class="main-header">
      <div class="filters">
        <div class="filter places-filter">
          <div class="place-filter">

            <div class="place-abreviation">
              Desde
            </div>
            <div class="place-name">
              De donde sale
            </div>
          </div>

          <div class="double-arrow">
            <i class="fa-solid fa-arrows-left-right"></i>
          </div>

          <div class="place-filter">
            <div class="place-abreviation">
              Hacia
            </div>
            <div class="place-name">
              Su destino
            </div>
          </div>
        </div>
        <div class="filter"></div>
        <div class="filter"></div>
      </div>
    </div>
  </div>

</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

  .main-page{
    .main-header{
      height: 250px;
      background-color: #0c1d2d;
    }
    .filters{
      background-color: bisque;
      width: 90%;
      max-width: 1000px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-around;
      height: 100%;
      .filter{
        height: 50%;
        width: 30%;
        background-color: rebeccapurple;        
        .place-filter{
          height: 30px;
        }
        .double-arrow{
          width: 20%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgb(107, 13, 13);
          font-size: 40px;
          font-weight: lighter;
        }
      }
      .places-filter{
        display: flex;        
        .place-filter{
          background-color: aqua;
          height: 100%;
          width: 40%;
          display: flex;
          cursor: pointer;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          .place-abreviation{
            font-size: 25px;
            font-weight: lighter;
            margin-bottom: 10px;
          }
          .place-name{
            font-size: 10px;
          }
        }
      }
    }
  }  
</style>