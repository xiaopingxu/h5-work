var express = require('express');
var xss = require('xss');
var router = express.Router();
var db = require('./db.js');

/* GET users listing. */
// 获取后台查询列表
router.get('/chaxunBook', function(req, res, next) {
  db.connection.query('SELECT * FROM `book`order by id desc',function(err,rows,fields){
  	//console.log("shujushuju");
    res.json(rows);
  });
});

//添加新闻
router.post('/putawayBook',function(req,res){
    console.log("--------");
       var id=req.body.id,
	      bookName=xss(req.body.bookName),
	      bookType=req.body.bookType,
	      bookSrc=xss(req.body.bookSrc),
	      bookTime=req.body.bookTime,
	      num=req.body.num;


  db.connection.query('INSERT INTO `book` (`id`,`bookName`,`bookType`,`bookSrc`,`time`,`sum`) VALUES (?,?,?,?,?,?)', [id, bookName, bookType,bookSrc,bookTime,num],function(err,result){
    console.log(err);
    if(!err){
      res.json({ "insert": "success" });
    }else{
      res.json({"insert":"fail"});
    }
  });
});
module.exports = router;
