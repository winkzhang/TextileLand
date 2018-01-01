<template>
  <div class="index">
    <div class="product-header">
      <span class="platform">纺织平台</span>
      <i class="rightArrow"></i>
      <span class="product-name">{{productName}}</span>
      <a class="look-order">查看我的订单</a>
    </div>
    <div class="pay-img">
      <img src="../assets/order/pay.jpg" />
    </div>
  </div>
</template>

<script>

  export default {
    name: 'GoPay',
    data () {
      return {
        productName: '进行支付'
      }
    },
    methods: {

    },
    mounted () {
    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .index {
    width: 1280px;
    margin: 0 auto;
    font-family: Microsoft YaHei;
  }
  .product-header {
    height: 34px;
    margin-top: 22px;
    margin-bottom: 22px;
    text-align: left;
    position: relative;
  }
  .platform {
    font-weight: bold;
    font-size: 16px;
  }
  .rightArrow {
    display:inline-block;
    background: url("../assets/product/rarrow.png") no-repeat;
    background-size: 26px 26px;
    width: 26px;
    height: 26px;
    position: absolute;
    left: 72px;
    top: -2px;
  }
  .product-name {
    font-weight: bold;
    font-size: 16px;
    color: #F57905;
    position: absolute;
    left: 110px;
    top: 1px;
  }
  .look-order {
    text-decoration: underline;
    font-weight: bold;
    font-size: 16px;
    color: #F57905;
    position: absolute;
    left: 200px;
    top: 1px;
    cursor: pointer;
  }
  .pay-img img {
    width: 400px;
    height: 360px;
  }
  .pay-img {
    margin-bottom: 50px;
  }
</style>
