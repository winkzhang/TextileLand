<template>
  <div id="app">
    <div class="header">
      <div class="header-wrapper">
        <i class="logo logo-header"></i>
        <a class="login action" @click="showLogIn = true">登录</a>
        <a class="register action" @click="showSignUp = true">注册</a>
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
          <div class="login-item"><label>手机号</label><el-input class="login-input" type="text"></el-input></div>
          <div class="login-item"><label>密码</label><el-input class="login-input" type="password" ></el-input></div>
          <a class="login-button" @click="showLogIn = false"><span>登录</span></a>
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
          <div class="sign-item"><label>手机号</label><el-input class="login-input" type="text"></el-input></div>
          <div class="sign-item"><label>用户名</label><el-input class="login-input" type="text"></el-input></div>
          <div class="sign-item"><label>密码</label><el-input class="login-input" type="password" ></el-input></div>
          <div class="sign-item"><label>确认密码</label><el-input class="login-input" type="password" ></el-input></div>
          <a class="sign-button" @click="showSignUp = false"><span>注册</span></a>
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
      showSignUp: false
    }
  },
  methods: {
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

  .box-header {
    height: 65px;
    width: 483px;
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
  .logo-login {
    top: 5px;
    left: 171.5px;
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
</style>
