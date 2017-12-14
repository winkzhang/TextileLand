<template>
    <carousel :autoplay="true" :autoplayTimeout="2000" :perPage="1" :loop="true" :paginationActiveColor=activeColor
              :paginationColor=normalColor :paginationSize="15" :paginationPadding="15">
      <slide><img src="../assets/home/pic-one.png" class="banner-size" /></slide>
      <slide><img src="../assets/home/pic-two.jpg" class="banner-size" /></slide>
      <slide><img src="../assets/home/pic-three.jpg" class="banner-size" /></slide>
    </carousel>
</template>

<script>

  export default {
    name: 'MySwiper',
    data () {
      return {
        activeColor: '#F57905',
        normalColor: '#ffffff'
        }
      }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .banner-size {
    width: 100%;
  }
  .VueCarousel-pagination[data-v-7e42136f] {
    width: 100%;
    position: relative;
    top: -100px;
    text-align: center;
  }
</style>
