<template>
  <div class="index">
    <div class="carousel">
      <mySwiper></mySwiper>
    </div>
  </div>
</template>

<script>
  import mySwiper from '../components/MySwiper.vue'
  export default {
    name: 'IndexView',
    components: {
      mySwiper
    },
    data () {
      return {

        }
      }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.index {
  background-color: #E6EAEA;
}
/*.carousel {
  height: 364px;
}*/
</style>
