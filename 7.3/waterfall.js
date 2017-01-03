/**
 * Created by Administrator on 2016/11/28 0028.
 */
$(document).ready(function(){
    $(window).on("load",function(){
        imgLocation();
        var dataImg={"data":[{"src":"20.jpg"},{"src":"121.jpeg"},{"src":"77.jpg"},{"src":"19.jpg"},{"src":"18.jpg"}]};
        window.onscroll=function(){
            if(scrollSide()){
                $.each(dataImg.data,function(index,value){
                    var box=$("<div>").addClass("box").appendTo($("#container"));
                    var content=$("<div>").addClass("content").appendTo(box);
                   // console.log("img/"+$(value).attr("src"));
                    $("<img>").attr("src","img/"+$(value).attr("src")).appendTo(content);
                });
                imgLocation();
            }
        };//监听window滚动事件
    });
});
function scrollSide(){
    var box=$(".box");
    var lastboxHeight=box.last().get(0).offsetTop+Math.floor(box.last().height()/2);//最后一张图片至顶端的高度+最后一张图片的1/2
    var documentHeight=$(document).width();
    var scrollHeight=$(window).scrollTop();
    return(lastboxHeight<scrollHeight+documentHeight)?true:false;

}
//确定图片加载的位置
function imgLocation(){
    var box=$(".box");
    var  boxWidth=box.eq(0).width();//获取到第一张图片的宽度
    var  num=Math.floor($(window).width()/boxWidth);//当前屏幕一排可以放图片的数量
    var boxArr=[];
    box.each(function(index,value){
        var boxHeight=box.eq(index).height();
        if(index<num){
            boxArr[index]=boxHeight;
            $(value).css({
                "position":"relative",
                "top":"0",
                "left":"0"
            });//摆放位置
        }else{
            var minboxHeight=Math.min.apply(null,boxArr);//获取最小图片的高度
            var minboxIndex= $.inArray(minboxHeight,boxArr);//高度最小图片的位置
            $(value).css({
                "position":"absolute",
                "top":minboxHeight,
                "left":box.eq(minboxIndex).position().left
            });//摆放位置
            boxArr[minboxIndex]+=box.eq(index).height();//重新计算高度
        }
    });//获取每张图片的索引及元素
}
$(window).resize(function(){
    imgLocation();
});

