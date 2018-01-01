<template>
  <div class="vendor-detail-wrapper">
    <div class="index">
      <div class="vendor-header">
        <span class="platform">纺织平台</span>
        <i class="rightArrow"></i>
        <span class="vendor-name">{{vendorName}}</span>
      </div>
      <div class="vendor-detail">
        <div class="vendor-img"><img src="src/assets/vendor/binbin.jpg" /></div>
        <div class="detail-right">
          <div class="detail-name">{{vendorName}}</div>
          <div class="detail-wrapper">
            <div class="detail-item-per">
              <i class="item-address-icon"></i>
              <label class="detail-title">地址</label>
              <span class="detail-value">{{address}}</span>
            </div>
            <div class="detail-item-per">
              <i class="item-phone-icon"></i>
              <label class="detail-title">电话</label>
              <span class="detail-value">{{phone}}</span>
            </div>
            <div class="detail-item-per">
              <i class="item-tax-icon"></i>
              <label class="detail-title">传真</label>
              <span class="detail-value">{{tax}}</span>
            </div>
            <div class="detail-item-per">
              <i class="item-product-icon"></i>
              <label class="detail-title">产品</label>
              <span class="product-type">{{product}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="product-buy">
      <div class="product-buy-wrapper">
        <div class="per-item">
          <label class="per-title">选择产品</label>
          <div class="product-item-right">
            <el-radio-group v-model="selectedProduct">
              <el-radio-button v-for="item in products" :key='item.key' :label='item.name'></el-radio-button>
            </el-radio-group>
          </div>
        </div>
        <div class="per-item">
          <label class="per-title">选择支数</label>
          <div class="product-item-right">
            <el-radio-group v-model="selectedSize">
              <el-radio-button v-for="item in sizes" :key='item.key' :label='item.name'></el-radio-button>
            </el-radio-group>
          </div>
        </div>
        <div class="per-item">
          <label class="per-title">选择色号</label>
          <div class="product-item-right">
            <el-input class="select-color"></el-input>
            <a class="color-card">查看色卡</a>
          </div>
        </div>
        <div class="per-item">
          <label class="per-title">选择数量</label>
          <div class="product-item-right">
            <el-input-number v-model="number" :min="1" :max="9999"></el-input-number>
          </div>
        </div>
        <div class="per-item">
          <label class="per-title">价格</label>
          <div></div>
        </div>
        <div class="product-control">
          <a class="buy-car"><i class="buy-car-icon"></i><span>加入购物车</span></a>
          <a class="ask-for-card"><i class="ask-for-card-icon"></i><span>索要色卡</span></a>
          <a class="buy-now" @click="jumpToFirm"><i class="buy-now-icon"></i><span>立即购买</span></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'VendorDetail',
    data () {
      return {
        vendorName: '彬彬纺织贸易有限公司',
        address: '广东省东莞市大朗镇康丰路90号',
        phone: '13922973319',
        tax: '0769-83019915',
        product: '长纤人造毛',
        products: [
          {
            name: '长纤人造毛',
            key: 'renzaomao'
          }, {
            name:'抗起球冰爽丝',
            key: 'bingshuang'
          }, {
            name: '仿亚麻',
            key: 'yama'
          }],
        selectedProduct: '长纤人造毛',
        sizes: [
          {
            name: '28/2',
            key: '28'
          }, {
            name:'24/2',
            key: '24'
          }, {
            name: '22/2',
            key: '22'
          }],
        selectedSize: '24/2',
        number: 1
      }
    },
    methods: {
      jumpToFirm: function() {
        this.$router.push('/firmorder');
      }
    },

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .vendor-detail-wrapper {
    font-family: Microsoft YaHei;
  }
  .index {
    width: 1280px;
    margin: 0 auto;
  }
  .vendor-header {
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
  .vendor-name {
    font-weight: bold;
    font-size: 16px;
    color: #F57905;
    position: absolute;
    left: 110px;
    top: 1px;
  }
  .vendor-detail {
    width: 1280px;
    height: 450px;
    position: relative;
    margin-bottom: 40px;
  }
  .vendor-img {
    height: 450px;
    position: absolute;
    left: 0px;
  }
  .vendor-img img {
    height: 450px;
  }
  .detail-right {
    height: 450px;
    width: 850px;
    position: absolute;
    left: 420px;
  }
  .detail-name {
    position: absolute;
    top: 0px;
    font-weight: bold;
    font-size: 36px;
    color: #333333;
  }
  .detail-wrapper {
    width: 850px;
    position: absolute;
    top: 140px;
    left: 0px;
    font-size: 20px;
    color: #333333;
  }
  .detail-item-per {
    height: 45px;
    margin-bottom: 30px;
    position: relative;
  }
  .item-address-icon {
    display:inline-block;
    background: url("../assets/vendor/location-1.png") no-repeat;
    background-size: 45px 45px;
    width: 45px;
    height: 45px;
    position: absolute;
    left: 0px;
  }
  .item-phone-icon {
    display:inline-block;
    background: url("../assets/vendor/tel.png") no-repeat;
    background-size: 45px 45px;
    width: 45px;
    height: 45px;
    position: absolute;
    left: 0px;
  }
  .item-tax-icon {
    display:inline-block;
    background: url("../assets/vendor/fax.png") no-repeat;
    background-size: 45px 45px;
    width: 45px;
    height: 45px;
    position: absolute;
    left: 0px;
  }
  .item-product-icon {
    display:inline-block;
    background: url("../assets/vendor/product.png") no-repeat;
    background-size: 45px 45px;
    width: 45px;
    height: 45px;
    position: absolute;
    left: 0px;
  }
  .detail-title {
    font-size: 22px;
    color: #333333;
    width: 80px;
    position: absolute;
    left: 80px;
    top: 10px;
    text-align: left;
  }
  .detail-value {
    font-size: 22px;
    color: #999999;
    position: absolute;
    left: 180px;
    top: 10px;
  }
  .product-type {
    color: #F57905;
    font-size: 22px;
    position: absolute;
    left: 180px;
    top: 10px;
  }
  .product-buy {
    background-color: #5C544D;
    padding-bottom: 30px;
  }
  .product-buy-wrapper {
    width: 1280px;
    margin: 0 auto;
    padding-top: 40px;
    position: relative;
  }
  .per-item {
    height: 55px;
    position: relative;
    margin-bottom: 30px;
  }
  .per-title {
    display: inline-block;
    width: 110px;
    font-size: 20px;
    color: #FFFFFF;
    position: absolute;
    left: 0px;
    top: 15px;
  }
  .product-item-right {
    height: 55px;
    position: absolute;
    left: 140px;
  }
  .select-color {
    width: 280px;
    position: absolute;
    left: 0px;
  }
  .color-card {
    display: inline-block;
    width: 100px;
    text-decoration: underline;
    position: absolute;
    left: 300px;
    bottom: 8px;
    font-size: 16px;
    color: #F57905;
    cursor: pointer;
  }
  .product-control {
    height: 60px;
    position: relative;
  }
  .buy-now, .ask-for-card, .buy-car {
    display: inline-block;
    width: 160px;
    height: 60px;
    background-color: #F57905;
    border-radius: 5px;
    position: absolute;
    top: 0px;
    right: 0px;
    cursor: pointer;
  }
  .buy-now {
    right: 0px;
  }
  .ask-for-card {
    right: 190px;
  }
  .buy-car {
    right: 380px;
  }
  .buy-now span, .ask-for-card span, .buy-car span {
    font-size: 20px;
    color: #fff;
    font-weight: bold;
    position: absolute;
    top: 15px;
    left: 55px;
  }
  .buy-now-icon {
    display:inline-block;
    background: url("../assets/product/buy.png") no-repeat;
    background-size: 30px 30px;
    width: 30px;
    height: 30px;
    position: absolute;
    left: 12px;
    top: 14px;
  }
  .ask-for-card-icon {
    display:inline-block;
    background: url("../assets/product/colorCard.png") no-repeat;
    background-size: 30px 30px;
    width: 30px;
    height: 30px;
    position: absolute;
    left: 12px;
    top: 14px;
  }
  .buy-car-icon {
    display:inline-block;
    background: url("../assets/product/addToCar.png") no-repeat;
    background-size: 30px 30px;
    width: 30px;
    height: 30px;
    position: absolute;
    left: 12px;
    top: 14px;
  }
</style>
