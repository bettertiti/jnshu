/**
 * Created by titi on 2017/8/30.
 */
var routeModule=angular.module('routeModule',['ngRoute']);
routeModule.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/addorde',{
                templateUrl:'test/addorder.html',

        }).
        when('/showorde',{
            templateUrl:'test/showorder.html',

        }).
        otherwise({
            redirectTo:'/addorder'
        }) ;
    }]);
