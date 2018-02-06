
		//正则验证
		var Ousername = document.getElementById("use");//输入用户名
		var oY = document.getElementById("ti");//验证提示

		var Out = document.getElementById("Mi");//输入密码
		var pW = document.getElementById("tis");//验证提示密码

		var Obtn = document.getElementById("a3");//登录按钮

		//声明数组 存储每个框的验证结果
		var arr =[false ,false];
		/*验证用户名*/
		Ousername.onblur = function(){
		 	var Ouvalue = Ousername.value;
		 	var reg =/^[a-z,A-Z]\w{5,11}$/g;
		 	if(reg.test(Ouvalue)){
		 		arr[0] = true;//将结果存入数组
		 		oY.innerHTML ="*验证通过";
		 		oY.style.color ="green";
		 	}else{
		 		arr[0] = false;//将验证结果存入数组
				oY.innerHTML ="*请输入6-12位英文和数字";
		 		oY.style.color ="red";
		 	}
		 }
		 //验证密码
		 Out.onblur =function(){  //onblur  失焦
		 	var outvalue =Out.value;
		 	var fanwei =/^[a-z,A-Z]\w{2,5}$/g;
		 	if(fanwei.test(outvalue)){
		 		arr[1] = true;
		 		pW.innerHTML ="*验证通过";
		 		pW.style.color ="green";
		 	}else{
		 		arr[1] = false;
				pW.innerHTML ="*请输入3-6位英文和数字";
		 		pW.style.color ="red";
		 	}
		 }
		 // 点击事件
		 Obtn.onclick =function(){
		 	if(arr[0]==true&&arr[1]==true){
		 		window.location.href="../index.html";
		 	}else{
		 		alert("请核对您输入的信息！！！");
		 		Ousername.value="";
		 		Out.value="";
		 	}
		 }
