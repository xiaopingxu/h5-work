/**
 * Created by Administrator on 2016/12/7 0007.
 */
$(document).ready(function() {
    $(window).scroll(function () {
        //
        var t = $(this).scrollTop();
        if (t > 50) {
            $("#reTop").stop().fadeIn();
        } else {
            $("#reTop").stop().fadeOut();
        }//������������һ��λ��ʱ�����ض�������ť����

        if (t >= 165) {
            $(".top_nav").addClass("top_navOn");
        } else {
            $(".top_nav").removeClass("top_navOn");
        }
    });//�̶��ڶ����İٶ�������

    $(".s-msg").click(function(){
        $(".msg-box").toggle();
    });//��Ϣ


    $("#reTop").click(function () {
        $("body,html").stop().animate({scrollTop: 0}, 300)
    });//���ض���

    $(".myAttention").show();//�ҵĹ�עҳ����ʾ
    $(".tabMenu").each(function (index) {
        $(this).click(function () {
            $(".tabin").removeClass("tabin");
            $(this).addClass("tabin");
            if (index == 0) {
                $(".myAttention").show();
                $(".recommend,.novel").hide();
            } else if (index == 1) {
                $(".myAttention,.novel").hide();
                $(".recommend").show();
            } else if (index == 2) {
                $(".myAttention,.recommend").hide();
                $(".novel").show();
            }
        }); //��ǩ�л���ʾ��ͬ����
    });

    $(".set").hover(function(){
        $(".setMenu").stop().slideToggle();
    });//����

    var more_pd = $(".more-pd");
    more_pd.hover(function () {
        $("#more_list").slideToggle(100);
    });//��꾭�������˵�����-�����Ʒ
    more_pd.mouseover(function () {
        $("#more").css({
            "color": "#333",
            "background-color": "#f9f9f9 ",
            "border-left": "1px solid #e7e7e7",
            "border-bottom": "#f0f0f0 1px solid"
        })
    });//���ͣ�������˵�-�����Ʒ-�ı���ʽ
    more_pd.mouseout(function () {
        $("#more").css({
            "color": "#ffffff",
            "background-color": "#38f ",
            "border-left": "1px solid #e7e7e7",
            "border-bottom": "1px solid #398bfb"
        })
    });//����ƿ������˵�-�����Ʒ-�ı���ʽ

    //����
    $.getScript('http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js', function(_result) {
        //��ȡ�û�IP
        //����IP�ҵ�����
        if (remote_ip_info.ret == '1') {
            $.ajax({
                type: "GET",
                url: "http://wthrcdn.etouch.cn/weather_mini?city="+remote_ip_info.city,
                data: "",
                success: function(msg){
                    var res =  eval('('+msg+')');
                    //alert(msg);
                    if(res.status==1000){
                        //����ɹ�
                        $('#showCity').html(res.data.city);
                        $('#showIcon').html(res.data.wendu+"��");
                        $('#showTemp').html(res.data.forecast[0].type);
                        $('#air').html(res.data.aqi);
                    }

                }
            });
        }
    });




});

$(function(){
   // ��������
    var changeSkin=$("#changeSkin");
    $(".s-skin").click(function(){
        changeSkin.slideDown();
    });
    $("#main-wap,#skin-up").click(function(){
        changeSkin.slideUp();
    });


    $(".skinMenu li").each(function (index) {
        //��������
        $(this).click(function () {
            $(".active-skinmenu").removeClass("active-skinmenu");
            $(this).addClass("active-skinmenu");

            if (index == 0) {
                $(".skin-img").show();
            } else if (index == 1) {
                $(".skin-img").show();
            } else if (index == 2) {
                $(".skin-img").show();
            }
        }); //���������ǩ�л���ʾ��ͬ����


    });

//Ƥ��Ч��Ԥ��
    $(".item-img img").mousemove(function(){
        $(".bkgCentent").css({"background-position":"0 0"});
        $("#imgShow").attr("src",this.src)
    }).mouseleave(function(){
        $(".bkgCentent").css({"background-position":"-275px 0"});
        $("#imgShow").attr("src","")
    });
    //�������Ƥ��/��ʽ
    $(".imgList").click(function(){
        var bkgUrl=$(this).attr("src");
        $("#wrapper").css({"background":"url("+bkgUrl+") no-repeat"});//��ҳ�����ı�
        $("#s_lg_img").attr("src","img/logo_white.png");//logoͼƬ�ı�
        $(".bd_btn").css({
            "background-color":"#EDEDED",
            "border":"1px solid #CDC9C9",
            "color":"#000"
        });//��ť��ʽ
        $("#up-menu").css({
            "background-color":"rgba(140,140,140,.3)",
            "border-bottom":"none",
            "color":"#fff"
        }); //������������ʽ

        $(".s-icons a,.nav-box a").css({
            "color":"#fff"
        }); //������������ɫ
    })


    });
