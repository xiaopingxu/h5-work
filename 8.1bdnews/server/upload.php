<?php  

	header("Content-type: application/json; charset=utf-8"); 

	$link =mysql_connect('localhost','root','root',3306);
	if($link){
		//echo json_encode(array('success'=>'ok'));

		$page = $_GET['page']; //获取请求的页数 
		$start = $page*10; 
		 $sql = "SELECT * FROM news limit $start,10"; 
			mysql_query("set character set 'utf8'");//读库 
			mysql_query("set names 'utf8'");//写库 

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
			
		

		mysql_close($link)
		//echo json_encode(array('success'=>'none'));
	
?>