/**
 * Created by Administrator on 2017/1/3 0003.
 */
$(document).ready(function(){
	var $newsTbody = $("#newsTable tbody");
    refreshNews();
   


    //删除新闻
     var deleteId=null;
    $('#newsTable tbody').on('click','.btn-warning',function(e){
       
        $('#deleteModal').modal('show');
       deleteId=$(this).parent().prevAll().eq(5).html();
       	//console.log(deleteId);
    });

    $('#deleteModal #confirmDelete').click(function(e){
       
        if (deleteId){
            $.ajax({
                url:'../server/delete.php',
                type:'post',
                data:{newid:deleteId},
             	datatype:'json', 
                success:function(data){
                  //  console.log(data);
                    $("#deleteModal").modal("hide");
                    refreshNews();
                }
            })
        }
    });


    //修改新闻
     var updateId=null;
    $('#newsTable tbody').on('click','.btn-primary',function(e){
       
        $('#updateModal').modal('show');
       updateId=$(this).parent().prevAll().eq(5).html();
       	//console.log(deleteId);
       	if (updateId){
            $.ajax({
                url:'../server/curnews.php',
                type:'get',
                data:{newid:updateId},
             	datatype:'json', 
                success:function(data){
                   console.log(data);
                    $("#unewsTittle").val(data[0].newsTittle);
                    $("#unewsType").val(data[0].newsType);
                    $("#unewsImg").val(data[0].newsImg);
                    $("#unewsSrc").val(data[0].newsSrc);
                    var utime = data[0].newsTime;
                    $("#unewsTime").val(utime);                 
                }
            })
        }
    });

    $('#updateModal #confirmUpdate').click(function(e){
        $.ajax({
            url: "server/update.php",
            type: "post",/*post方法将修改后的数据传回php*/
            data:{
                "newsTittle":$("#unewsTittle").val(),
                "newsType":$("#unewsType").val(),
                "newsImg":$("#unewsImg").val(),
                "newsTime":$("#unewsTime").val(),
                "newsSrc":$("#unewsSrc").val(),
                "id":updateId
            },
            success:function(data){
                $("#updateModal").modal("hide");
                refreshNews();              
            }
        })
    });

    //添加新闻
    $('#btnSubmit').click(function(e){
        e.preventDefault();

        //输入判断
        var nTittle=$('#newsTittle');
        var nImg=$('#newsImg');
        var nTime=$('#newsTime');
        var nSrc=$('#newsSrc');

        if(nTittle.val()=="" || nImg.val()=="" || nSrc.val()=="" || nTime.val()==""){
            if(nTittle.val()==""){
                nTittle.parent().addClass('has-error');
            }else{
                nTittle.parent().removeClass('has-error');
            }

            if(nImg.val()==""){
                nImg.parent().addClass('has-error');
            }else{
                nImg.parent().removeClass('has-error');
            }

            if(nTime.val()==""){
                nTime.parent().addClass('has-error');
            }else{
                nTime.parent().removeClass('has-error');
            }

            if(nSrc.val()==""){
                nSrc.parent().addClass('has-error');
            }else{
                nSrc.parent().removeClass('has-error');
            }

        }else{
            //提交添加
            var jsonNews={
                newsTittle:$('#newsTittle').val(),
                newsType:$('#newsType').val(),
                newsImg:$('#newsImg').val(),
                newsTime:$('#newsTime').val(),
                newsSrc:$('#newsSrc').val()
            };

            $.ajax({
                url:'../server/insert.php',
                type:'post',
                data:jsonNews,
                datatype:'json',
                success:function(data){
                    console.log(data);
                    refreshNews();
                }
            })

        }
    });





    function refreshNews(){
	 $newsTbody.empty();
        $.ajax({
            type:'get',
            url:'../server/getNews.php',
            datatype:'json',
            success:function(data){
               // console.log(data);
                data.forEach(function(item,index,array){
                    var tdid=$('<td></td>').html(item.id);
                    var tdtype=$('<td></td>').html(item.newsType);
                    var tdtittle=$('<td></td>').html(item.newsTittle);
                    var tdimg=$('<td></td>').html(item.newsImg);
                    var tdsrc=$('<td></td>').html(item.newsSrc);
                    var tdtime=$('<td></td>').html(item.neesTime);
                    var tdctrl=$('<td></td>');
                    var btnupdate=$('<button></button>').addClass('btn btn-xs btn-primary').html("修改");
                    var btndeleate=$('<button></button>').addClass('btn btn-xs btn-warning').html('删除');
                    tdctrl.append(btnupdate,btndeleate);
                    var tRow=$('<tr></tr>');
                    tRow.append(tdid,tdtype,tdtittle,tdimg,tdtime,tdsrc,tdctrl);
                    $("#newsTable").append(tRow);

                })
            }

        })

    }

});





