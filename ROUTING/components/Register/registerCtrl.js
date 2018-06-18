angular.module('citiesApp')
    .controller('registerCtrl', ['$location', '$scope', '$http', 'localStorageModel', 'RegisterService',
        function ($location, $scope, $http, localStorageModel, RegisterService) {

            self = this;
            let server_url='http://localhost:3000/';
            $scope.countryL = RegisterService.countries;
            $scope.categoryL = RegisterService.categories;
            $scope.Q1bank = ['What is your mothers name', 'What was your first car'];
            $scope.Q2bank = ['How is your father name', 'Are you handsome'];
            self.Categories = [];

            $scope.submitRegister = function () {
                self.buildCategory();
                if (self.Categories.length < 2 || self.Categories.length > 4)
                {
                    alert("You can choose only 2 to 4 favorite categories");
                    return;
                }
                self.setCategory();
                $http.post(server_url + 'Users/addUser', $scope.user)
                .then(function (response) {
                    if(response.status === 200)
                    {
                        alert('Success');
                        $location.path('/login');
                    }
                  }, function(response){
                    alert("Connection problem with the back-end server");
                  });
            };

            self.buildCategory = function()
            {
               for(let i = 0; i < $scope.categoryL.length; i++)
               {
                   let cat = $scope.categoryL[i];
                   let element = document.getElementById(cat);
                   if (element.checked)
                   {
                       self.Categories.push(cat);
                   }
                   
               }
            };

            self.setCategory = function () {
                for (let i = 0; i < self.Categories.length; i++) {
                    if (i === 0) {
                        $scope.user.FisrtCategory = self.Categories[i];
                    }
                    if (i === 1) {
                        $scope.user.SecondCategory = self.Categories[i];
                    }
                    if (i === 2) {
                        $scope.user.ThirdCategory = self.Categories[i];
                    }
                    if (i === 3) {
                        $scope.user.FourthCategory = self.Categories[i];
                    }
                        }
            };



        }]);