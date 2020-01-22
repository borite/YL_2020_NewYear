// JavaScript Document
//游戏结束Handle
//e---true胜利，false失败
//gcode  1-贴春联 2-糖葫芦 3-点爆竹 4-贺春节 5-挂灯笼
function selRaw(e,gcode){
	$("#end").css({"display":"block"});//显示结束页面
	timeOpen=false;//计时器停止
    if(e==true && gcode>0){
		//getCard(gcode);
		viceBG(0);
	var userInfo=localStorage.getItem('userInfo');
	var a=JSON.parse(userInfo);
	console.log(JSON.parse(userInfo));
	var d=new Date();
	
	var html_loading='<div id="loading" style="display:block">请稍后...</div>';
	$('body').append(html_loading);
	//uOpenID--用户微信OpenID  g
	//1-贴春联 2-糖葫芦 3-点爆竹 4-贺春节 5-挂灯笼
    $.get("https://customer.imotstudio.net/yl2020NewYear/api/Game/ChouCard",{
		openID:a.Data.OpenID,
		GameType:gcode,
		t:d.getTime()
	}).done(function(res){
		$("#loading").remove();
		console.log(res);
		var c=res.Code;
		if(c==200){
			var cardCode="";
			var cname=res.Data;
			switch(cname){
				case "鼠你强":
					cardCode="3";
					break;
				case "鼠你富":
					cardCode="1";
					break;
				case "鼠你美":
					cardCode="2";
					break;	
				case "鼠你乐":
					cardCode="4";
					break;	
				case "鼠你甜":
					cardCode="5";
					break;
				case "尊重卡":
					cardCode="6";
					break;
				default:
					break;
				
			}
			if(cardCode==""){
				return false;
			}
			getRaw(cardCode);
		}
		
		if(c==204){
			viceBG(0);
			$("#end").html('<div class="lw100 lh100 lpos_fix lbg_co_black" style="opacity: 0.5;top: 0;"></div>\
									<div class="lpos_fix lw100 ltex_cen" style="top: 6%;line-height: 60px;">\
										<img src="img/goodluck.png" alt="好运社" width="30%"/>\
										<br/>\
										<img src="img/win.png" alt="" width="40%"/>\
										<br/>\
										<img src="img/wintest.png" alt="" width="70%"/>\
										<br/>\
										<img onClick="reStart()" src="img/restart.png" alt="重新开始游戏" width="50%"/>\
									</div>\
									<header class="lw100 ldis_fle lpos_fix l10" style="height: 10%;justify-content: space-between;padding: 3% 0;top:0">\
									<div onClick="Achang(0)" class="ldis_blo lbg_co_2 ltex_cen lpos_rel" style="width: 18%;height: 78%;border: 6px #bdae9a solid; border-radius: 6px;margin-left: 3%;">\
								<img src="img/back.png" class="ldis_blo lpos_abs" style="right: 50%;top: 50%;margin-right: -20px;margin-top: -16px;" alt="返回" width="40px" height="32px"/>\
							</div>\
						</header>');
		}
		
		if(c==400){
			alert("貌似没有抽到卡，请再接再厉");
			location.replace('index.html');
		}

		if(c==404){
			//selRaw(true,gcode);
			alert("貌似没有抽到卡，请再接再厉");
			location.replace('index.html');
		}
	});
		
		
	}else{
		viceBG(1);
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
		<div onClick="Achang(0)" class="ldis_blo lbg_co_2 ltex_cen lpos_rel" style="width: 18%;height: 78%;border: 6px #bdae9a solid; border-radius: 6px;margin-left: 3%;">\
			<img src="img/back.png" class="ldis_blo lpos_abs" style="right: 50%;top: 50%;margin-right: -20px;margin-top: -16px;" alt="返回" width="40px" height="32px"/>\
		</div>\
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
		<div onClick="Achang(0)" class="ldis_blo lbg_co_2 ltex_cen lpos_rel" style="width: 18%;height: 78%;border: 6px #bdae9a solid; border-radius: 6px;margin-left: 3%;">\
			<img src="img/back.png" class="ldis_blo lpos_abs" style="right: 50%;top: 50%;margin-right: -20px;margin-top: -16px;" alt="返回" width="40px" height="32px"/>\
		</div>\
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
		<div onClick="Achang(0)" class="ldis_blo lbg_co_2 ltex_cen lpos_rel" style="width: 18%;height: 78%;border: 6px #bdae9a solid; border-radius: 6px;margin-left: 3%;">\
			<img src="img/back.png" class="ldis_blo lpos_abs" style="right: 50%;top: 50%;margin-right: -20px;margin-top: -16px;" alt="返回" width="40px" height="32px"/>\
		</div>\
		</header>')
}



//点击播放潘总祝福
function vice(nub){
	$("#vice").attr("src",'audio/vice_'+nub+'.mp3')
	 var player = $("#vice")[0]; /*jquery对象转换成js对象*/
	player.play();
	$('.vice').attr("src","img/fu_img/text"+nub+'.png');
	
}

