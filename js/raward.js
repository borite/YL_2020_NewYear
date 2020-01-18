// JavaScript Document


//游戏结束Handle
//true胜利，false失败
//gcode  1-贴春联 2-糖葫芦 3-点爆竹 4-贺春节 5-挂灯笼
function selRaw(e,gcode){
	$("#end").css({"display":"block"});//显示结束页面
	timeOpen=false;//计时器停止
    if(e==true && gcode>0){
		
		getCard(gcode);
		//$.post('https://customer.imotstudio.net/yl2020NewYear/api/Game/ChouCard')
		
		
		/*vice(0);
		if(判断当日抽卡次数){//当单日抽卡次数达到上限时，胜利界面
		   $("#end").html('<div class="lw100 lh100 lpos_fix lbg_co_black" style="opacity: 0.5;top: 0;"></div>\
				<div class="lpos_fix lw100 ltex_cen" style="top: 6%;line-height: 60px;">\
					<img src="img/goodluck.png" alt="好运社" width="30%"/>\
					<br/>\
					<img src="img/win.png" alt="" width="40%"/>\
					<br/>\
					<img src="img/wintext.png" alt="" width="70%"/>\
					<br/>\
					<img onClick="reStart()" src="img/restart.png" alt="重新开始游戏" width="50%"/>\
				</div>\
				<header class="lw100 ldis_fle lpos_fix l10" style="height: 10%;justify-content: space-between;padding: 3% 0;top:0">\
				<a href="index.html" class="ldis_blo lbg_co_2 ltex_cen lpos_rel" style="width: 20%;height: 78%;border: 6px #bdae9a solid; border-radius: 6px;margin-left: 3%;">\
					<img src="img/back.png" class="ldis_blo lpos_abs" style="right: 50%;top: 50%;margin-right: -25px;margin-top: -21px;" alt="返回" width="50px" height="42px"/>\
				</a>\
				</header>');
		   }else{//胜利界面
			var j=""//在这里写抽中哪张福卡
			switch(j){
				case 0:
					getRaw(1)
				break;
				case 1:
					getRaw(2)
				break;
				case 2:
					getRaw(3)
				break;
				case 3:
					getRaw(4)
				break;
				case 4:
					getRaw(5)
				break;
				case 5:
					getRaw(6)
				break;
			}
		}*/
	}else{
		vice(1);
		//失败界面
		$("#end").html('<div class="lw100 lh100 lpos_fix lbg_co_black" style="opacity: 0.5;top: 0;"></div>\
		<div class="lpos_fix lw100 ltex_cen" style="top: 6%;line-height: 60px;">\
			<img src="img/goodluck.png" alt="好运社" width="30%"/>\
			<br/>\
			<img src="img/lose.png" alt="" width="40%"/>\
			<br/>\
			<img src="img/losetext.png" alt="" width="70%"/>\
			<br/>\
			<img onClick="reStart()" src="img/restart.png" alt="重新开始游戏" width="50%"/>\
		</div>\
		<header class="lw100 ldis_fle lpos_fix l10" style="height: 10%;justify-content: space-between;padding: 3% 0;top:0">\
		<a href="index.html" class="ldis_blo lbg_co_2 ltex_cen lpos_rel" style="width: 20%;height: 78%;border: 6px #bdae9a solid; border-radius: 6px;margin-left: 3%;">\
			<img src="img/back.png" class="ldis_blo lpos_abs" style="right: 50%;top: 50%;margin-right: -25px;margin-top: -21px;" alt="返回" width="50px" height="42px"/>\
		</a>\
		</header>')
		
	}
}



//抽卡界面
function getRaw(nam){
	$("#end").html('<div class="lbg_co_7 lw100 lh100 lpos_fix lbg_img" style="background-image: url(img/fu_img/bg.png);top: 0;"></div>\
		<div class="lpos_fix lw100 ltex_cen" style="top: 6%;line-height: 50px;">\
			<img src="img/goodluck.png" alt="好运社" width="30%"/>\
			<br/>\
			<img src="img/win.png" alt="" width="40%"/>\
			<br/>\
			<img src="img/fu_img/card'+nam+'.png" alt="" width="34%"/>\
			<br/>\
			<img src="img/new.png" alt="点击查看" width="50%"/>\
			<br/>\
			<img onClick="det('+nam+')" src="img/detile.png" alt="点击查看" width="50%"/>\
		</div>\
		<header class="lw100 ldis_fle lpos_fix l10" style="height: 10%;justify-content: space-between;padding: 3% 0;top:0">\
		<a href="index.html" class="ldis_blo lbg_co_2 ltex_cen lpos_rel" style="width: 20%;height: 78%;border: 6px #bdae9a solid; border-radius: 6px;margin-left: 3%;">\
			<img src="img/back.png" class="ldis_blo lpos_abs" style="right: 50%;top: 50%;margin-right: -25px;margin-top: -21px;" alt="返回" width="50px" height="42px"/>\
		</a>\
		</header>')
	
}



//抽卡详细内容界面
function det(n){
	$("#end").html('<div class="lbg_co_7 lw100 lh100 lpos_fix lbg_img" style="background-image: url(img/fu_img/bg.png);top: 0;"></div>\
		<div id="win" class="lpos_fix ltex_cen lh100" style="top: 14%;">\
		<img src="img/fu_img/mate.png" alt="" width="16%"/>\
		<img class="vice" onClick="vice('+n+')" src="img/fu_img/pint.png" alt="" width="58%"/>\
		<br/>\
		<img src="img/fu_img/card'+n+'.png" alt="" width="64%"/>\
	</div>\
		<header class="lw100 ldis_fle lpos_fix l10" style="height: 10%;justify-content: space-between;padding: 3% 0;top:0">\
		<a href="index.html" class="ldis_blo lbg_co_2 ltex_cen lpos_rel" style="width: 20%;height: 78%;border: 6px #bdae9a solid; border-radius: 6px;margin-left: 3%;">\
			<img src="img/back.png" class="ldis_blo lpos_abs" style="right: 50%;top: 50%;margin-right: -25px;margin-top: -21px;" alt="返回" width="50px" height="42px"/>\
		</a>\
		</header>')
}



//点击播放潘总祝福
function vice(nub){
	$("#vice").attr("src",'audio/vice_'+nub+'.mp3')
	 var player = $("#vice")[0]; /*jquery对象转换成js对象*/
	player.play();
	$('.vice').attr("src","img/fu_img/text"+nub+'.png');
	
}



//抽奖
//uOpenID--用户微信OpenID  g
//ameCode--游戏代码 
//1-贴春联 2-糖葫芦 3-点爆竹 4-贺春节 5-挂灯笼
function getCard(gameCode){
	
	var userInfo=localStorage.getItem('userInfo');
	var a=JSON.parse(userInfo);
	console.log(JSON.parse(userInfo));
	var d=new Date();
	
    $.get("https://customer.imotstudio.net/yl2020NewYear/api/Game/ChouCard",{
		openID:a.Data.OpenID,
		GameType:gameCode,
		t:d.getTime()
	}).done(function(res){
		console.log(res);
	})
}