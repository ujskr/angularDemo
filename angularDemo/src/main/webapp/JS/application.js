app=angular.module('myApp',['ngRoute']);
app.config(function($routeProvider) {
    $routeProvider
    .when("/login", {
        templateUrl : "Partials/Login.html",
        controller : "loginCtrl"
    })
    .when("/signUp", {
        templateUrl : "Partials/SignUp.html",
        controller : "JS/signUpController.js"
    });
});