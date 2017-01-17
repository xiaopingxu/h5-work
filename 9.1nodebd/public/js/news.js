/**
 * Created by Administrator on 2017/1/3 0003.
 */
$(document).ready(function(){
    refreshNews();

    $('nav a').click(function(e){

        e.preventDefault();
        var type=$(this).text();
        
        refreshNews(type);

    });



    function refreshNews(newsType){
    
        var lists=$("article ul");
        lists.empty();

         $.ajax({
            url:"/news",
            type:'get',
            datatype:"json",
            data:{'newsType':newsType},
            success:function(data){
              
              data.forEach(function(item,index,array){
                    
                    var list=$("<li></li>").addClass("newsList").prependTo(lists);
                    var newsImg=$("<div></div>").addClass("newsImg").appendTo(list);
                    var img=$("<img>").attr("src",item.newsImg).appendTo(newsImg);
                    var newsContent=$("<div></div>").addClass("newsContent").appendTo(list);
                    var h1=$("<h1></h1>").html(item.newsTittle).appendTo(newsContent);
                    var p=$("<p></p>").appendTo(newsContent);
                    var newTime=$("<span></span>").addClass("newTime").html(item.newsTime).appendTo(p);
                    var newSrc=$("<span></span>").addClass("newSrc").html(item.newsSrc).appendTo(p);
                })
            
            }
        });
    }


    //动态加载



    $(window).scroll(function(){
    　　var scrollTop = $(this).scrollTop();
    　　var scrollHeight = $(document).height();
    　　var windowHeight = $(this).height();
         
    　　if(scrollTop + windowHeight == scrollHeight){

            $('#notice').show();
    　　　　//alert("you are in the bottom");
            $('#notice').click(function(e){
                 e.preventDefault();
                var i=1 ;
            
                  $.ajax({
                    url:"/news/upload",
                    type:'get',
                    data:{page:i},
                    datatype:'json', 
                    success:function(data){
                        if(data){ 
                            console.log(data);
                    
                         data.forEach(function(item,index,array){
                                var lists=$("article ul");
                                var list=$("<li></li>").addClass("newsList").prependTo(lists);
                                var newsImg=$("<div></div>").addClass("newsImg").appendTo(list);
                                var img=$("<img>").attr("src",item.newsImg).appendTo(newsImg);
                                var newsContent=$("<div></div>").addClass("newsContent").appendTo(list);
                                var h1=$("<h1></h1>").html(item.newsTittle).appendTo(newsContent);
                                var p=$("<p></p>").appendTo(newsContent);
                                var newTime=$("<span></span>").addClass("newTime").html(item.newsTime).appendTo(p);
                                var newSrc=$("<span></span>").addClass("newSrc").html(item.newsSrc).appendTo(p);
                             }); 
                             i++;
                          
                          $('#notice').hide();
                        }else{
                             $('#notice').html("已经是全部了");
                        }
                    
        　　　　    }
                });
            
               
        })
            
    
    }
    
    
   })
         
 



});

