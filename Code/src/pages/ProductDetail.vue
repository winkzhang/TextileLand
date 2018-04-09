<template>
  <div class="product-detail-wrapper">
    <div class="index">
      <div class="product-header">
        <span class="platform">纺织平台</span>
        <i class="rightArrow"></i>
        <span class="product-name">{{productName}}</span>
      </div>
      <div class="product-detail">
        <div class="product-img"><img :src="imageName" width="360" height="450" /></div>
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
              <el-radio-button v-for="item in stores" :key='item.id' :label='item.company_name'></el-radio-button>
            </el-radio-group>
          </div>
        </div>
        <div class="per-item">
          <label class="per-title">选择支数</label>
          <div class="product-item-right">
            <el-radio-group v-model="selectedSize">
              <el-radio-button v-for="item in sizes" :key='item' :label='item'></el-radio-button>
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
          <div class="product-item-right">
            <label class="show_price">{{price}}</label>
          </div>
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
    name: 'ProductDetail',
    components: {

    },
    data () {
      return {
        productName: "",
        productIntro: "",
        productIngre: "",
        productCharac: "",
        productMake: "",
        productPrice: "",
        stores: [],
        sizes: [],
        selectedStore: "",
        selectedSize: '',
        number: 1,
        price: '',
        imageName: "",
        productId: ""
      }
    },
    methods: {
      jumpToFirm: function() {
        this.$router.push('/firmorder');
      },
      getProductDetail: function(productId) {
        this.$http.get(this.$api.api.getproductdetail+productId).then(
          (response) => {
            if (JSON.parse(response.bodyText).isSuccess === true) {
              this.productName = JSON.parse(response.bodyText).data.name;
              this.productIntro = JSON.parse(response.bodyText).data.info;
              this.productIngre = JSON.parse(response.bodyText).data.ingredient;
              this.productCharac = JSON.parse(response.bodyText).data.feature;
              this.productMake = JSON.parse(response.bodyText).data.manufacture;
              this.productPrice = JSON.parse(response.bodyText).data.average_price;
              if (JSON.parse(response.bodyText).data.stores.length !== 0) {
                this.stores = JSON.parse(response.bodyText).data.stores;
                this.selectedStore = this.stores[0].company_name;
              }
              var id = JSON.parse(response.bodyText).data.id;
              switch (id) {
                case 1:
                  this.imageName = "static/renzaomao.png";
                  break;
                case 2:
                  this.imageName = "static/baoxinsha.png";
                  break;
                case 3:
                  this.imageName = "static/mahaimao.png";
                  break;
                case 4:
                  this.imageName = "static/bingshuangsi.png";
                  break;
                case 5:
                  this.imageName = "static/siguangmian.png";
                  break;
                case 6:
                  this.imageName = "static/miansha.png";
                  break;
                case 7:
                  this.imageName = "static/fangyama.png";
                  break;
                case 8:
                  this.imageName = "static/shuangqu.png";
                  break;
                case 9:
                  this.imageName = "static/qingmian.png";
                  break;
                case 10:
                  this.imageName = "static/lajia.png";
                  break;
              }
            } else {
              this.$message(JSON.parse(response.bodyText).msg);
            }
          })
      },
      getSpec: function() {
        var companyName = this.selectedStore;
        var getspec = '';
        getspec = this.$api.api.getspec.replace(/productid/, this.productId);
        getspec = getspec.replace(/companyname/, companyName);
        this.$http.get(getspec).then(
          (response) => {
            if (JSON.parse(response.bodyText).isSuccess === true) {
              this.sizes = JSON.parse(response.bodyText).data.specs;
              if (this.sizes.length !== 0) {
                this.selectedSize = this.sizes[0];
              }
            } else {
              this.$message(JSON.parse(response.bodyText).msg);
            }
          })
      },
      getPrice: function() {
        var getprice = '';
        getprice = this.$api.api.getprice.replace(/productid/,this.productId);
        getprice = getprice.replace(/companyname/, this.selectedStore);
        getprice = getprice.replace(/specvalue/, this.selectedSize);
        getprice = getprice.replace(/numbervalue/, this.number);
        this.$http.get(getprice).then(
          (response) => {
            if (JSON.parse(response.bodyText).isSuccess === true) {
              this.price = JSON.parse(response.bodyText).data.price;
            } else {
              this.$message(JSON.parse(response.bodyText).msg);
            }
          })
      }
    },
    watch: {
      selectedStore() {
        this.getSpec();
        //this.getPrice();
      },
      selectedSize() {
        this.getPrice();
      },
      number() {
        this.getPrice();
      }

    },
    mounted () {
      this.productId = this.$route.params.id;
      this.getProductDetail(this.productId);
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
.show_price {
  display: inline-block;
  width: 100px;
  height: 45px;
  font-size: 30px;
  color: #fff;
  position: relative;
  top: 7px;
}
</style>
