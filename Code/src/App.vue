<template>
  <div id="app">
    <div class="header">
      <i class="logo logo-header"></i>
      <button class="login action">登录</button>
      <button class="register action">注册</button>
    </div>
    <router-view/>
    <div class="footer">
      <i class="logo logo-footer"></i>
      <i class="logo-ch"></i>
      <span class="word-footer">网站首页</span>
      <span class="word-footer" style="right:240px;">联系我们</span>
      <span class="word-footer" style="right:360px;">版权所有</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
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
    position: relative;
  }
  .logo {
    display:inline-block;
    background: url("assets/header/logo.png") no-repeat;
    background-size: 140px 50px;
    width: 140px;
    height: 50px;
    position: absolute;
    left: 43px;
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
    left: 43px;
    top: 70px;
  }
  .action {
    position: absolute;
    top: 5px;
    width: 45px;
    height: 40px;
    border: none;
    background-color: #333333;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
  }
  .login {
    right: 103px;
  }
  .register {
    right: 43px;
  }
  .footer {
    height: 160px;
    background-color: #333333;
    position: relative;
  }
  .word-footer {
    color: #fff;
    font-size: 13px;
    position: absolute;
    top: 80px;
    right: 120px;
  }
</style>
