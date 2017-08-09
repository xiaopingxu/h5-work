
var app=angular.module('myApp', []);
  // .config(function($httpProvider){

  // })
// 查询后台信息
app.controller('customersCtrl', function($scope, $http) {
   $http.get('/chaxunBook')
   .then(function (resp) {
   	console.log(resp);
   	$scope.list = resp.data;
   })
});

// 验证提交信息
app.controller('formCtrl', function($scope,$http) {
	$scope.idnumRegx = "^[0-9]*$";  //数字
	$scope.booknameRegx = "^[\u4E00-\u9FA5A-Za-z0-9_]+$"; //中英文以及数字下划线
	$scope.booksrcRegx ="^[\u4E00-\u9FA5A-Za-z0-9_]+$";
   
    $scope.getFormStatus = function(){
       // console.log($scope.formModel);
        //$scope.formModel = {};
        $http.post('/putawayBook',$scope.formModel)
		   .then(function (resp) {
		   //	console.log("lll:"+$scope.formModel);
		     if(resp.success){
                        alert("添加成功");
                    }
		   })
    }
});

app.controller('borrowformCtrl',
    
 );