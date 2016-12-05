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
        $(".clear").click(function(){
            $("span").prev().val("");
        }); //���span��ͬ������һ��Ԫ�ص�ֵ�����������ֵ
    });

    //��֤
    function checkInput (inputObj) {
        var checkUser = /^[\u4e00-\u9fa5]{1,7}|[a-zA-Z]{1,14}$/g;//��֤�û���
        var checkNub = /^((\d2,3)|(\d{3}\-))?13\d{9}$/g;//��֤�ֻ���
        var checkPword = /^[A-Za-z0-9]+$/g;//��֤��֤��
        var checkConpword = /^[0-9a-zA-Z\.��,��������]{6,14}/g;
        //��֤�û���
        if (inputObj.attr("id") =="username") {
           if(checkUser.test(inputObj.val())){
               $("#userTips").replaceWith('<span class="formtips onSuccess"></span>');

            } else {
               var errorMsg = '�û������ܳ���7�����ֻ�14���ַ�.';
               $("#userTips").replaceWith('<span class="formtips onError">' + errorMsg + '</span>');

           }
        }


    //��֤�ֻ�

        if (inputObj.attr("id")== "phone") {
            if(checkNub.test(inputObj.val())){
                $("#phoneTips").replaceWith('<span class="formtips onSuccess"></span>');
            } else {
                var errorMsg = '�ֻ������ʽ����ȷ.';
                $("#phoneTips").replaceWith('<span class="formtips onError">' + errorMsg + '</span>');
            }
        }


        //��֤�ֻ���֤��

        if (inputObj.attr("id") == "pword") {
            if(checkPword.test(inputObj.val())){
                $("#passTips").replaceWith('<span class="formtips onSuccess"></span>');
            }else {
                var errorMsg = '��������ȷ��֤��.';
                $("#passTips").replaceWith('<span class="formtips onError">' + errorMsg + '</span>');
            }
        }

        //��֤����

        if (inputObj.attr("id")=="conpword") {
            if(checkConpword.test(inputObj.val())){
                $("#conpassTips").replaceWith('<span class="formtips onSuccess"></span>');
            } else {
                var errorMsg = '��������ȷ����.';
                $("#conpassTips").replaceWith('<span class="formtips onError">' + errorMsg + '</span>');
            }
        }

    }

});


