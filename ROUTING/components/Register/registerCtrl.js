angular.module('citiesApp')
    .controller('registerCtrl', ['$location', '$scope', '$http', 'localStorageModel', 'RegisterService',
        function ($location, $scope, $http, localStorageModel, RegisterService) {

            self = this;
            $scope.countryL = RegisterService.countries;
            $scope.categoryL = RegisterService.categories;
            $scope.Q1bank = ['What is your mother\'s name?', 'What was your first car?'];
            $scope.Q2bank = ['How is your father\'s name?', 'Are you handsome?'];
            self.Categories = [];

            $scope.submitRegister = function () {
                self.setCategory();

            };

            self.selectCat = function (category) {
                let index = self.Categories.indexOf(category);
                //already exist. need to delete
                if (index > -1) {
                    self.Categories.splice(index, 1);
                }
                else {
                    self.Categories.push(category);
                }

            };

            self.setCategory = function () {
                for (let i = 0; i < self.Categories.length; i++) {
                    if (i === 1) {
                        $scope.user.FisrtCategory = self.Categories[i];
                    }
                    if (i === 2) {
                        $scope.user.SecondCategory = self.Categories[i];
                    }
                    if (i === 3) {
                        $scope.user.ThirdCategory = self.Categories(i);
                    }
                    if (i === 4) {
                        $scope.user.FourthCategory = self.Categories(i);
                    }
                        }
            };

        }]);