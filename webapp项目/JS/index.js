$(function(){
	// 100% 轮播图大小
	var widthbox=$(".box").css("width");//首先获取的是最刚开始时自定义的大盒子的宽度，不适用与100%的宽度情况
	// var reg = "px";//把想要去掉的内容提出来 可以var变量，也可以直接用
    var widthcslbox = widthbox.replace("px", "");//replace  替换  进行
    //console.log(widthcslbox);
	var cslboxlength=$(".carousel-box img").length;
	//console.log(cslboxlength);
	var zk=widthcslbox*cslboxlength; //总的包括所有img的大框的宽度
	//console.log(zk);
	$(".carousel-box").css({width:zk}); //传的是框的宽度
	$(".carousel-box a img").css({width:widthcslbox}); //传的是img每个框的宽度
	var index=0;//下标
	var timer;//定义定时器
	// 封装换图方法
	function changeImg(){
		// 右边界检测
		if(index>=cslboxlength){
			$(".carousel-box").css({
					left:0
				})
				index=1;
		}
		if(index<=-1){
			//第一张图片的下标值是0，所以就是就是小于或者等于-1的时候
				$(".carousel-box").css({
					left:-widthcslbox*(cslboxlength-1)//imgslength长度
				})
				index=cslboxlength-2;//
			}
		$(".carousel-box").stop().animate({
				left:-widthcslbox*index
		},500)
		//给小圆点添加
		$(".Yuan span").eq(index).addClass("Carrent").siblings().removeClass("Carrent") //removeClass 移出  siblings().代表的是去除其他的兄弟
		//console.log($(".yuan span"));
		//if是防止超出
		if(index>=cslboxlength-1){
			$(".Yuan span").eq(0).addClass("Carrent").siblings().removeClass("Carrent")
		}
	}
	//小圆点的点击事件
	$(".Yuan span").stop().click(function() {
			index = $(this).index();
			changeImg();
	});
	// 设置时间轴
	function autoPlay(){
		timer = setInterval(function(){
			index++;
			changeImg();
		},5000);
	}
	// 过手停
	autoPlay()
	$(".carousel-box").hover(function() {
		clearInterval(timer);
	}, function() {
		autoPlay();
	});

//轮播图  100%界面
	var Widthtb=$(".box").css("width");//首先获取的是最刚开始时自定义的大盒子的宽度，不适用与100%的宽度情况
	var rgb ="px"; //把多余的东西替换，，把单位去掉，不然会影响计算，px在计算的时候会出现NAN的情况
	var Wtabimgbox=Widthtb.replace(rgb, "");//采用去敏感词的方法，把单位去掉，
	var boxlength=$(".tab-img-box a img").length;
	var zongkuang=Wtabimgbox*boxlength;
    //console.log($(".Sk").css.width);
   	$(".tab-img-box").css({width:zongkuang});//传的是框的宽度
   	$(".tab-img-box a img").css({width:Wtabimgbox});//传的是img每个框的宽度
	// console.log($);
		var index5=0;//下标
		var timer5;//定义定时器
		//右点击事件
		$(".Right").click(function() {
			index5++;
			changeImg5();
		});
		// 左点击事件
		$(".Left").click(function() {
			index5--;
			changeImg5();
		});

		// 封装换图方法
		function changeImg5(){
			// 右边界检测
			if(index5 >= boxlength){
				$(".tab-img-box").css({
					left:0
				})
				index5=1;
			}
			//左边界检测
			if(index5<=-1){
			//第一张图片的下标值是0，所以就是就是小于或者等于-1的时候
				$(".tab-img-box").css({
					left:-Wtabimgbox*(boxlength-1)//SkLGlength长度
				})
				index5=boxlength-2;//
			}

			$(".tab-img-box").stop().animate({
				left:-Wtabimgbox*index5
			},1000)
		}
		// 设置时间轴
		autoPlay()
		function autoPlay(){
			timer5 =setInterval(function(){
				index5++;
				changeImg5();
			},4000);
		}
		// 过手停
		$(".tab-img").hover(function(){
			clearInterval(timer5)
		},function(){
			autoPlay()
		})

	// 点击出现左拉菜单
	// $(".icon_menu").click(function() {
	// 	$(".f_nav_side").slideToggle(1000);
	// 	$(".f_nav_side").css({
	// 		display:"block",
	// 	})
	// 	$(".icon_menu").css({
	// 		display:"block",
	// 		position: "fixed",
	// 		Right:"0",
	// 		top:"0"
	// 	})
	// });

})