<template>
  <div id="app">
    <div class="header">
      <div class="header-wrapper">
        <i class="logo logo-header"></i>
        <a class="login action" @click="showLogIn = true">登录</a>
        <a class="register action">注册</a>
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
        <div class="box-header"></div>
        <div class="login-content"></div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      showLogIn: false
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
    left: 0px;
  }
  .logo-footer {
    top: 20px;
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
    overflow-x: hidden;
    overflow-y: hidden;
  }

  .box-header {
    height: 65px;
    width: 483px;
    background-color: #333;
  }
</style>
