<!--author:winkzhang-->
<template>
  <div class="index">
    <div class="product-header">
      <span class="platform">纺织平台</span>
      <i class="rightArrow"></i>
      <span class="product-name">{{productName}}</span>
    </div>
    <div class="order-detail">
      <span>我的全部订单</span>
      <table>
        <thead>
          <tr>
            <th>商品名称</th>
            <th>商家名称</th>
            <th>数量（kg）</th>
            <th>总价</th>
            <th>订单状态</th>
            <th>其他信息</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in orders">
            <td>{{item.productName}}</td>
            <td>{{item.company}}</td>
            <td>{{item.amount}}</td>
            <td>{{item.total_price}}</td>
            <td>{{item.status}}</td>
            <td>{{item.spec}} | {{item.color}}</td>
            <td style="position:relative;width:10%"><a class="go-pay" v-if="item.status === '待支付'" @click="goToPay">去支付</a><a class="cancel">取消</a></td>
          </tr>
        </tbody>
      </table>
      <i class="line"></i>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'MyOrder',
    props: {
      username: {
        type: String,
        required: true
      }
    },
    data () {
      return {
        productName: '我的订单',
        orders: []
      }
    },
    methods: {
      getOrder: function() {
        this.$http.get(this.$api.api.getorder+this.username).then(
          (response) => {
            if (JSON.parse(response.bodyText).isSuccess === true) {
              this.orders = JSON.parse(response.bodyText).data.order;
            } else {
              this.$message(JSON.parse(response.bodyText).msg);
            }
          })
      },
      goToPay: function() {
        this.$router.push('/pay');
      }
    },
    mounted () {
      this.getOrder();
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
  .order-detail {
    margin-top: 30px;
    text-align: left;
  }
  .order-detail span {
    color: #333333;
    font-weight: bold;
    font-size: 22px;
  }
  .order-detail table {
    margin-top: 30px;
    width: 1280px;
    text-align: left;
    border-collapse: collapse;
  }
  .order-detail thead tr {
    background-color: #EFEFEF;
    height: 60px;
  }
  .order-detail tbody tr {
    height: 70px;
  }
  .order-detail th {
    font-weight: normal;
    font-size: 18px;
    color: #000;
    padding-left: 15px;
  }
  .order-detail td {
    padding-left: 15px;
    font-weight: normal;
    font-size: 16px;
    color: #000000;
  }
  .go-pay {
    text-decoration: underline;
    color: #F57905;
    position: absolute;
    left: 0px;
    cursor: pointer;
    top: 25px;
  }
  .cancel {
    text-decoration: underline;
    color: #999999;
    position: absolute;
    left: 60px;
    top: 25px;
    cursor: pointer;
  }
  .line {
    display: inline-block;
    height: 2px;
    width: 1280px;
    background-color: #CFCFCF;
    margin-bottom: 50px;
  }
</style>
