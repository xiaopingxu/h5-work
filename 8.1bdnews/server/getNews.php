<?php  
	header("Content-type: application/json; charset=utf-8"); 

$link =mysql_connect('localhost','root','root',3306);
if(!$link){
	//echo json_encode(array('链接信息'=>'链接失败'));
}else{
	//echo json_encode(array('链接信息'=>'链接成功'));
	$sql='SELECT * FROM news';

	mysql_query("set character set 'utf8'");//读库 

	$result = mysql_db_query('bdnews',$sql,$link);

	$senddata = array( );
	while ($row=mysql_fetch_row($result)){
		array_push($senddata,array(
					'id'=>$row[0],
					'newsType'=>$row[1],
					'newsTittle'=>$row[2],
					'newsImg'=>$row[3],
					'newsTime'=>$row[4],
					'newsSrc'=>$row[5]
			));
	}
	echo json_encode($senddata);
}
// $arr= array(
// 			'newsType' =>'百家', 
// 			'newsTittle' =>'测试动态标题',
// 			'newsImg' =>'img/3.JPEG',
// 			'newsTime' =>'2016-1-3',
// 			'newsSrc' =>'新浪'



// 	);

// echo json_encode($arr);
?>