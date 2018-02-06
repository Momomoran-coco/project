// console.log($);
$(function(){
	// 第七个框里面的效果 上下浮动 缺点：太过生硬
	/*$(".f_rng_focus ul li").hover(function(){
		$(this).stop().css({
			marginTop:"-12px"
		},500)
	}, function() {
		$(this).stop().css({
			marginTop:"0px"
		},500)
	});*/
	//第八个框里面的效果  鼠标放上去会变红色
	//第一个
	$(".shop1 i").hover(function() {
		$(this).delay(10000).stop().css({
			"background-position":"0px -49px"
		})
	}, function() {
		$(this).delay(10000).stop().css({
			"background-position":"0px 0px"
		})
	});
	//第二个
	$(".shop2 i").hover(function() {
		$(this).stop().css({
			"background-position":"-104px -49px"
		})
	}, function() {
		$(this).stop().css({
			"background-position":"-104px 0px"
		})
	});
	//第三个
	$(".shop3 i").hover(function() {
		$(this).stop().css({
			"background-position":"-208px -49px"
		})
	}, function() {
		$(this).stop().css({
			"background-position":"-208px 0px"
		})
	});
	//第四个
	$(".shop4 i").hover(function() {
		$(this).stop().css({
			"background-position":"-306px -49px"
		})
	}, function() {
		$(this).stop().css({
			"background-position":"-306px 0px"
		})
	});
	// 第五个
	$(".shop5 i").hover(function() {
		$(this).stop().css({
			"background-position":"-397px -49px"
		})
	}, function() {
		$(this).stop().css({
			"background-position":"-397px 0px"
		})
	});
	// 第六个
	$(".shop6 i").hover(function() {
		$(this).stop().css({
			"background-position":"-489px -49px"
		})
	}, function() {
		$(this).stop().css({
			"background-position":"-489px 0px"
		})
	});
	// 第七个
	$(".shop7 i").hover(function() {
		$(this).stop().css({
			"background-position":"-594px -49px"
		})
	}, function() {
		$(this).stop().css({
			"background-position":"-594px 0px"
		})
	});
	// 第八个
	$(".shop8 i").hover(function() {
		$(this).stop().css({
			"background-position":"-680px -49px"
		})
	}, function() {
		$(this).stop().css({
			"background-position":"-680px 0px"
		})
	});
	// 第九个
	$(".shop9 i").hover(function() {
		$(this).stop().css({
			"background-position":"-771px -49px"
		})
	}, function() {
		$(this).stop().css({
			"background-position":"-771px 0px"
		})
	});
	// 第十个
	$(".shop10 i").hover(function() {
		$(this).stop().css({
			"background-position":"-880px -49px"
		})
	}, function() {
		$(this).stop().css({
			"background-position":"-880px 0px"
		})
	});
	//第六个框里面的效果，tab切换
	//测试.daT .LIU 的下标值是否正确
	// $(function(){
	// 	$(".daT .LIU").mouseover(function() {
	// 	var b =$(this).index();
	// 	console.log(b);})
	// })
	// 第六个的效果
	$(".g_tab_wp- span").mouseover(function() {
		var a = $(this).index();// 已测试  .g_tab_wp- span 里面的下标
		//console.log(a);
		//var b =$(".daT .LIU").index();
		var c =$(".daT .LIU").eq(a);
		c.siblings(".daT .LIU").css({display:"none"})
        c.css({display:"block"})
		//$(this).children(".LIU").css({display:"block"})  //有和没有都可以
	});
	

	// 左边的定时器 轮播图
	var index=0;//下标
	var timer;//定义定时器
	var imgslength=$(".Tub-left img").length;
	//console.log(imgslength);
	function changeImg(){
		// 右边界检测
		if(index>=imgslength){
			$(".Tub-left").css({
					left:0
				})
				index=1;
		}
		if(index<=-1){
			//第一张图片的下标值是0，所以就是就是小于或者等于-1的时候
				$(".imgs").css({
					left:-700*(imgslength-1)//imgslength长度
					//  imgslength =1 时 left:-470*(imgslength-1)   left等于0
				})
				index=imgslength-2;//
			}
		$(".Tub-left").stop().animate({
				left:-700*index
		},1000)
		//给小圆点添加
		$(".yuan span").eq(index).addClass("carrent").siblings().removeClass("carrent") //removeClass 移出  siblings().代表的是去除其他的兄弟
		//console.log($(".yuan span"));
		if(index>=imgslength-1){
			$(".yuan span").eq(0).addClass("carrent").siblings().removeClass("carrent")
		}
	}
	//小圆点的鼠标进入事件
	$(".yuan span").mouseenter(function(){
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
	$(".box-1").hover(function(){
		clearInterval(timer)
	},function(){
		autoPlay()
	})


	//倒数第二个右边的轮播图转动
	var index1=0;//下标
	var timer1;//定义定时器
	var TEolength=$(".TE-o img").length;
	//console.log(TEolength);
	// 封装换图方法
	function changeImg1(){
		// 右边界检测
		if(index1>=TEolength){
			$(".TE-o").css({
					left:0
				})
				index1=1;
		}
		if(index1<=-1){
			//第一张图片的下标值是0，所以就是就是小于或者等于-1的时候
				$(".TE-o").css({
					left:-480*(TEolength-1)//imgslength长度
				})
				index1=TEolength-2;//
			}
		$(".TE-o").stop().animate({
				left:-480*index1
		},500)
		//给小圆点添加
		$(".yuan-1 span").eq(index1).addClass("carrent-1").siblings().removeClass("carrent-1") //removeClass 移出  siblings().代表的是去除其他的兄弟
		//console.log($(".yuan span"));
		if(index1>=TEolength-1){
			$(".yuan-1 span").eq(0).addClass("carrent-1").siblings().removeClass("carrent-1")
		}
	}
	//小圆点的鼠标进入事件
	$(".yuan-1 span").mouseenter(function(){
		index1 = $(this).index();
		changeImg1();
	});
	// 设置时间轴
	function autoPlay1(){
		timer1 = setInterval(function(){
			index1++;
			changeImg1();
		},4000);
	}
	autoPlay1()
	$(".TE").hover(function() {
		clearInterval(timer1);
	}, function() {
		autoPlay1();
	});

	// 体验中心的转动轮播效果
			//过手效果下标值存在问题
			//测试.Tub-right li的下标值是否正确
			$(function(){
				$(".Tub-right li").mouseover(function() {
				var b =$(this).index();
				console.log(b);})
			})

			$(".tab a").mouseover(function(){
			var q =$(this).index()/2;
			// console.log(q);
			var w =($(".Tub-right li").eq(q));
			//console.log(w);
			//
			w.siblings(".Tub-right li").css({display:"none"})
	        w.css({display:"block"})
			$(this).children(".LIU").css({display:"block"})
			});
		//体验中心定时播放的效果
		var index2=0;//下标
		var timer2;//定义定时器
		var Tublength=$(".Tub-right li").length;
		// 封装换图方法
		function changeImg2(){
			// 右边界检测
			if(index2>=Tublength){
				$(".Tub-right").css({
						left:0
					})
					index2=1;
			}
			if(index2<=-1){
				//第一张图片的下标值是0，所以就是就是小于或者等于-1的时候
					$(".Tub-right").css({
						left:-480*(Tublength-1)//imgslength长度
					})
					index2=Tublength-2;//
				}
			$(".Tub-right").stop().animate({
					left:-480*index2
			},500)
		}
		// 设置时间轴
		function autoPlay2(){
			timer2 = setInterval(function(){
				index2++;
				changeImg2();
			},60000);
		}
		autoPlay2()
		$(".Tub-right").hover(function() {
			clearInterval(timer2);
		}, function() {
			autoPlay2();
		});
	//轮播图  100%界面
	//$(document).height(),
	var widthisk=window.screen.width// 获取屏幕的宽度
	var Sklength=$(".Sk img").length;
	var zongkuang=widthisk*Sklength;
    //console.log($(".Sk").css.width);
   	$(".Sk").css({width:zongkuang});//传的是框的宽度
   	$(".Sk img").css({width:widthisk});//传的是img每个框的宽度
	// console.log($);
	$(function(){
		var index5=0;//下标
		var timer5;//定义定时器
		var SkLGlength=$(".Sk img").length;
		//右点击事件
		$(".Right").click(function() {
			index5++;
			changeImg5();
		});
		$(".Left").click(function() {
			index5--;
			changeImg5();
		});

		// 封装换图方法
		function changeImg5(){
			// 右边界检测
			if(index5 >= SkLGlength){
				$(".Sk").css({
					left:0
				})
				index5=1;
			}
			//左边界检测
			if(index5<=-1){
			//第一张图片的下标值是0，所以就是就是小于或者等于-1的时候
				$(".Sk").css({
					left:-widthisk*(SkLGlength-1)//SkLGlength长度
				})
				index5=SkLGlength-2;//
			}

			$(".Sk").stop().animate({
				left:-widthisk*index5
			},1000)
			//给小圆点添加
			$(".Yuan span").eq(index5).addClass("Carrent").siblings().removeClass("Carrent") //removeClass 移出  siblings().代表的是去除其他的兄弟
			//console.log($(".yuan span"));
			//if是防止超出
			if(index5>=SkLGlength-1){
				$(".Yuan span").eq(0).addClass("Carrent").siblings().removeClass("Carrent")
			}
		}
		//小圆点的点击事件
		$(".Yuan span").delay(2000).mousemove(function() {
				index5 = $(this).index();
				changeImg5();
		});
		// 设置时间轴
		autoPlay()
		function autoPlay(){
			timer5 =setInterval(function(){
				index5++;
				changeImg5();
			},5000);
		}
		// 过手停
		$(".four_box").hover(function(){
			clearInterval(timer5)
			$(".Btns").css({
				display:"block"
			})
		},function(){
			$(".Btns").css({
				display:"none"
			})
		autoPlay()
		})
	})


	//戒指四个转动
	//倒数第二个右边的轮播图转动
	var index6=0;//下标
	var timer6;//定义定时器
	var Glength=$(".g_diy_shw_focus img").length;
	// 封装换图方法
	function changeImg6(){
		// 右边界检测
		if(index6>=Glength){
			$(".g_diy_shw_focus").css({
					left:0
				})
				index6=1;
		}
		if(index6<=-1){
			//第一张图片的下标值是0，所以就是就是小于或者等于-1的时候
				$(".g_diy_shw_focus").css({
					left:-352*(Glength-1)//imgslength长度
				})
				index6=Glength-2;//
			}
		$(".g_diy_shw_focus").stop().animate({
				left:-352*index6
		},500)
	}
	// 设置时间轴
	function autoPlay6(){
		timer6 = setInterval(function(){
			index6++;
			changeImg6();
		},2000);
	}
	autoPlay6();

	$(".g_diy_shw_pic").hover(function() {
		$(this).css({
			"opacity":"0.9"
		});
		sj();
	});
	//console.log(sj());
	function sj(){
		timerq =setInterval(function(){
			$(".g_diy_shw_pic").css({
				"opacity":"1",
			});
		},650);
	}
	//品牌故事闪的效果
$(".g_tab_cnt_spe_a img").hover(function() {
		$(this).css({
			"opacity":"0.9"
		});
		sj1();
	});
	function sj1(){
		timerq =setInterval(function(){
			$(".g_tab_cnt_spe_a img").css({
				"opacity":"1",
			});
		},650);
	}
	// 
	$(".QWE").hover(function() {
		$(this).css({
			"opacity":"0.9"
		});
		sj2();
	});
	function sj2(){
		timerq =setInterval(function(){
			$(".QWE").css({
				"opacity":"1",
			});
		},650);
	}
	// 
$(".XIAO").hover(function() {
		$(this).css({
			"opacity":"0.9"
		});
		sj3();
	});
	function sj3(){
		timerq =setInterval(function(){
			$(".XIAO").css({
				"opacity":"1",
			});
		},650);
	}
	// 一
	$(".Linft").hover(function() {
		$(this).css({
			"opacity":"0.9"
		});
		sj4();
	});
	function sj4(){
		timerq =setInterval(function(){
			$(".Linft").css({
				"opacity":"1",
			});
		},650);
	}
	// 二
	$(".Linf").hover(function() {
		$(this).css({
			"opacity":"0.9"
		});
		sj5();
	});
	function sj5(){
		timerq =setInterval(function(){
			$(".Linf").css({
				"opacity":"1",
			});
		},650);
	}
	// 三
	$(".LIUright").hover(function() {
		$(this).css({
			"opacity":"0.9"
		});
		sj6();
	});
	function sj6(){
		timerq =setInterval(function(){
			$(".LIUright").css({
				"opacity":"1",
			});
		},650);
	}

	//放大镜效果
		var A =document.getElementById("A");
		var B =document.getElementById("b");
		var oBigimg=document.getElementById("a1");
		var oRight=document.getElementById("rig");
	//过手出现的效果
	$(".A").bind("mousemove",one);
	//过手出现的效果  鼠标进去的时候小黑块和放大的框图出现，鼠标移出的时候两个全部隐藏
	$(".A").hover(function() {
		$("#b").css({
			display:"block",
		})
		$(".imgbox").css({
			display:"block",
		})
	}, function() {
		$("#b").css({
			display:"none",
		})
		$(".imgbox").css({
			display:"none",
		})
	});
	
	//放大镜效果
	function one(event){
		var evt =event||window.event;//做兼容
		//	求灰块坐标
		var x =evt.offsetX - (B.offsetHeight/2);
		var y =evt.offsetY - (B.offsetHeight/2);
		//console.log(x);
		//console.log(evt.offsetY);
		//检测坐标边界
		if (x<0) {
			x=0;
		}else if(x>=A.offsetWidth- B.offsetWidth){
			x = A.offsetWidth- B.offsetWidth
		}

		if(y <0){
			y= 0
		}else if(y>=A.offsetHeight- B.offsetHeight){
			y = A.offsetHeight- B.offsetHeight
		}
		B.style.top=y+"px";
		B.style.left=x+"px";
		//求移动比例
		var percentx =x/(A.offsetWidth- B.offsetWidth);
		var percenty =y/(A.offsetHeight- B.offsetHeight);
		//根据比例求大图位置
		var bigx = percentx * (oBigimg.offsetWidth - oRight.offsetWidth);
		var bigy = percenty * (oBigimg.offsetHeight - oRight.offsetHeight);
		//console.log(bigx + ":" + bigy);
		// 传值
		oRight.style.top=bigx+"px";
		oRight.style.left=bigy+"px";

	};


})