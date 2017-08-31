/**
 * Created by titi on 2017/8/29.
 */
var myApp = angular.module("myApp", ['ui.router']);
myApp.config(function ($stateProvider, $urlRouterProvider) {
    // $urlRouterProvider.when("", "/js6-manage");
    $stateProvider
        .state("manage", {
            url: "/js6-manage",
            templateUrl: "js6-manage.html"
        })
        .state("articallist", {
            url:"/js6-articallist",
            templateUrl: "js6-articallist.html"
        })

});