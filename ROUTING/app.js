var app = angular.module('citiesApp', ["ngRoute", "LocalStorageModule"]);

app.config(['$locationProvider', '$routeProvider',
function($locationProvider, $routeProvider)  {


    $locationProvider.hashPrefix('');


    $routeProvider.when('/', {
        templateUrl: 'components/Home/home.html',
        controller:'homeCtrl',
        resolve: {
                homePrep: function(PoiService){
                    return PoiService.homePrep();
                }
            }
    })
        /*
        .when('/logHome', {
            templateUrl: 'components/LogHome/logHome.html',
            controller : 'logHomeCtrl'
            
        })*/ 
        .when('/about', {
            templateUrl: 'components/About/about.html',
            controller : 'aboutCtrl'
        })
        .when('/login', {
            templateUrl: 'components/Login/login.html',
            controller : 'loginCtrl'
        })
        .when('/register', {
            templateUrl: 'components/Register/register.html',
            controller : 'registerCtrl',
            resolve: {
                loginPrep: function (loginService) { 
                    return loginService.loginPrep();
                 }
            }
        })
        .otherwise({ redirectTo: '/' });
}]);