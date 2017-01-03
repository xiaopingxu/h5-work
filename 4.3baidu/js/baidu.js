/**
 * Created by Administrator on 2016/11/30 0030.
 */
$(document).ready(function(){
    $("#login").click(function(){
        $(".loginBox").show();
    });//点击登录
    $(".closeLogin").click(function(){
        $(".loginBox").hide();
    });//点击关闭


    $("#sub").on("click",loginForm);//登录按钮
    $("#register").click(function(){
        location.href="./register.html";
    }); //立即注册
});
//表单验证
function loginForm(){
    var username = $("#uName");
    var usernameValue = username.val();
    var password = $("#pword");
    var passwordValue = password.val();
    var verify =$("#verify");
    var verifyValue=verify.val()
    if(usernameValue == ""){
        $("#tips").html("请填写手机/邮箱/用户名");
        username.focus();
        return false;
    }else if(passwordValue == "") {
        $("#tips").html("请填写密码");
        password.focus();
        return false;
    }else if(verifyValue==""){
        $("#tips").html("验证码错误");
    }else{
        //alert("登录成功");
        location.href="./bdMember.html";
    }
}