
<?php  
	header("Content-type: application/json; charset=utf-8"); 

	$link =mysql_connect('localhost','root','root',3306);
	if(!$link){
		die("连接数据库失败：" . mysql_error());
	}

	mysql_select_db("bdnews", $link);
	mysql_query("set character set 'utf8'");//读库 
	mysql_query("set names 'utf8'");//写库 

	//插入新闻
	$newstitle=$_POST['newsTittle'];
	$newstype=$_POST['newsType'];
	$newsimg=$_POST['newsImg'];
	$newstime=$_POST['newsTime'];
	$newssrc=$_POST['newsSrc'];
	
	$sql = "INSERT INTO `news` (`newsType`,`newsTittle`,`newsImg`,`newsTime`,`newsSrc`) VALUES ('{$newstype}','{$newstitle}','{$newsimg}','{$newstime}','{$newssrc}')";


	if(!mysql_query($sql,$link)){
		echo json_encode(array('error'=>"添加数据失败：".mysql_error()));
	} else {
	    echo json_encode(array('success'=>'ok'));
	}


?>