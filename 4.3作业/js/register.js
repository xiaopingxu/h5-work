/**
 * Created by Administrator on 2016/12/1 0001.
 */
$(document).ready(function() {

    var flags = [false, false, false, false];
    $(".text-input").each(function () {
        var thisVal = $(this).val();
        $(this).focus(function() {
            if (thisVal.length == 0) {
                $(this).siblings(".ipt-tip").show();

            } else {
                var inputObj = $(this);
                checkInput (inputObj );
            }
        });

        $(this).blur(function () {
            var val = $(this).val();
            if (val.length == 0) {
                $(this).siblings(".ipt-tip").hide();
            } else {
                $(this).siblings(".ipt-tip").hide();
                var inputObj = $(this);

                checkInput (inputObj );

            }

        });

    });

    //验证
    function checkInput (inputObj) {
        var checkUser = /^[\u4e00-\u9fa5]{7}|[a-zA-Z]{14}$/g;//验证用户名
        var checkNub = /^((\d2,3)|(\d{3}\-))?13\d{9}$/g;//验证手机号
        var checkPword = /^[A-Za-z0-9]+$/g;//验证验证码
        var checkConpword = /^[^0-9a-zA-Z\.，,。？“”]{6,14}/g;
        //验证用户名
        if (inputObj.attr("id") =="username") {
           if(checkUser.test(inputObj.val())){
               $("#userTips").replaceWith('<span class="formtips onSuccess"></span>');

            } else {
               var errorMsg = '用户名不能超过7个汉字或14个字符.';
               $("#userTips").replaceWith('<span class="formtips onError">' + errorMsg + '</span>');
               return;
           }
        }


    //验证手机

        if (inputObj.attr("id")== "phone") {
            if(checkNub.test(inputObj.val())){
                $("#phoneTips").replaceWith('<span class="formtips onSuccess"></span>');
            } else {
                var errorMsg = '手机号码格式不正确.';
                $("#phoneTips").replaceWith('<span class="formtips onError">' + errorMsg + '</span>');
            }
        }


        //验证手机验证码

        if (inputObj.attr("id") == "pword") {
            if(checkPword.test(inputObj.val())){
                $("#passTips").replaceWith('<span class="formtips onSuccess"></span>');
            }else {
                var errorMsg = '请输入正确验证码.';
                $("#passTips").replaceWith('<span class="formtips onError">' + errorMsg + '</span>');
            }
        }

        //验证密码

        if (inputObj.attr("id")=="conpword") {
            if(checkConpword.test(inputObj.val())){
                $("#conpassTips").replaceWith('<span class="formtips onSuccess"></span>');
            } else {
                var errorMsg = '请输入正确密码.';
                $("#conpassTips").replaceWith('<span class="formtips onError">' + errorMsg + '</span>');
            }
        }

    }
    function clear(){

    }
});


