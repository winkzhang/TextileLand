<template>
  <div id="app">
    <div class="header">
      <div class="header-wrapper">
        <i class="logo logo-header"></i>
        <div v-show="nouser">
          <a class="login action" @click="showLogIn = true">登录</a>
          <a class="register action" @click="showSignUp = true">注册</a>
        </div>
        <div v-show="haveuser">
          <i class="buy-car new-action" @click="toShowBuyCar"></i>
          <i class="my-order new-action" @click="jumpToOrder"></i>
          <span class="username">{{username}}</span>
        </div>
      </div>
    </div>
    <router-view/>
    <div class="footer">
      <div class="footer-wrapper">
        <i class="logo logo-footer"></i>
        <i class="logo-ch"></i>
        <span class="word-footer">网站首页</span>
        <span class="word-footer" style="right:240px;">联系我们</span>
        <span class="word-footer" style="right:360px;">版权所有</span>
      </div>
    </div>
    <el-dialog :visible.sync="showLogIn">
      <!--在el-dialog加类会导致点击其他地方不能关掉-->
      <div class="login-box">
        <div class="box-header">
          <i class="logo logo-login"></i>
        </div>
        <div class="login-content">
          <div class="login-title">登录</div>
          <div class="login-item"><label>手机号</label><input class="login-input" type="text" v-model="loginPhone" /></div>
          <div class="login-item"><label>密码</label><input class="login-input" type="password" v-model="loginPassword" /></div>
          <a class="login-button" @click="login"><span>登录</span></a>
        </div>
      </div>
    </el-dialog>
    <el-dialog :visible.sync="showSignUp">
      <!--在el-dialog加类会导致点击其他地方不能关掉-->
      <div class="sign-box">
        <div class="box-header">
          <i class="logo logo-login"></i>
        </div>
        <div class="sign-content">
          <div class="sign-title">注册</div>
          <div class="sign-item"><label>手机号</label><input class="login-input" type="text" v-model="signUpPhone" /></div>
          <div class="sign-item"><label>用户名</label><input class="login-input" type="text" v-model="signUpName" /></div>
          <div class="sign-item"><label>密码</label><input class="login-input" type="password" v-model="signUpPassword" /></div>
          <div class="sign-item"><label>确认密码</label><input class="login-input" type="password" /></div>
          <a class="sign-button" @click="signup"><span>注册</span></a>
        </div>
      </div>
    </el-dialog>
    <el-dialog :visible.sync="showBuyCar">
      <div class="buy-box">
        <div class="buy-box-header">
          <i class="logo buy-logo-login"></i>
        </div>
        <div class="buy-car-content">
          <div class="buy-car-detail">
            <div class="buy-car-item" v-for="item in buyCar">
              <input name="favor" type="checkbox" />
              <div class="car-item-name">
                <span class="car-product-name">{{item.name}}</span>
                <span>{{item.spec}}</span>
                <span>{{item.color}}</span>
              </div>
              <div class="car-item-store">
                <i class="car-img"></i>
                <span>{{item.store}}</span>
              </div>
              <div class="car-price">￥{{item.price}}</div>
              <input type="text" v-model="item.number" class="car-number"/>
              <span class="car-number-unit">kg</span>
              <a class="car-delete">删除</a>
            </div>
          </div>
          <div class="car-footer">
            <span class="account-word">合计：</span>
            <span class="account-price">￥{{totalPrice}}</span>
            <a class="account-button" @click="goPay">结算</a>
          </div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      showLogIn: false,
      showSignUp: false,
      showBuyCar: false,
      loginPhone: '',
      loginPassword: '',
      signUpPhone: '',
      signUpName: '',
      signUpPassword: '',
      nouser: true,
      haveuser: false,
      username: '',
      buyCar: [
        {
          id: "1",
          name: "长纤人造毛",
          store: "彬彬纺织贸易有限公司",
          spec: "24/2",
          color: "92222",
          price: 60,
          number: 2
        },
        {
          id: "2",
          name: "有色丝光棉",
          store: "广顺纺织贸易部",
          spec: "28/2",
          color: "828333",
          price: 100,
          number: 4
        }
      ],
      totalPrice: 520
    }
  },
  methods: {
    login: function() {
      this.showLogIn = false;
      var login = {
        "number": this.loginPhone,
        "password": this.loginPassword,
        "identity": "customer"
      }
      this.$http.post('http://wink.net.cn:5000/login', login).then(
        (response) => {
          //console.log(JSON.parse(response.bodyText));
          //console.log(JSON.parse(response.bodyText).msg);
          this.$message(JSON.parse(response.bodyText).msg);
          if (JSON.parse(response.bodyText).isSuccess === true) {
            this.nouser = false;
            this.haveuser = true;
            this.username = JSON.parse(response.bodyText).data;
          }
        })
    },
    signup: function() {
      this.showSignUp = false;
      var login = {
        "number": this.signUpPhone,
        "username": this.signUpName,
        "password": this.signUpPassword,
        "identity": "customer"
      }
      this.$http.post('http://wink.net.cn:5000/signup', login).then(
        (response) => {
          this.$message(JSON.parse(response.bodyText).msg);
          //console.log(response.data.isSuccess);
          //console.log(response.data.msg);
        })
    },
    jumpToOrder: function() {
      this.$router.push('/myorder');
    },
    goPay: function() {
      this.showBuyCar = false;
      this.$router.push('/firmorder');
    },
    toShowBuyCar: function() {
      this.showBuyCar = true;
    }
  }
}
</script>

