/**
 * Created by Administrator on 2016/12/1 0001.
 */
$(document).ready(function() {

    $(".text-input").each(function () {

        $(this).focus(function() {
                var thisVal = $(this).val();
                if (thisVal.length == 0) {
                    $(this).siblings(".ipt-tip").show();

                } else {
                    var inputObj = $(this);

                    checkInput (inputObj );
                }
            });//获取焦点事件

            $(this).blur(function () {
                var val = $(this).val();
                if (val.length == 0) {
                    $(this).siblings(".ipt-tip").hide();
                } else {
                    $(this).siblings(".ipt-tip").hide();
                    var inputObj = $(this);
                    checkInput(inputObj);

                }

            });//失去焦点事件


       /* $(".clear").click(function(){
            $(this).prev().val("");
           // var inputObj=$(this).prev();
            console.log($(this).prev().val().length);
           // checkInput (inputObj);
        }); //清除span的同级的上一个元素的值即清除输入框的值*/


        $(".login-btn").click(function(){
            location.href="./bdMember.html";
        });


});

//验证
function checkInput (inputObj) {
    var checkUser = /^[\u4e00-\u9fa5]{1,7}|[a-zA-Z]{1,14}$/g;//验证用户名
    var checkNub = /^((\d2,3)|(\d{3}\-))?13\d{9}$/g;//验证手机号
    var checkPword = /^[A-Za-z0-9]+$/g;//验证验证码
    var checkConpword = /^[0-9a-zA-Z\.，,。？“”]{6,14}/g;
    var flags = [false, false, false, false];
        //验证用户名
   // console.log(inputObj.val().length);
        if (inputObj.attr("id") =="username") {

           if(checkUser.test(inputObj.val())){
               $("#userTips").replaceWith('<span class="formtips onSuccess"></span>');

           } else if(inputObj.val().length<=2){
               var errorMsg = '此用户名太受欢迎,请更换一个';
               $("#userTips").replaceWith('<span class="formtips onError">' + errorMsg + '</span>');
              return flags[0]=false;
           } else {
               var errorMsg = '用户名不能超过7个汉字或14个字符.';
               $("#userTips").replaceWith('<span class="formtips onError">' + errorMsg + '</span>');

           }
        }


    //验证手机

        if (inputObj.attr("id")== "phone") {
            if(checkNub.test(inputObj.val())){
                $("#phoneTips").replaceWith('<span class="formtips onSuccess"></span>');

            }else {
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

            }else {
                var errorMsg = '请输入正确密码.';
                $("#conpassTips").replaceWith('<span class="formtips onError">' + errorMsg + '</span>');

            }
        }


    }

    $(".submit-btn").click(function(){
        location.href="./bdMember.html"
    });
});



