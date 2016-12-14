/**
 * Created by Administrator on 2016/12/7 0007.
 */
$(document).ready(function() {
    $(window).scroll(function () {
        var t = $(this).scrollTop();
        if (t > 50) {
            $("#reTop").stop().fadeIn();
        } else {
            $("#reTop").stop().fadeOut();
        }//当滚动条到达一定位置时‘返回顶部’按钮出现

        if (t >= 165) {
            $(".top_nav").addClass("top_navOn");
        } else {
            $(".top_nav").removeClass("top_navOn");
        }
    });//固定在顶部的百度搜索框

    $("#reTop").click(function () {
        $("body,html").stop().animate({scrollTop: 0}, 300)
    });//返回顶部

    $("#block_container").load("https://openapi.baidu.com/rest/2.0/hao123/saveOrder?access_token=xxx&format=xml");//我的关注页面显示
    $(".tabMenu").each(function (index) {
        $(this).click(function () {
            $(".tabin").removeClass("tabin");
            $(this).addClass("tabin");
            if (index == 0) {
                $("#block_container").load("http://www.weather.com.cn/data/sk/101110101.html");
            } else if (index == 1) {
                $("#block_container").load("http://www.weather.com.cn/data/sk/101110101.html");
            } else if (index == 2) {
                $("#block_container").load("http://www.weather.com.cn/data/sk/101110101.html");
            }
        }); //标签切换显示不同内容
    });
    var more_pd = $(".more-pd");
    more_pd.hover(function () {
        $("#more_list").slideToggle(100);
    });//鼠标经过下拉菜单出现-更多产品
    more_pd.mouseover(function () {
        $("#more").css({
            "color": "#333",
            "background-color": "#f9f9f9 ",
            "border-left": "1px solid #e7e7e7",
            "border-bottom": "#f0f0f0 1px solid"
        })
    });//鼠标停留下拉菜单-更多产品-改变样式
    more_pd.mouseout(function () {
        $("#more").css({
            "color": "#ffffff",
            "background-color": "#38f ",
            "border-left": "1px solid #e7e7e7",
            "border-bottom": "1px solid #398bfb"
        })
    });//鼠标移开下拉菜单-更多产品-改变样式

    //天气
    $.getScript('http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js', function(_result) {
        //获取用户IP
        //根据IP找到城市
        if (remote_ip_info.ret == '1') {
            $.ajax({
                type: "GET",
                url: "http://wthrcdn.etouch.cn/weather_mini?city="+remote_ip_info.city,
                data: "",
                success: function(msg){
                    var res =  eval('('+msg+')');
                    //alert(msg);
                    if(res.status==1000){
                        //请求成功
                        $('#showCity').html(res.data.city);
                        $('#showIcon').html(res.data.wendu+"℃");
                        $('#showTemp').html(res.data.forecast[0].type);
                        $('#air').html(res.data.aqi);
                    }

                }
            });
        }
    });




});

$(function(){
   // 换肤功能
    var changeSkin=$("#changeSkin");
    $(".s-skin").click(function(){
        changeSkin.slideDown();
    });
    $("#main-wap,#skin-up").click(function(){
        changeSkin.slideUp();
    });


    $(".skinMenu li").each(function (index) {
        //换肤主题
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
        }); //换肤主题标签切换显示不同内容



    //皮肤效果预览
        $(".item-img img").mousemove(function(){
            $(".bkgCentent").css({"background-position":"0 0"});
            $("#imgShow").attr("src",this.src)
        }).mouseleave(function(){
            $(".bkgCentent").css({"background-position":"-275px 0"});
                $("#imgShow").attr("src","")
        });

    //点击更换皮肤
        $(".item-img img").click(function(){
            var bkgUrl=this.src;
            $("#wrapper").css({"background":"url('bkgUrl')"})
        })

    });




    });
