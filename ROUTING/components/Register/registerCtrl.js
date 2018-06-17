angular.module('citiesApp')
    .controller('registerCtrl', ['$location', '$scope', '$http', 'localStorageModel',
     function ($location, $scope, $http, localStorageModel) {
        self=this;
        $scope.countryL = ['1','2','3','4','5','6','7']; // need to sync
        $scope.categoryL = ['cat 1','cat 2','cat 3','cat 4','cat 5','cat 6','cat 7']; // need to sync
        $scope.Q1bank = ['What is your mother\'s name?', 'What was your first car?'];
        $scope.Q2bank = ['How is your father\'s name?','Are you handsome?'];



        $scope.submitRegister = function(){
            //todo: register func
        };

        
    }]);