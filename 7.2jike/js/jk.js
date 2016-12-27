/**
 * Created by Administrator on 2016/12/19 0019.
 */
$(document).ready(function(){
    $(".imgli-show").stop().show();

    $(".nav_menu").hover(function(){
        $(this).children(".show").stop().show();
    },function(){
        $(this).children(".show").stop().hide();
    }) ;//ͷ�������˵�������ʾ

    $("#search").on("click",clickSearch);//�����������
    $(".close").on("click",closeSearch);//����ر�������
    $("#smallList").on("click",smallList);//�б��л�
    $("#bigList").on("click",bigList);//�б��л�

    //��߲˵�����Ч��
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

    //����°벿�ֲ˵�����¼�
    $(".leftBottom li").hover(function(){
        $(this).addClass("classes");
    },function(){
        $(this).removeClass("classes");
    });

    //�Ұ벿�γ��б�˵�
    $(".fl-list li").hover(function(){
        $(this).children(".fl-listShow").stop().show();
        $(this).children("i").removeClass("down-icon");

    },function(){
        $(this).children(".fl-listShow").stop().hide();
        $(this).children("i").addClass("down-icon");
    });

    //ͼƬ�б����пγ��б�
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
        //ͼ���б����пγ��б�
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


    //�ص�����
    $(window).scroll(function () {
        //�����¼�
        var t = $(this).scrollTop();
        if (t > 50) {
            $(".toTop").stop().fadeIn();
        } else {
            $(".toTop").stop().fadeOut();
        }//���ض���
    });
    $(".toTop").click(function () {
        $("body,html").stop().animate({scrollTop: 0}, 300)
    });//�ص�����
});

//���������¼�
function clickSearch(){
   $(".nav,.icon-box").hide(1000);
    $(".searchBox").show(800);
}
//�ر�������
function closeSearch(){
    $(".nav,.icon-box").show();
    $(".searchBox").hide();
}
//�л��б�
function smallList(){
    $(".imgli-show").stop().hide();
    $(".textli-show").stop().show();
}
//�л��б�
function bigList(){
    $(".textli-show").stop().hide();
    $(".imgli-show").stop().show();
}