
$(document).ready(function(){

 $(".queryPage").show();//查询页面
    $(".list-group-item").each(function (index) {
        $(this).click(function () {
            $(".active").removeClass("active");
            $(this).addClass("active");
            if (index == 0) {
                $(".queryPage").show();
                $(".putawayPage,.borrowPage,.returnPage,.editPage").hide();
            } else if (index == 1) {
                $(".queryPage,.borrowPage,.returnPage,.editPage").hide();
                $(".putawayPage").show();
            } else if (index == 2) {
                $(".queryPage,.putawayPage,.returnPage,.editPage").hide();
                $(".borrowPage").show();
            } else if (index == 3) {
                $(".queryPage,.putawayPage,.borrowPage,.editPage").hide();
                $(".returnPage").show();
            } else if (index == 4) {
                $(".queryPage,.putawayPage,.borrowPage,.returnPage").hide();
                $(".editPage").show();
            }
        }); //我的关注-标签切换
    });
})