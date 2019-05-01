app.controller('loginCtrl',function($scope,$http){
	$scope.username = "";
	$scope.password = "";
	alert(123123);
	$scope.login = function(){
		alert("123");
		$http({method : "GET",url:"http://localhost:8082/auth-api/user/authentication/"+$scope.username+"/"+$scope.password}).then(function(response){
	    	alert(response.data.check);
	    },function(response){
	    	alert("error");
	    });
	};
});