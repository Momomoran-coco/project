//置顶 js
	window.onscroll =function(){
		var height =0;
		console.log(height);
        var oMENU =document.getElementById("meiu");
		height =document.documentElement.scrollTop||document.body.scrollTop;
		//检测滚动条是否滚动到1000px的位置
		// if(height>=1000){
		// 	oMENU.style.display ="block";         //大于1000的话就会显示
		// }else{oMENU.style.display ="none";}       //否则就隐藏
		//document.getElementById("a1").innerHTML=height;
		console.log(height);
	}
	// $(".back_top").click(function(){
	// 	if(document.body.scrollTop){  //scrollTop表示的是滚动条高度
	// 		document.body.scrollTop=0;
	// 	}else{
	// 		document.documentElement.scrollTop=0;
	// 		}
	// });
