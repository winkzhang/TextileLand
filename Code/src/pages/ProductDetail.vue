<template>
  <div class="product-detail-wrapper">
    <div class="index">
      <div class="product-header">
        <span class="platform">纺织平台</span>
        <i class="rightArrow"></i>
        <span class="product-name">{{productName}}</span>
      </div>
      <div class="product-detail">
        <div class="product-img"><img src="src/assets/product/fangyangrong.jpg" /></div>
        <div class="detail-right">
          <div class="detail-name">{{productName}}</div>
          <div class="detail-wrapper">
            <div><div class="detail-item"><label class="detail-title detail-intro">简介：</label><label class="detail-value detail-intro-value">{{productIntro}}</label></div></div>
            <div class="detail-item" style="visibility: hidden"><label class="detail-title">简介：</label><label class="detail-value">{{productIntro}}</label></div>
            <i class="detail-line"></i>
            <div class="detail-item-per"><label class="detail-title">成分：</label><label class="detail-value">{{productIngre}}</label></div>
            <div class="detail-item-per"><label class="detail-title">特点：</label><label class="detail-value">{{productCharac}}</label></div>
            <div class="detail-item-per"><label class="detail-title">制作：</label><label class="detail-value">{{productMake}}</label></div>
            <div class="detail-item-per"><label class="detail-title">价格：</label><label class="detail-value">市场价约 <span>{{productPrice}}</span> 元/kg</label></div>
          </div>
        </div>
      </div>
    </div>
    <div class="product-buy">
      <div class="product-buy-wrapper">
        <div class="per-item">
          <label class="per-title">选择商家</label>
          <div class="product-item-right">
            <el-radio-group v-model="selectedStore">
              <el-radio-button v-for="item in stores" :key='item.key' :label='item.name'></el-radio-button>
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
          <a class="buy-now"><i class="buy-now-icon"></i><span>立即购买</span></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ProductDetail',
    components: {

    },
    data () {
      return {
        productName: "长纤人造毛",
        productIntro: "仿羊绒，是由晴纶经过特殊的工艺处理，使腈纶具有天然羊绒那种平滑、柔软，而富有弹性的手感，同时具有晴纶优良的染色性能的毛线。仿羊绒腈纶的纺丝、毛条的制造技术国内尚属首创。仿羊绒腈纶其独特的功能是膨松性和柔软性。",
        productIngre: "100%Acrylic",
        productCharac: "平滑、柔软，而富有弹性。",
        productMake: "由腈纶经过特殊的工艺处理。",
        productPrice: "30",
        stores: [
          {
            name: '彬彬纺织贸易有限公司',
            key: 'binbin'
          }, {
            name:'泓鑫泰纺织有限公司',
            key: 'hong'
          }, {
            name: '锦淼纺织有限公司',
            key: 'jinmiao'
          }, {
            name: '广顺棉纱经营部',
            key: 'guangshun'
          }],
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
        selectedStore: "彬彬纺织贸易有限公司",
        selectedSize: '24/2',
        number: 1
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
.product-detail-wrapper {
  font-family: Microsoft YaHei;
}
.index {
  width: 1280px;
  margin: 0 auto;
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
.product-detail {
  width: 1280px;
  height: 450px;
  position: relative;
  margin-bottom: 40px;
}
.product-img {
  height: 450px;
  position: absolute;
  left: 0px;
}
.product-img img {
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
  top: 80px;
  left: 0px;
  font-size: 20px;
  color: #333333;
}
.detail-title {
  display: inline-block;
  width: 100px;
  text-align: left;
}
.detail-value {
  display: inline-block;
  width: 750px;
  text-align: left;
}
.detail-item {
  width: 850px;
  position: relative;
  margin-bottom: 22px;
}
.detail-intro {
  position: absolute;
  top: 0px;
  left: 0px;
}
.detail-intro-value {
  position: absolute;
  top: 0px;
  left: 100px;
}
.detail-line {
  display: inline-block;
  width: 850px;
  height: 2px;
  background-color: #F57905;
}
.detail-item-per {
  height: 30px;
  margin-top: 25px;
}
.detail-value span {
  color: #F57905;
  font-size: 24px;
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
