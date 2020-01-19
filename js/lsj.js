// JavaScript Document
//禁止页面滚动
document.documentElement.style.overflow='hidden';//PC端
//document.body.style.overflow='hidden';//手机端
//document.body.style="overhidden";


//计头部导航+计时器
function timer(){
	setTimeout('if(time==-1||timeOpen==false){timeOut();time++;timeShow(time);}else{timer(true);timeShow(time);time--;}',1000)
	}
function timeShow(t){$('#timeShow').text(t+'S');}
function reStart(){//游戏失败重新加载页面
	location.reload();
}

//音效控制au(0)鞭炮au(1)错误au(2)正确
function au(nub){
	switch(nub){
		case 0:
		$("#au").attr("src",'audio/bianpao.mp3');
		break;
		case 1:
		$("#au").attr("src",'audio/false.mp3');
		break;
		case 2:
		$("#au").attr("src",'audio/correct.mp3');
		break;
		}
	var player = $("#au")[0]; /*jquery对象转换成js对象*/
	player.play();
};
//结果音乐vice(0)胜利vice(1)失败
function viceBG(res){
	switch(res){
		case 0:
		$("#vice").attr("src",'audio/win.mp3');
		break;
		case 1:
		$("#vice").attr("src",'audio/lose.mp3');
		break;
		}
	var player = $("#vice")[0]; /*jquery对象转换成js对象*/
	player.play();
};
//页面跳转控制
function Achang(nub){
	switch(nub){
		case 0:
		location.replace('index.html');
		break;
		case 1:
		location.replace('TCL.html');
		break;
		case 2:
		location.replace('THL.html');
		break;
		case 3:
		location.replace('DBZ.html');
		break;
		case 4:
		location.replace('THL.html');
		break;
		case 5:
		location.replace('HCJ.html');
		break;
		case 6:
		location.replace('GDL.html');
		break;
		case 7:
		location.replace('fu.html');
		break;
		case 8:
		location.replace('land.html');
		break;
	}
}