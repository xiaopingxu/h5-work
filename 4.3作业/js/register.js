/**
 * Created by Administrator on 2016/12/1 0001.
 */
$(document).ready(function() {
    var checkUser = /^[\u4e00-\u9fa5]{7}|[a-zA-Z]{14}$/g;//��֤�û���
    var checkNub = /^((\d2,3)|(\d{3}\-))?13\d{9}$/g;//��֤�ֻ���
    var checkPword = /^[A-Za-z0-9]+$/g;//��֤��֤��
    var checkConpword = /^[^0-9a-zA-Z\.��,��������]{6,14}/g;
    var flags = [false, false, false, false];
    $(".text-input").each(function () {
        var thisVal = $(this).val();
        /*$(this).focus(function(){
         if(thisVal.length==0){
         console.log("yi"+thisVal.length);
         $(this).siblings(".ipt-tip").show();
         }else{
         console.log(thisVal.length);
         }
         })*/
        $(this).blur(function () {
            var val = $(this).val();
            if (val.length == 0) {
                $(this).siblings(".ipt-tip").hide();
            } else {
                $(this).siblings(".ipt-tip").hide();
                var id = $(this).attr("id");
                checkUsername(id);

            }

        });
    });

    //��֤
    function checkUsername(username) {

        console.log(id);
        var uName = $("#username").val();
        var phone = $("#phone").val();
        var pword = $("#pword").val();
        var conpword = $("#conpword").val();
        var $parent = $(this).parent();
        //��֤�û���
        if (id == username) {
            console.log(username);
            checkUser.test(uName);
            $parent.append('<span class="formtips onSuccess"></span>');

        } else {
            var errorMsg = '�û������ܳ���7�����ֻ�14���ַ�.';
            $parent.append('<span class="formtips onError">' + errorMsg + '</span>');
        }
    }

    //��֤�ֻ�
    function checkUser() {
        if (id == phone) {
            $parent.append('<span class="formtips onSuccess"></span>');
        } else {
            var errorMsg = '�ֻ������ʽ����ȷ.';
            $parent.append('<span class="formtips onError">' + errorMsg + '</span>');
        }
    }

        //��֤�ֻ���֤��
    function checkUser() {
        if (id == pword) {
            checkPword.test(pword);
            $parent.append('<span class="formtips onSuccess"></span>');
        } else {
            var errorMsg = '��������ȷ��֤��.';
            $parent.append('<span class="formtips onError">' + errorMsg + '</span>');
        }

    }
        //��֤����
    function chenkUser(){
        if ($(this).is('#conpword')) {
            if (checkConpword.test(conpword)) {
                $parent.append('<span class="formtips onSuccess"></span>');
            } else {
                var errorMsg = '��������ȷ����.';
                $parent.append('<span class="formtips onError">' + errorMsg + '</span>');
            }
        }

    }
});


