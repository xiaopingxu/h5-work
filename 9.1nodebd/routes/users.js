var express = require('express');
var router = express.Router();
var db = require('./db.js');
var xss = require('xss');


/* 后台路由页面 */
// 获取后台新闻列表
router.get('/getNews', function(req, res, next) {
  db.connection.query('SELECT * FROM `news`order by id desc',function(err,rows,fields){
          res.json(rows);
      });
});


/*确认更新*/
router.post('/update',function(req,res){
	var newsTittle=req.body.newsTittle,
        newsType=req.body.newsType,
        newsImg=req.body.newsImg,
        newsTime=req.body.newsTime,
        newsSrc=req.body.newsSrc,
        newsid=req.body.id;

 	
        db.connection.query('UPDATE `news` SET `newsTittle`=?,`newsType`=?,`newsImg`=?,`newsTime`=?,`newsSrc`=? WHERE `id`=?', [newsTittle, newsType, newsImg, newsTime, newsSrc, newsid], function(err, rows) {
            if (err) {
                res.json({ "update": "fail" });
            }else{
                res.json({ "update": "success" });
            }
            
        });
            
     
   
                
});

//模态框取值
router.get('/curnews',function(req,res){
	var newid=req.query.newid;
	db.connection.query('SELECT * FROM `news` WHERE id=?',[newid],function(err,rows){
		res.json(rows);
	});
});




//删除新闻
router.post('/delete',function(req,res){
	var newid=req.body.newid;
	db.connection.query('DELETE FROM `news` WHERE `news`.`id`=?',[newid],function(err,result){
		if(!err){
    		 res.json({ "delete": "success" });
    	}else{
    		res.json({"delete":"fail"});
    	}
	});
});


//添加新闻
router.post('/insert',function(req,res){

	var	newsTittle=req.body.newsTittle,
		newsType=req.body.newsType,
		newsImg=req.body.newsImg,
		newsTime=req.body.newsTime,
		 newsSrc=req.body.newsSrc;

	
        
        
	db.connection.query('INSERT INTO `news` (`newsTittle`,`newsType`,`newsImg`,`newsTime`,`newsSrc`) VALUES (?,?,?,?,?)', [newsTittle, newsType, newsImg, newsTime, newsSrc],function(err,result){
    	if(!err){
    		 res.json({ "insert": "success" });
    	}else{
    		res.json({"insert":"fail"});
    	}
    });
});
module.exports = router;
