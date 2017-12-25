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
          <div v-for="item in products" class="item-per" @click="jumpToProduct">
            <div class="product-img">
              <img class="product-pic" :src='item.url'  />
            </div>
            <i class="level"></i>
            <div class="product-name"><span>{{item.name}}</span></div>
          </div>
      </div>
      <div class="product-title">
        <i class="store-title-img"></i>
        <span class="product-title-word">入驻商家</span>
      </div>
      <div class="store-wrapper">
        <div v-for="item in stores" class="store-per">
          <div class="store-name">{{item.name}}</div>
          <div class="store-address">
            <i class="store-address-img"></i>
            <span class="store-address-word">{{item.address}}</span>
          </div>
          <div class="store-star">
            <i class="store-star-img"></i>
            <span class="store-star-word">主打{{item.star}}等</span>
          </div>
          <a class="store-go"><i class="store-go-img"></i><span>逛一逛</span></a>
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
        products: [],
        stores: []
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
      },
      getStore: function() {
        var stores = [];
        var detail1 = {};
        detail1.name = "彬彬纺织贸易有限公司";
        detail1.address = "广东省东莞市大朗镇康丰路90号";
        detail1.star = "长纤人造毛";
        var detail2 = {};
        detail2.name = "泓鑫泰纺织有限公司";
        detail2.address = "广东省东莞市大朗镇富康路286-288号";
        detail2.star = "有色棉纱";
        var detail3 = {};
        detail3.name = "锦淼纺织有限公司";
        detail3.address = "广东省东莞市大朗镇富华北路293号";
        detail3.star = "羊毛马海毛";
        stores.push(detail1);
        stores.push(detail2);
        stores.push(detail3);
        return stores;
      },
      jumpToProduct: function() {
        this.$router.push('/product');
      }
    },
    mounted () {
      this.products = this.getProduct();
      this.stores = this.getStore();
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#index {
  background-color: #E6EAEA;
  font-family: Microsoft YaHei;
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
  .store-title-img {
    display:inline-block;
    background: url("../assets/home/stores.png") no-repeat;
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
.store-wrapper {
  padding-bottom: 30px;
}
.item-per {
  height: 306px;
  width: 232px;
  float: left;
  margin-left: 29.2px;
  margin-bottom: 30px;
  background-color: #fff;
  box-shadow: 5px 5px 2px #999999;
  cursor: pointer;
}
.store-per {
  height: 180px;
  width: 1280px;
  margin-bottom: 30px;
  border-radius: 30px;
  box-shadow: -3px -3px 2px #F57905;
  background-color: #fff;
  position: relative;
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
.store-name {
  position: absolute;
  left: 35px;
  top: 30px;
  font-weight: bold;
  font-size: 18px;
  color: #333333;
}
.store-address {
  height: 22px;
  position: absolute;
  left: 35px;
  top: 80px;
}
.store-address-img {
  display:inline-block;
  background: url("../assets/home/location.png") no-repeat;
  background-size: 22px 22px;
  width: 22px;
  height: 22px;
}
.store-address-word {
  margin-left: 12px;
  font-size: 15px;
  color: #333333;
  position: relative;
  top: -4px;
}
.store-star {
  height: 40px;
  position: absolute;
  left: 35px;
  top: 125px;
}
.store-star-img {
  display:inline-block;
  background: url("../assets/home/hot.png") no-repeat;
  background-size: 35px 35px;
  width: 35px;
  height: 35px;
}
.store-star-word {
  margin-left: 12px;
  font-size: 15px;
  color: #333333;
  position: relative;
  top: -10px;
}
.store-go {
  display: inline-block;
  width: 160px;
  height: 70px;
  background-color: #F57905;
  border-radius: 8px;
  position: absolute;
  top: 80px;
  right: 85px;
  cursor: pointer;
}
.store-go span {
  color: #fff;
  font-weight: bold;
  font-size: 26px;
  position: absolute;
  top: 18px;
  left: 65px;
}
.store-go-img {
  display:inline-block;
  background: url("../assets/home/goin.png") no-repeat;
  background-size: 40px 40px;
  width: 40px;
  height: 40px;
  position: absolute;
  top: 16px;
  left: 15px;
}
</style>
