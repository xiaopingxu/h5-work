/**
 * Created by Administrator on 2017/1/3 0003.
 */
$(document).ready(function(){
    refreshNews();

});


function refreshNews(){
    var lists=$("article ul");
    lists.empty();

     $.ajax({
        url:"../server/getNews.php",
        type:"get",
        datatype:"json",
        contentType: "application/json", 
        success:function(datas){
            for(i=0;i<datas.length;i++){
                data = datas[i]
                var list=$("<li></li>").addClass("newsList").prependTo(lists);
                var newsImg=$("<div></div>").addClass("newsImg").appendTo(list);
                var img=$("<img>").attr("src",data.newsImg).appendTo(newsImg);
                var newsContent=$("<div></div>").addClass("newsContent").appendTo(list);
                var h1=$("<h1></h1>").html(data.newsTittle).appendTo(newsContent);
                var p=$("<p></p>").appendTo(newsContent);
                var newTime=$("<span></span>").addClass("newTime").html(data.newsTime).appendTo(p);
                var newSrc=$("<span></span>").addClass("newSrc").html(data.newsSrc).appendTo(p);
            }
        
           
        }
    })

    

}