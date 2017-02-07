/**
 * Created by Administrator on 2016/12/7 0007.
 */
$(document).ready(function() {
    $(window).scroll(function () {
        //滚动事件
        var t = $(this).scrollTop();
        if (t > 50) {
            $("#reTop").stop().fadeIn();
        } else {
            $("#reTop").stop().fadeOut();
        }//返回顶部

        if (t >= 165) {
            $(".top_nav").addClass("top_navOn");
        } else {
            $(".top_nav").removeClass("top_navOn");
        }//固定在顶部的搜索框

        if(t>=295){
            $(".recommendRight").css({
                "position":" fixed",
                "top":"89px",
                "right":"369px"
            })
        }else{
            $(".recommendRight").css({
                "position":" absolute",
                "top":"9px",
                "right":"0"
            })
        }//实时热点
    });

    $(".s-msg").click(function(){
        $(".msg-box").toggle();
    });//消息


    $("#reTop").click(function () {
        $("body,html").stop().animate({scrollTop: 0}, 300)
    });//回到顶部

    $(".myAttention").show();//我的关注
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
        }); //我的关注-标签切换
    });

    $(".set").hover(function(){
        $(".setMenu").stop().slideToggle();
    });//设置

    var more_pd = $(".more-pd");
    more_pd.hover(function () {
        $("#more_list").slideToggle(100);
    });////更多产品
    more_pd.mouseover(function () {
        $("#more").css({
            "color": "#333",
            "background-color": "#f9f9f9 ",
            "border-left": "1px solid #e7e7e7",
            "border-bottom": "#f0f0f0 1px solid"
        })
    });//更多产品
    more_pd.mouseout(function () {
        $("#more").css({
            "color": "#ffffff",
            "background-color": "#38f ",
            "border-left": "1px solid #e7e7e7",
            "border-bottom": "1px solid #398bfb"
        })
    });//更多产品

    //天气
    $.getScript('http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js', function(_result) {
        //获取IP
        //根据IP定位所在城市
        if (remote_ip_info.ret == '1') {
            $.ajax({
                type: "GET",
                url: "http://wthrcdn.etouch.cn/weather_mini?city="+remote_ip_info.city,
                data: "",
                success: function(msg){
                    var res =  eval('('+msg+')');
                    //alert(msg);
                    if(res.status==1000){
                        //显示信息
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
// 换肤
$(function(skin){
   // 换肤
    var changeSkin=$("#changeSkin");
    $(".s-skin").click(function(){
        changeSkin.slideDown();
    });
    $("#main-wap,#skin-up").click(function(){
        changeSkin.slideUp();
    });


    $(".skinMenu li").each(function (index) {
        //换肤主题标签
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
        }); //点击切换按钮


    });

//皮肤效果预览
    $(".item-img img").mousemove(function(){
        $(".bkgCentent").css({"background-position":"0 0"});
        $("#imgShow").attr("src",this.src)
    }).mouseleave(function(){
        $(".bkgCentent").css({"background-position":"-275px 0"});
        $("#imgShow").attr("src","")
    });
    //更换皮肤


    });

//我的关注
 $(function(attention){
    //鼠标移入显示添加等工具栏
    $(".navtopBox").mousemove(function(){
        $(this).children(".navbarTools").show();
    }).mouseleave (function(){
        $(this).children(".navbarTools").hide();
    })

 });

//设置cookie
function setCookie (name, value){
    //设置名称为name,值为value的Cookie
    var days=10;
    var date=new Date();
    date.setTime(date.getTime()+days*24*60*60*1000); //
    document.cookie= name+"="+value+";expires="+date.toGMTString();//将date赋值给expires


}
// 获取cookie
function getCookie(cname){
    var skinval=document.cookie;
    var cst=skinval.indexOf(cname + "=");//索引的长度
    var value;
    if (cst!=-1) {
        cst=cst + cname.length+1;
        //从cst的位置开始查询';'
        var cend=skinval.indexOf(";",cst);
        if (cend==-1) {
            cend = skinval.length;
        }
        //截取cookie字符串
        value=skinval.substring(cst,cend);
    }else{
        value="";
    }
    return value;
}
// 引用cookie
$(function ()
{
    $(".imgList").click(function(){
        var bkgUrl=$(this).attr("src");
        $("#wrapper").css({"background":"url("+bkgUrl+") no-repeat"});//背景图片
        $("#s_lg_img").attr("src","img/logo_white.png");//白色logo
        $(".bd_btn").css({
            "background-color":"#EDEDED",
            "border":"1px solid #CDC9C9",
            "color":"#000"
        });//搜索按钮样式
        $("#up-menu").css({
            "background-color":"rgba(140,140,140,.3)",
            "border-bottom":"none",
            "color":"#fff"
        }); //顶部导航栏样式

        $(".s-icons a,.nav-box a").css({
            "color":"#fff"
        }); //导航栏字体颜色
        setCookie("skin",bkgUrl );




    });

    //5.页面打开之后判断它是否存在
    var skin = getCookie("skin");
    if (skin == "" ||skin==null)
    {
        //6.不存在就把第一张设为默认背景

    }
    else
    {
        //6.如果存在就把$.cookie("skin")传进去,上一次保存的值给它
        $("#wrapper").css({"background":"url('" + skin + "') no-repeat"});//背景图片
        $("#s_lg_img").attr("src","img/logo_white.png");//白色logo
        $(".bd_btn").css({
            "background-color":"#EDEDED",
            "border":"1px solid #CDC9C9",
            "color":"#000"
        });//搜索按钮样式
        $("#up-menu").css({
            "background-color":"rgba(140,140,140,.3)",
            "border-bottom":"none",
            "color":"#fff"
        }); //顶部导航栏样式

        $(".s-icons a,.nav-box a").css({
            "color":"#fff"
        }); //导航栏字体颜色
    }

});