<style>
  #app {
    font-family: Microsoft YaHei, 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: -7px;
    margin-left: -7px;
    margin-right: -7px;
  }
  .header {
    height: 50px;
    background-color: #333333;
    /*position: relative;*/
  }
  .header-wrapper {
    width: 1280px;
    height: 50px;
    margin: 0 auto;
    position: relative;
  }
  .logo {
    display:inline-block;
    background: url("assets/header/logo.png") no-repeat;
    background-size: 140px 50px;
    width: 140px;
    height: 50px;
    position: absolute;
  }
  .logo-header {
    left: 0px;
  }
  .logo-footer {
    top: 20px;
    left: 0px;
  }
  .logo-ch {
    display:inline-block;
    background: url("assets/header/logo-ch.png") no-repeat;
    background-size: 140px 40px;
    width: 140px;
    height: 40px;
    position: absolute;
    left: 0px;
    top: 70px;
  }
  .action {
    display: inline-block;
    position: absolute;
    top: 15px;
    width: 45px;
    height: 40px;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
  }
  .login {
    right: 65px;
  }
  .register {
    right: 0px;
  }
  .username {
    position: absolute;
    top: 15px;
    color: #ffffff;
    font-size: 16px;
    right: 0px;
  }
  .new-action {
    display: inline-block;
    position: absolute;
    top: 10px;
    width: 32px;
    height: 32px;
    cursor: pointer;
  }
  .my-order {
    background: url('assets/header/order.png') no-repeat;
    background-size: 32px 32px;
    right: 60px;
  }
  .buy-car {
    background: url('assets/header/shoppingcar.png') no-repeat;
    background-size: 32px 32px;
    right: 110px;
  }
  .footer {
    height: 160px;
    background-color: #333333;

  }
  .footer-wrapper {
    height: 160px;
    width: 1280px;
    margin: 0 auto;
    position: relative;

  }
  .word-footer {
    color: #fff;
    font-size: 13px;
    position: absolute;
    top: 80px;
    right: 120px;
  }
  .VueCarousel-pagination[data-v-7e42136f] {
    width: 100%;
    position: relative;
    top: -90px;
    text-align: center;
  }
  .el-dialog__header {
    display: none;
  }
  .el-dialog__body {
    padding: 0;
  }
  .login-box {
    height: 389px;
    width: 483px;
    background-color: #fff;
    position: fixed;
    top: 20%;
    left: 30%;
  }
  .sign-box {
    height: 474px;
    width: 483px;
    background-color: #fff;
    position: fixed;
    top: 16%;
    left: 30%;
  }
  .buy-box {
    height: 504px;
    width: 584px;
    background-color: #fff;
    position: fixed;
    top: 16%;
    left: 28%;
  }
  .box-header {
    height: 65px;
    width: 483px;
    background-color: #333;
    position: relative;
  }
  .buy-box-header {
    height: 65px;
    width: 584px;
    background-color: #333;
    position: relative;
  }
  .login-content {
    height: 324px;
    width: 483px;
  }
  .sign-content {
    height: 409px;
    width: 483px;
  }
  .buy-car-content {
    width: 584px;
    height: 439px;
    position: relative;
  }
  .car-footer {
    position: absolute;
    bottom: 50px;
    height: 50px;
    width: 584px;
  }
  .account-button {
    display: inline-block;
    width: 78px;
    height: 37px;
    background-color: #F57905;
    color: #fff;
    border-radius: 5px;
    font-weight: bold;
    font-size: 18px;
    position: absolute;
    right: 30px;
    text-align: center;
    padding-top: 10px;
    cursor: pointer;
  }
  span.account-price {
    color: #F57905;
    font-weight: bold;
    font-size: 20px;
    position: absolute;
    right: 130px;
    top: 10px;
  }
  span.account-word {
    color: #333333;
    font-weight: normal;
    font-size: 18px;
    position: absolute;
    right: 185px;
    top: 10px;
  }
  .buy-car-detail {
    width: 524px;
    margin: 30px auto;
  }
  .buy-car-item {
    height: 95px;
    width: 524px;
    border-bottom: 1px solid #F57905;
    position: relative;
  }
  .buy-car-item input {
    width: 20px;
    height: 20px;
    position: absolute;
    top: 37px;
    left: 0px;
  }
  .car-item-name {
    height: 23px;
    position: absolute;
    top: 20px;
    left: 40px;
  }
  .car-item-store {
    height: 20px;
    position: absolute;
    top: 50px;
    left: 40px;
  }
  .car-item-name span.car-product-name {
    font-size: 16px;
    color: #333333;
    margin-right: 16px;
  }
  .car-item-name span {
    font-size: 14px;
    color: #999999;
    margin-right: 12px;
  }
  .car-item-store span {
    position: absolute;
    width: 200px;
    top: 10px;
    left: 30px;
    font-size: 14px;
    color: #999999;
    text-align: left;
  }
  .car-img {
    display: inline-block;
    background: url("assets/home/stores.png") no-repeat;
    background-size: 20px 20px;
    width: 20px;
    height: 20px;
    position: absolute;
    top: 10px;
  }
  .car-price {
    position: absolute;
    top: 37px;
    left: 250px;
    font-weight: bold;
    font-size: 20px;
    color: #F57905;
  }
  input.car-number {
    position: absolute;
    top: 32px;
    left: 330px;
    font-size: 16px;
    color: #F57905;
    text-align: center;
    width: 60px;
    height: 30px;
    border: 2px solid #F57905;
    border-radius: 8px;
  }
  .car-number-unit {
    position: absolute;
    top: 37px;
    left: 405px;
    font-size: 12px;
    color: #999999;
  }
  .car-delete {
    cursor: pointer;
    position: absolute;
    top: 37px;
    right: 30px;
    font-size: 12px;
    color: #999999;
  }
  .logo-login {
    top: 5px;
    left: 171.5px;
  }
  .buy-logo-login {
    top: 5px;
    left: 230px;
  }
  .login-title {
    width: 130px;
    height: 45px;
    font-weight: bold;
    font-size: 24px;
    color: #333333;
    margin:  30px auto;
  }
  .sign-title {
    width: 130px;
    height: 45px;
    font-weight: bold;
    font-size: 24px;
    color: #333333;
    margin:  16px auto;
  }
  .login-item {
    height: 41px;
    width: 423px;
    margin: 0 auto 30px auto;
    position: relative;
  }
  .sign-item {
    height: 41px;
    width: 423px;
    margin: 0 auto 25px auto;
    position: relative;
  }
  .login-item label, .sign-item label {
    display: inline-block;
    width: 74px;
    position: absolute;
    left: 0px;
    top: 10px;
    text-align: right;
    font-size: 18px;
    color: #333333;
  }
  .login-input {
    width: 300px;
    height: 41px;
    position: absolute;
    left: 110px;
    border: 1px solid #979797;
    border-radius: 5px;
  }
  .el-input__inner {
    height: 41px;
    border: 0px solid #979797;
  }
  .login-button {
    display: inline-block;
    width: 398px;
    height: 48px;
    background-color: #F57905;
    color: #fff;
    font-weight: bold;
    font-size: 18px;
    border-radius: 8px;
    cursor: pointer;
  }
  .login-button span, .sign-button span {
    display: inline-block;
    margin-top: 10px;
  }
  .sign-button {
    display: inline-block;
    width: 412px;
    height: 48px;
    background-color: #F57905;
    color: #fff;
    font-weight: bold;
    font-size: 18px;
    border-radius: 8px;
    cursor: pointer;
  }
  .el-radio-button {
    display: inline-block;
    position: relative;
    outline: 0;
    margin-right: 20px;
    height: 55px;
    border: 0px solid #F57905;
    background-color: #5C544D;
    color: #fff;
  }
  .el-radio-button__inner {
    display: inline-block;
    position: relative;
    outline: 0;
    height: 55px;
    border: 2px solid #F57905;
    background-color: #5C544D;
    padding: 16px 20px;
    border-radius: 8px;
    color: #fff;
    font-size: 16px;
  }
.el-radio-button:last-child .el-radio-button__inner {
    border: 2px solid #F57905;
    border-radius: 8px;
}
  .el-radio-button:first-child .el-radio-button__inner {

    border: 2px solid #F57905;
    border-radius: 8px;
  }
  .el-radio-button__orig-radio:checked+.el-radio-button__inner {
    background-color: #F57905;
    box-shadow: none;
    border-color: #F57905;
  }
  .el-input__inner {
    background-color: #5C544D;
    border: 2px solid #F57905;
    height: 55px;
    border-radius: 8px;
    color: #fff;
  }
  .el-input-number__decrease,  .el-input-number__increase{
    height: 43px;
    width: 50px;
    border-radius-bottomleft: 8px;
    border-radius-topleft: 8px;
    border: 2px solid #F57905;
    background-color: #F57905;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    padding-top: 5px;
  }
  .el-input-number .el-input {
    border-radius: 8px;
  }
  .el-input-number__decrease:hover, .el-input-number__increase:hover {
    color: #fff;
  }
</style>
