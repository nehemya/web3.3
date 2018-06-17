angular.module('citiesApp')
    .controller('registerCtrl', ['$location', '$scope', '$http', 'localStorageModel', 'RegisterService',
     function ($location, $scope, $http, localStorageModel, RegisterService) {
        self=this;
        $scope.countryL = RegisterService.countries;
        $scope.categoryL = RegisterService.categories;
        $scope.Q1bank = ['What is your mother\'s name?', 'What was your first car?'];
        $scope.Q2bank = ['How is your father\'s name?','Are you handsome?'];
        



        $scope.submitRegister = function(){
            console.log("");
        };

       
        
    }]);