/**
 * Created by Administrator on 2016/12/19 0019.
 */
$(document).ready(function(){
    $(".imgli-show").stop().show();

    $(".nav_menu").hover(function(){
        $(this).children(".show").stop().show();
    },function(){
        $(this).children(".show").stop().hide();
    }) ;//头部导航菜单下拉显示

    $("#search").on("click",clickSearch);//点击打开搜索框
    $(".close").on("click",closeSearch);//点击关闭搜索框
    $("#smallList").on("click",smallList);//列表切换
    $("#bigList").on("click",bigList);//列表切换

    //左边菜单浮出效果
    $(".leftTop li").hover(function(){
        $(this).children(".listShow").stop().show();
        $(this).children(".listTitle").css({
            "border-left":"1px solid #EEEEE0",
            "border-right":"1px solid #EEEEE0",
            "box-shadow":"2px 2px 3px  #aaaaaa"
        })
    },function(){
        $(this).children(".listShow").stop().hide();
        $(this).children(".listTitle").css({
            "border-left":"1px solid #35b558",
            "border-right":"1px solid #35b558",
            "box-shadow":"none"
        })
    });

    //左边下半部分菜单鼠标事件
    $(".leftBottom li").hover(function(){
        $(this).addClass("classes");
    },function(){
        $(this).removeClass("classes");
    });

    //右半部课程列表菜单
    $(".fl-list li").hover(function(){
        $(this).children(".fl-listShow").stop().show();
        $(this).children("i").removeClass("down-icon");

    },function(){
        $(this).children(".fl-listShow").stop().hide();
        $(this).children("i").addClass("down-icon");
    });

    //图片列表所有课程列表
   $(".lessonsList").hover(function(){
       var box=$("<div>").addClass("coveR-wrap");
       $("<i>").appendTo(box);
        $("<img>").attr("src","img/play.png").appendTo(box);
        $(this).children(".lessons-img").after(box);
       $(this).find("p,.zhongji,.personNum").stop().slideDown();

    },function(){
       $(".coveR-wrap").remove();
       $(this).find("p,.zhongji,.personNum").stop().slideUp();
   });
        //图文列表所有课程列表
    $(".img-textList").hover(function(){
        var box=$("<div>").addClass("textcoveR-wrap");
        $("<i>").appendTo(box);
        $("<img>").attr("src","img/play.png").appendTo(box);
        $(this).children(".text-img").after(box);

    },function(){
        $(".textcoveR-wrap").remove();
    });


    $(".pageList").each(function(){
        $(this).click(function () {
            $(".current").removeClass("current");
            $(this).addClass("current");
        });
        $(this).hover(function(){
            $(this).css({
                "border":"1px solid #35b558",
                "color":"#35b558"
            })
        },function(){
            $(this).css({
                "border":"1px solid #CCCCCC",
                "color":"#8c8c8c"
            })
        })
    });


    //回到顶部
    $(window).scroll(function () {
        //滚动事件
        var t = $(this).scrollTop();
        if (t > 50) {
            $(".toTop").stop().fadeIn();
        } else {
            $(".toTop").stop().fadeOut();
        }//返回顶部
    });
    $(".toTop").click(function () {
        $("body,html").stop().animate({scrollTop: 0}, 300)
    });//回到顶部
});

//搜索框点击事件
function clickSearch(){
   $(".nav,.icon-box").hide(1000);
    $(".searchBox").show(800);
}
//关闭搜索框
function closeSearch(){
    $(".nav,.icon-box").show();
    $(".searchBox").hide();
}
//切换列表
function smallList(){
    $(".imgli-show").stop().hide();
    $(".textli-show").stop().show();
}
//切换列表
function bigList(){
    $(".textli-show").stop().hide();
    $(".imgli-show").stop().show();
}