$(function(){
		var index =0 ;//定义下标变量
		var imgslength =$(".screen-bottom li").length;
		//console.log(imgslength)
		// 换图方法
		function changeimg(){
			// 右边界检测
			if(index>=imgslength){
				index=0;
			}
			// 左边界检测
			if(index<=-1){
				index=imgslength-1
			}
			// 右边换图
			$(".screen-bottom li").eq(index).stop().animate({
				opacity:1   //opacity:1  透明度为1
			},1000).siblings().stop().animate({
				opacity:0	//opacity:0  透明度为0
			},1000)
			// 小圆
			$(".circle span").eq(index).addClass("current").siblings().removeClass("current")
		}
		autoPlay()  //叫定时器
		// 自动播放的方法
		function autoPlay(){
			timer = setInterval(function(){
				index++;
				changeimg();
			},5000);
		}
	})
