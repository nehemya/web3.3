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
        
        .when('/logHome', {
            templateUrl: 'components/LogHome/logHome.html',
            controller : 'logHomeCtrl',
            resolve: {
                popCat: function(PoiService){
                    return PoiService.LogPopCat();
                },
                logHist: function(PoiService){
                    return PoiService.logHistory();
                }

            }
            
        }) 
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
            controller : 'registerCtrl'
        })
        .when('/explore', {
            templateUrl: 'components/PoiTable/poiTable.html',
            controller : 'poiTableCtrl',
            resolve: {
                Pois: function(PoiService){
                    return PoiService.getAllPoi();
                }
            }
        })
        .otherwise({ redirectTo: '/' });
}]);