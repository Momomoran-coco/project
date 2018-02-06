// console.log($);
$(function(){
 	$(".dengluL").click(function(){
        //获取用户名的value值
        var c1 =document.getElementsByClassName("denglu1")[0];
        var c=c1.value
        //console.log(c)
        //获取密码的value值
        var b1 =document.getElementsByClassName("denglu2")[0];
        var b=b1.value
        //console.log(b)
        $.cookie(c,b,{expires:31})
    })
    //enroll cookie值
    $(".reg_btn").click(function(){
        //获取用户名的value值
        var Y1 =document.getElementsByClassName("name1")[0];
        var Y=Y1.value
        //console.log(Y)
        //获取密码的value值
        var M1 =document.getElementsByClassName("lpassQ1")[0];
        var M=M1.value
        //console.log(M)
        $.cookie(Y,M,{expires:31})
    })
})