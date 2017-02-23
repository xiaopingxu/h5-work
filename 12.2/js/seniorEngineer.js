/**
 * Created by Administrator on 2017/2/23 0023.
 */

$(document).ready(function() {

    $(".js-show").show();//我的关注
    $("ul li").each(function (index) {
        $(this).click(function () {
            $(".tab-active").removeClass("tab-active");
            $(this).addClass("tab-active");
            if (index == 0) {
                $(".js-show").show();
                $(".css-show,.html-show,.http-show,.xmind-show").hide();
            } else if (index == 1) {
                $(".js-show,.html-show,.http-show,.xmind-show").hide();
                $(".css-show").show();
            } else if (index == 2) {
                $(".css-show,.js-show,.http-show,.xmind-show").hide();
                $(".html-show").show();
            }else if(index==3){
                $(".css-show,.js-show,.html-show,.xmind-show").hide();
                $(".http-show").show();
            }else{
                $(".css-show,.js-show,.html-show,.http-show").hide();
                $(".xmind-show").show();
            }
        }); //标签切换
    });
});