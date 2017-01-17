var express = require('express');
var router = express.Router();
var db = require('./db.js');

/* 在主页获取新闻时的请求 */
router.get('/', function(req, res, next) {
	var newsType=req.query.newsType;
	var newinfo=req.query;
	
	//console.log(newnull);
	//如果返回的对象中有newsType属性
	if("newsType" in newinfo){
		//console.log("3");
		db.connection.query('SELECT * FROM `news` WHERE `newsType` = ?',[newsType],function(err,rows,fields){
           res.json(rows);
       });
	}else{
		//console.log("4");
		//默认显示10条数据
		db.connection.query('SELECT * FROM news where 1=1 order by id desc limit 10;',function(err,rows,fields){
          res.json(rows);
       });
	}
  

 
});
//点击加载
router.get('/upload',function(req,res,next){
	var page=req.query.page;
	var start=page*10;

	db.connection.query('SELECT * FROM news where 1=1 limit 10',function(err,rows,fields){
          res.json(rows);
          //console.log (rows);
       });

})

module.exports = router;
