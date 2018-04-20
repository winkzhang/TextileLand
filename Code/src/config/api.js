<!--author:winkzhang-->
var root = 'http://wink.net.cn:5000/'
export default {
  api : {
    login: root + 'login',
    signup: root + 'signup',
    getcommodity: root + 'home/commodity',
    getstore: root + 'home/store',
    getproductdetail: root + 'product/detail?id=',
    getvendordetail: root + 'store/detail?companyname=',
    getspec: root + 'getSpec?productId=productid&&companyName=companyname',
    getprice: root + 'getPrice?productId=productid&&companyName=companyname&&spec=specvalue&&number=numbervalue',
    submitcart: root + 'submittocart',
    showcart: root + 'showcart?username=customername',
    deletecart: root + 'deletecart',
    submitorder: root + 'submittoorder',
    getorder: root + 'product/getorder?username='
  }
}
