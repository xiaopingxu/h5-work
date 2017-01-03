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
        };//����window�����¼�
    });
});
function scrollSide(){
    var box=$(".box");
    var lastboxHeight=box.last().get(0).offsetTop+Math.floor(box.last().height()/2);//���һ��ͼƬ�����˵ĸ߶�+���һ��ͼƬ��1/2
    var documentHeight=$(document).width();
    var scrollHeight=$(window).scrollTop();
    return(lastboxHeight<scrollHeight+documentHeight)?true:false;

}
//ȷ��ͼƬ���ص�λ��
function imgLocation(){
    var box=$(".box");
    var  boxWidth=box.eq(0).width();//��ȡ����һ��ͼƬ�Ŀ��
    var  num=Math.floor($(window).width()/boxWidth);//��ǰ��Ļһ�ſ��Է�ͼƬ������
    var boxArr=[];
    box.each(function(index,value){
        var boxHeight=box.eq(index).height();
        if(index<num){
            boxArr[index]=boxHeight;
            $(value).css({
                "position":"relative",
                "top":"0",
                "left":"0"
            });//�ڷ�λ��
        }else{
            var minboxHeight=Math.min.apply(null,boxArr);//��ȡ��СͼƬ�ĸ߶�
            var minboxIndex= $.inArray(minboxHeight,boxArr);//�߶���СͼƬ��λ��
            $(value).css({
                "position":"absolute",
                "top":minboxHeight,
                "left":box.eq(minboxIndex).position().left
            });//�ڷ�λ��
            boxArr[minboxIndex]+=box.eq(index).height();//���¼���߶�
        }
    });//��ȡÿ��ͼƬ��������Ԫ��
}
$(window).resize(function(){
    imgLocation();
});

