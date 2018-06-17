angular.module('citiesApp')
    .controller('registerCtrl', ['$location', '$scope', '$http', 'localStorageModel', 'loginService',
     function ($location, $scope, $http, localStorageModel, loginService) {
        self=this;
        let server_url='http://localhost:3000/';
        $scope.countryL = loginService.countries;
        $scope.categoryL = ['cat 1','cat 2','cat 3','cat 4','cat 5','cat 6','cat 7']; // need to sync
        $scope.Q1bank = ['What is your mother\'s name?', 'What was your first car?'];
        $scope.Q2bank = ['How is your father\'s name?','Are you handsome?'];
        



        $scope.submitRegister = function(){
            $http.post(server_url + "Users/addUser", $scope.user)
            .then(function(response){
                if(response.status === 200)
                {
                    alert("success");
                    $location.path('/');
                }
            });
        };

        
    }]);