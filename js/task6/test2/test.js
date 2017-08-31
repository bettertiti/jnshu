/**
 * Created by titi on 2017/8/30.
 */
var routeModule=angular.module('routeModule',['ngRoute']);
routeModule.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/addorde/:orderd',{
                templateUrl:'test/addorder.html',
                controller:'AddOrderController'
        })
    }]);
routeModule.controller("AddOrderController",function ($scope,$routeParams) {
    $scope.order_id=$routeParams.orderd;
});