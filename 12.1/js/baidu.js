/**
 使用了单例模式：1、提供了对唯一实例的受控访问。
 2、由于在系统内存中只存在一个对象，因此可以节约系统资源，对于一些需要频繁创建和销毁的对象单例模式无疑可以提高系统的性能。
 3、允许可变数目的实例。
 **/
$(document).ready(function(){

     $("#login").click(function(){
        $(".loginBox").show();

    });//点击登录
    $(".closeLogin").click(function(){
        $(".loginBox").hide();
    });//点击关闭


    var  loginForm =
    {
        username: "uName",
        password: "pword",
        verify:"verify",

        init: function () {
            loginForm.uname =$("#" + this.username);
            loginForm.pword =$("#" + this.password);
            loginForm.Verify = $("#" +this.verify);
            var me=this;
            me.bindbtn();
            me.renderSubmit();
        },
        bindbtn: function () {
            var submit = this;
            submit.btn = $("#sub");
        },
        renderSubmit: function () {
            var submit = this;
            submit.btn.click(function () {
                submit.test();
            });

        },
        test:function(){
            var usernameValue =loginForm.uname.val();
            var passwordValue =loginForm.pword.val();
            var verifyValue =loginForm.Verify.val();
            console.log(usernameValue);
            console.log(passwordValue);
            console.log(verifyValue);
            if (usernameValue == "") {
                $("#tips").html("请填写手机/邮箱/用户名");
                this.uname.focus();
                return false;
            } else if (passwordValue == "") {
                $("#tips").html("请填写密码");
                this.pword.focus();
                return false;

            } else if (verifyValue == "") {
                $("#tips").html("验证码错误");
            } else {
                //alert("登录成功");
                location.href = "https://www.baidu.com/";
            }
        }

    };
    loginForm.init();
});