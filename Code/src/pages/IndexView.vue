<template>
  <div class="index" id="index">
    <div class="carousel">
      <mySwiper></mySwiper>
    </div>
    <div class="container">
      <div class="product-title">
        <i class="product-title-img"></i>
        <span class="product-title-word">产品分类</span>
      </div>
      <div class="product-wrapper">
          <div v-for="item in products" class="item-per">
            <div class="product-img">
              <img class="product-pic" :src='item.url'  />
            </div>
            <i class="level"></i>
            <div class="product-name"><span>{{item.name}}</span></div>
          </div>
      </div>
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
        products: {}
      }
    },
    methods: {
      getProduct: function() {
        var products = [];
        var detail1 = {};
        detail1.url = "static/type_one.png";
        detail1.name = "长纤人造毛";
        var detail2 = {};
        detail2.url = "static/type_two.png";
        detail2.name = "抗起球羊毛包芯纱";
        var detail3 = {};
        detail3.url = "static/type_three.png";
        detail3.name = "羊毛马海毛";
        var detail4 = {};
        detail4.url = "static/type_four.png";
        detail4.name = "抗起球冰爽丝";
        var detail5 = {};
        detail5.url = "static/type_five.png";
        detail5.name = "有色丝光棉";
        var detail6 = {};
        detail6.url = "static/type_six.png";
        detail6.name = "有色棉纱";
        products.push(detail1);
        products.push(detail2);
        products.push(detail3);
        products.push(detail4);
        products.push(detail5);
        products.push(detail6);
        return products;
      }
    },
    mounted () {
      this.products = this.getProduct();
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#index {
  background-color: #E6EAEA;
  font-family: Microsoft YaHei;
  margin-bottom: 100px;
}
.container {
  width: 1280px;
  margin: 0 auto;
}
.product-title {
  height: 40px;
  margin-top: 30px;
  margin-bottom: 30px;
  position: relative;
}
  .product-title-img {
    display:inline-block;
    background: url("../assets/home/goods.png") no-repeat;
    background-size: 40px 40px;
    width: 40px;
    height: 40px;
    position: absolute;
    left: 0px;
  }
.product-title-word {
  position: absolute;
  left: 60px;
  top: 11px;
  font-size: 20px;
  font-weight: bold;
}
.product-wrapper {
  /*解决子元素浮动父元素不能被撑开问题*/
  overflow: hidden;
  zoom: 1;
  margin-left: -30px;
}
.item-per {
  height: 306px;
  width: 232px;
  float: left;
  margin-left: 30px;
  margin-bottom: 30px;
  background-color: #fff;
  box-shadow: 5px 5px 2px #999999;
  cursor: pointer;
}
.product-img {
  height: 230px;
  text-align: center;
}
.product-pic {
  width: 128px;
  height: 128px;
  margin-top: 52px;
}
.level {
  display: inline-block;
  width: 190px;
  height: 2px;
  background-color: #E6EAEA;
  position: relative;
  top: -13px;
}
.product-name {
  height: 74px;
  position: relative;
  top: -15px;
}
.product-name span {
  font-size: 17px;
  /*position: absolute;*/
  position: relative;
  top: 24px;
}

</style>
