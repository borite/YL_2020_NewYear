// JavaScript Document

//获取URL中指定的参数值
function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg); //获取url中"?"符后的字符串并正则匹配
    var context = "";
    if (r !== null)
        context = r[2];
    reg = null;
    r = null;
    return context === null || context === "" || context === "undefined" ? "" : context;
}


function initWxConfig(isIOS,audioID){
	 $.get("http://www.bigxia.cn/wechat/api/wxticket.ashx", { "cur_url": window.location.href }).done(function (res) {
		 	
                var rJson = JSON.parse(res);
		 		console.log(rJson);
                wx.config({
                    debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                    appId: rJson.appId, // 必填，公众号的唯一标识
                    timestamp: rJson.timestamp, // 必填，生成签名的时间戳
                    nonceStr: rJson.Noncestr, // 必填，生成签名的随机串
                    signature: rJson.Signature,// 必填，签名
                    jsApiList: ["updateAppMessageShareData", "updateTimelineShareData"] // 必填，需要使用的JS接口列表
                });
                wx.ready(function () {		
                    //alert("微信接口初始化完成");
                    wx.updateAppMessageShareData({
                        title: '伊利好运社|潘帅送给“鼠”于你的祝福', // 分享标题
                        desc: '快来参与，有精美大礼等着你！', // 分享描述
                        link: 'http://customer.imotstudio.net/yili/newyear/default.html', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                        imgUrl: 'http://customer.imotstudio.net/yili/newyear/img/slogo.jpg', // 分享图标
                        success: function () {
                            //alert("试试分享给朋友");
							//location.replace('default1.html');
                        }
                    });
                    wx.updateTimelineShareData({
                        title: '伊利好运社|潘帅送给“鼠”于你的祝福', // 分享标题
                        link: 'http://customer.imotstudio.net/yili/newyear/default.html', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                        imgUrl: 'http://customer.imotstudio.net/yili/newyear/img/slogo.jpg', // 分享图标
                        success: function () {
                            // 设置成功
							 //alert("试试分享到朋友圈");
							//location.replace('default1.html');
                        }
                    })
                });

                wx.error(function (res) {
                    alert("微信接口初始化失败：" + res);
                })

            })
}