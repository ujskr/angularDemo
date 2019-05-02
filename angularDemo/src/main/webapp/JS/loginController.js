app.controller('loginCtrl',function($scope,$http){
	$scope.username = "";
	$scope.password = "";
	$scope.errorMessage = "";
	//var config = {headers : {"userName":$scope.username,"password":$scope.password}};
					$scope.login = function() {
						$http
								.get(
										"http://localhost:8082/auth-api/user/authentication?userName="
												+ $scope.username
												+ "&password="
												+ $scope.password)
								.then(
										function(response) {
											if (response.data.check == 1) {
												$scope.errorMessage = "";
												document
														.getElementById("navigate").href = "#!quizDashBoard";
												document.getElementById(
														"navigate").click();
											}
											else{
												$scope.errorMessage = "userName or password is incorrect.";
											}
										}, function(response) {
											alert("error");
										});
					};
});