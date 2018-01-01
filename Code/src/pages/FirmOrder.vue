<template>
  <div class="index">
    <div class="product-header">
      <span class="platform">纺织平台</span>
      <i class="rightArrow"></i>
      <span class="product-name">{{pageName}}</span>
    </div>
    <div class="receiver">
      <span>收货人信息</span>
      <i class="line"></i>
      <div class="receiver-detail">
        <div class="receiver-item">
          <label>收货人</label>
          <input type="text" />
        </div>
        <div class="receiver-item">
          <label>手机号</label>
          <input type="text" />
        </div>
        <div class="receiver-item">
          <label>收获地址</label>
          <input type="text" />
        </div>
      </div>
    </div>
    <div class="order">
      <span>订单信息</span>
      <i class="order-line"></i>
      <div class="order-detail">
        <div v-for="item in orders" class="item-per">
          <div class="order-header">
            <span>{{item.name}}</span>
            <i class="delete"></i>
          </div>
          <div class="order-item">
            <i class="order-store"></i>
            <span>{{item.store}}</span>
          </div>
          <div class="order-item">
            <i class="order-spec"></i>
            <span>{{item.spec}}</span>
          </div>
          <div class="order-item">
            <i class="order-color"></i>
            <span>{{item.color}}</span>
          </div>
          <div class="order-price">
            <span class="order-per-price">￥{{item.price}}</span>
            <span class="order-number">x<span class="order-per-number">{{item.number}}</span>kg</span>
          </div>
        </div>
      </div>
      <div class="account">
        <span class="account-word">合计：</span>
        <span class="account-price">￥{{totalPrice}}</span>
        <a class="account-button" @click="goPay">去支付</a>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'FirmOrder',
    data () {
      return {
        pageName: '确认订单',
        orders: [],
        totalPrice: 575
      }
    },
    methods: {
      getOrder: function () {
        var orders = [];
        var detail1 = {};
        detail1.name = "丝光棉";
        detail1.store = "广顺棉纱经营部";
        detail1.spec = "28/2";
        detail1.color = "828333";
        detail1.price = 100;
        detail1.number = 4;
        var detail2 = {};
        detail2.name = "长纤人造毛";
        detail2.store = "彬彬纺织贸易有限公司";
        detail2.spec = "24/2";
        detail2.color = "922222";
        detail2.price = 60;
        detail2.number = 2;
        var detail3 = {};
        detail3.name = "兔绒包芯纱";
        detail3.store = "泓鑫泰纺织有限公司";
        detail3.spec = "28/2";
        detail3.color = "834533";
        detail3.price = 55;
        detail3.number = 1;
        orders.push(detail1);
        orders.push(detail2);
        orders.push(detail3);
        return orders;
      },
      goPay: function() {
        this.$router.push('/pay');
      }
    },
    mounted () {
      this.orders = this.getOrder();
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
.receiver {
  position: relative;
  height: 300px;
}
.order {
  text-align: left;
}
.receiver span {
  font-size: 18px;
  font-weight: bold;
  color: #333333;
  position: absolute;
  left: 0px;
}
.order span {
  font-size: 18px;
  font-weight: bold;
  color: #333333;
}
.line {
  position: absolute;
  left: 0px;
  top: 40px;
  display: inline-block;
  width: 1280px;
  height: 1px;
  background-color: #999999;
}
.order-line {
  display: inline-block;
  width: 1280px;
  height: 1px;
  background-color: #999999;
}
.receiver-detail {
  width: 1280px;
  position: absolute;
  left: 0px;
  top: 70px;
  text-align: left;
}
.receiver-item {
  height: 41px;
  margin-bottom: 25px;
}
.receiver-item label {
  width: 70px;
  display: inline-block;
  text-align: right;
  font-size: 16px;
  color: #333333;
  margin-right: 20px;
}
.receiver-item input {
  width: 458px;
  height: 41px;
  border-radius: 5px;
  border: 1px solid #979797;
  font-size: 16px;
}
.order-detail {
  text-align: left;
  /*解决子元素浮动父元素不能被撑开问题*/
  overflow: hidden;
  zoom: 1;
  margin-left: -26px;
}
.item-per {
  height: 326px;
  width: 300px;
  float: left;
  margin-left: 24px;
  margin-top: 30px;
  background-color: #fff;
  border-radius: 8px;
  border: 1px solid #F57905;
  box-shadow: 2px 2px 3px #999999;
}
.order-header {
  width: 300px;
  height: 84px;
  background-color: #F57905;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  position: relative;
  text-align: center;
}
.order-header span {
  font-weight: bold;
  font-size: 24px;
  color: #fff;
  position: relative;
  top: 25px;
}
.order-header i {
  display: inline-block;
  background: url("../assets/order/delete.png") no-repeat;
  background-size: 28px 28px;
  width: 28px;
  height: 28px;
  position: absolute;
  top: 28px;
  right: 25px;
  cursor: pointer;
}
.order-item {
  height: 40px;
  margin-top: 20px;
  position: relative;
}
.order-store {
  display: inline-block;
  background: url("../assets/home/stores.png") no-repeat;
  background-size: 36px 36px;
  width: 36px;
  height: 36px;
  position: absolute;
  left: 20px;
}
.order-spec {
  display: inline-block;
  background: url("../assets/order/size.png") no-repeat;
  background-size: 36px 36px;
  width: 36px;
  height: 36px;
  position: absolute;
  left: 20px;
}
.order-color {
  display: inline-block;
  background: url("../assets/order/color.png") no-repeat;
  background-size: 36px 36px;
  width: 36px;
  height: 36px;
  position: absolute;
  left: 20px;
}
.order-item span {
  position: absolute;
  left: 80px;
  top: 8px;
  font-weight: normal;
  font-size: 18px;
}
.order-price {
  height: 61px;
  margin-top: 16px;
  position: relative;
}
span.order-per-price {
  position: absolute;
  left: 20px;
  font-size: 24px;
  color: #F57905;
}
span.order-number {
  position: absolute;
  right: 25px;
  font-size: 18px;
  color: #333333;
  font-weight: normal;
}
span.order-number .order-per-number {
  font-size: 24px;
  color: #F57905;
  font-weight: bold;
  margin-left: 5px;
  margin-right: 5px;
}
.account {
  height: 60px;
  margin-top: 50px;
  position: relative;
  margin-bottom: 30px;
}
.account-button {
  display: inline-block;
  width: 120px;
  height: 40px;
  background-color: #F57905;
  color: #fff;
  border-radius: 5px;
  font-weight: bold;
  font-size: 24px;
  position: absolute;
  right: 0px;
  text-align: center;
  padding-top: 10px;
  cursor: pointer;
}
span.account-price {
  color: #F57905;
  font-weight: bold;
  font-size: 24px;
  position: absolute;
  right: 140px;
  top: 10px;
}
span.account-word {
  color: #333333;
  font-weight: normal;
  font-size: 18px;
  position: absolute;
  right: 210px;
  top: 13px;
}
</style>
