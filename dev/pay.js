//支付宝配置信息
var alipay = {
    //应用ID,您的APPID。
    app_id: "2019032063592628",
    alipay_public_key:"MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAm46g5CP3hgA8MEa139nmh42KPlGMya5AM7xcWpB0m1tXjsoB2RytZ2GgWLYaIF9ndh35O8pSw3UmaYRSMWVcH8SoUS4MPaUKiWXXJtG3vQa25PcrMwx1bD+jfLp04dNiNaLa2al/ho0A8NCXkOfuJIzNsRz5j7RUsNZAe+k1xqoI/zjgkiZJh9wBWNZhu0YGKTRIsnsL75y4C6qDnZSAYnHxMMgJZ2cCpPB+/Nymkn954NwR64VSl07D7X05VxC65cKFMU7/NYk41vjwWpIbBL3bAoeOvyV86hbJanqy1si7xOykB840OCuANpOybHLbkxozwqUuuZ/o/bV2id+N+QIDAQAB",
    //商户私钥
    merchant_private_key:"MIIEpAIBAAKCAQEA24jy25K2LJbt6hwdywBsQU0KXG17QzsH5A6JGv6ZeIhSLMZkpyqVEFAMyJwSvbkJ7sLq/tHYbJsiJMx1caQR3p8fIjGgU43WZ6tUzTRoSq05Iq+MvsOBA6rD7ghQYC2UT7hOxL7IciO8NJ9MZMoPXM6v8jicvEojMgL1KkGFrDqp/esmdbRH1FMU+N+q7K7LAdGjmUZm1veTgFHBunmYo3QFOIUvpfM0s9FE6nQBDpOfmmXRb4oOVuz4vqB71RzjUAuGDOTf9D4jTyKQDIfE8XXOZGVeV32Tokx5ridzlVs2IiruzHtD0FbLnt7S8LJx9wElWERgQwMTjmG4Ws6/gQIDAQABAoIBAH6a7QvKATuX0x8XFetzk/rY1ifVj6eHDJbt9w3VVGaZn2JpC7UILq0YrTaoI3q8ksjaKjHIjRqdIMS+EOD3sMKFW6wZmI93FfX1bdNl7NtcKL4jJXUCRI371kCZFNlSj9yluu9l4y1IBIsIb0MU8GUiYX+8PE+uJbv6zq6O2OsoXFn5PAoxoyQR2qQOq4URQcWMugtfl03E7gfddZoAkQJe7pHGRtYY7Tc4nvPyBiYA1E5kwJr46p+2aXRjYYbd09Fm2CgoEj7lSuOfivLbWqVqBS5ta+BNU1w1qB4/uz1LSgnK80Kv5/Fmh9rZDh3Pm9iwqAuI58vhJuajzIgJxRECgYEA7+s8nqyRPSPRQMOzM3Ybdj1BH87lGIT9NDfFglGiySSVH/hg9+Z0uMo6sWF/JMA4R0b3gQDZvuBY6BrNZwCXKMGOq2leWCSu13dRPFXUf6MmJYFqbZy1zPQTqF4GEUOu+TtYAYYHJOllT0+s10n8UxuxEsQ7ppuGdNVphviJbB0CgYEA6j/xvhr2Jvvf5k6JtINySqnK8B+UA3++gqmDJB+LDpOXQrfsSuaOys7M8fBFY4CrbnCCNuKSK+z/R50zhzQuMs2LHXHT4TuzLt+0q/YcUo5jvttBJrOpAcSWaPaBit8ArDHOK+y3/FlZa+GfcqkTwhKnmZq2hW0YBDWkdY1jW7UCgYEA7xZ/3KigPEubVm0wAhKrH1O/uJEX4S12nzkNDOeJz+Uy7x84kxMIMrblcqt0Zw1fiDiCof5VAFDWiMdc9k6yVJ0/LjbdG/3Cd1qii/wEvgW6GBo2E3HeApchl+HLLh1DG4A2HZ6RNAmbOkRuPEWwvKmV9tuzjj7i6T9b4HOBj0kCgYEAvni6L3Mq3e4GU/VegVo0j8NaUT/MEcBIf2QoTzIa1wJphwWYbBrm1r+q47sUIOFaA9YV+1zlsDPoKyoG4RQr0IFTceDBgS4S97VM6lqXEwXW0zTi1/5UGSzphHWURgAoQtvIoey8ecOJM3BlP0191Ftozjx/1yQq2BlqHW+W79UCgYABdJub8TGOjtgLJlcmo02R1wVZiGzwF9aTsgJngjluHNKo3n8S4l2tpHmE25LzS+yQyQZYQGHDpqHc7y9Og/ZZMdGVCDm/lp7NxaGErJpCLtLgtJ20yjTUXn3+iRQlaJ+MCYI2Re7vlEYpuglYnfD7xmcQ8GXXwkczow93zLDLkg==",		
    
    //异步通知地址
    notify_url:"http://api.ranyunkj.com/api/pay/alinotify",	//回调通知	
    //同步跳转
    return_url:"http://h5.ranyunkj.com/h5/shop/rechargeDetail",//支付完成跳转
    //编码格式
    charset:"UTF-8",
    //签名方式
    sign_type:"RSA2",

    //支付宝公钥,查看地址：https://openhome.alipay.com/platform/keyManage.htm 对应APPID下的支付宝公钥。		
    gatewayUrl:"https://openapi.alipay.com/gateway.do?",

    //将RSA公私钥转换为PEM格式
    privateKey: '-----BEGIN RSA PRIVATE KEY-----\n' + this.merchant_private_key + '\n-----END RSA PRIVATE KEY-----',
    aliPublicKey: '-----BEGIN PUBLIC KEY-----\n' + this.alipay_public_key+ '\n-----END PUBLIC KEY-----',
}

//配置相应信息
var wxpay  = {
    wxappid:'wx291baa9e8b464c2b',//微信公众号appid
    mch_id:'1523821451',//商户号
    wxpaykey:'b3d0782ed9882fad5b374bcd4b603dfb',//商户号秘钥
    notify_url:'http://api.ranyunkj.com/api/pay/wxnotify'//回调
}

exports.alipay = alipay;
exports.wxpay = wxpay;