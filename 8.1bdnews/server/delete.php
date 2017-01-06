<?php  
	header("Content-type: application/json; charset=utf-8"); 

$link =mysql_connect('localhost','root','root',3306);

if(!$link){
		die("连接数据库失败：" . mysql_error());
	}

	mysql_select_db("bdnews", $link);
	mysql_query("set character set 'utf8'");//读库 
	mysql_query("set names 'utf8'");//写库 

	//删除新闻
	$newid=$_POST['newid'];
	
	
	$sql = "DELETE FROM `news` WHERE `news`.`id`='{$newid}'";

	//echo json_encode($sql);


	if(!mysql_query($sql,$link)){
		echo json_encode(array('error'=>"删除数据失败：".mysql_error()));
	} else {
	    echo json_encode(array('success'=>'ok'));
	}


?>