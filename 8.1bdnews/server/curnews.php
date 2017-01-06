<?php  
	header("Content-type: application/json; charset=utf-8"); 

$link =mysql_connect('localhost','root','root',3306);

if(!$link){
		die("连接数据库失败：" . mysql_error());
	}

	
	mysql_query("set character set 'utf8'");//读库 
	mysql_query("set names 'utf8'");//写库 

	//修改新闻
	$newid=$_GET["newid"];
	
	
	$sql = "SELECT * FROM `news` WHERE `id`={$newid}";
	$result = mysql_db_query('bdnews',$sql,$link);	
	$senddata = array();
	while($row = mysql_fetch_assoc($result)){
            array_push($senddata,array(
                    'id'=>$row['id'],
                    'newsType'=>$row['newsType'],
                    'newsImg'=>$row['newsImg'],
                    'newsTime'=>$row['newsTime'],
                    'newsSrc'=>$row['newsSrc'],
                    'newsTittle'=>$row['newsTittle']
                ));
        }
        echo json_encode($senddata);


	//echo json_encode($sql);


	// if(!mysql_query($sql,$link)){
	// 	echo json_encode(array('error'=>"删除数据失败：".mysql_error()));
	// } else {
	//     echo json_encode(array('success'=>'ok'));
	// }


?>