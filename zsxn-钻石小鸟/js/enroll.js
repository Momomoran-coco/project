
	//正则验证
		var Ousername = document.getElementById("Name");//输入用户名
		var oY = document.getElementById("Ti");//验证提示

		var Out = document.getElementById("lpass");//输入密码
		var pW = document.getElementById("MIM");//验证提示密码
		
		var Out1 = document.getElementById("lpass1");//再次输入密码
		var pW1 = document.getElementById("MIM1");//再次验证提示密码

		var Obtn = document.getElementById("regphone_submit");//注册按钮
		//声明数组 存储每个框的验证结果
		var arr =[false ,false,false];
		/*验证用户名*/
		Ousername.onblur = function(){
		 	var Ouvalue = Ousername.value;
		 	var reg =/^1\d{10}$/g;
		 	if(reg.test(Ouvalue)){
		 		arr[0] = true;//将结果存入数组
		 		oY.innerHTML ="*验证通过";
		 		oY.style.color ="green";
		 	}else{
		 		arr[0] = false;//将验证结果存入数组
				oY.innerHTML ="*请输入11位数的手机号码";
		 		oY.style.color ="red";
		 	}
		 }
		//验证密码
		 Out.onblur =function(){  //onblur  失焦
		 	var outvalue =Out.value;
		 	var fanwei =/^\w{6,20}$/g;//^[a-z,A-Z]\d{5,19}$/g,/^1\d{10}$/g;手机号码验证
		 	var w=fanwei.test(outvalue)
		 	console.log(outvalue)
		 	if(w){
		 		arr[1] = true;
		 		pW.innerHTML ="*验证通过";
		 		pW.style.color ="green";
		 	}else{
		 		arr[1] = false;
				pW.innerHTML ="*请输入6-20位大小写字母，数字";
		 		pW.style.color ="red";
		 	}
		 }
		//验证密码
		 Out1.onblur =function(){  //onblur  失焦
		 	var outvalue =Out1.value;
		 	var fanwei =/^\w{6,20}$/g;
		 	if(fanwei.test(outvalue)){
		 		arr[2] = true;
		 		pW1.innerHTML ="*验证通过";
		 		pW1.style.color ="green";
		 	}else{
		 		arr[2] = false;
				pW1.innerHTML ="*请输入6-20位大小写字母，数字,并与上次密码一致";
		 		pW1.style.color ="red";
		 	}
		 }
		// 点击事件
		 Obtn.onclick =function(){
		 	if(arr[0]==true&&arr[1]==true&&arr[2]==true&&Out1.value==Out.value){
			 		window.location.href="../html/login.html";
			 	}else{
			 		alert("请核对您输入的信息！！！");
			 		Ousername.value="";
			 		Out1.value="";
			 		Out.value="";
		 		}
		 }