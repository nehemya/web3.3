angular.module('citiesApp')
    .controller('loginCtrl', ['$location', '$scope', '$http','setHeadersToken', 'localStorageModel', function ($location, $scope, $http, setHeadersToken, localStorageModel) {
        self=this;
        let server_url='http://localhost:3000/';
        self=this;

        $scope.submitLogin=function(){
            $http.post(server_url + "Users/login", $scope.user)
            .then(function(response)
            {
                self.token = response.data;
                setHeadersToken.set(self.token);
                self.addToken();
                alert("success");
            }, function(response)
            {
                alert("Couldn't login");
            });
                
        };

        self.addToken = function()
        {
            localStorageModel.add('token', self.token);
        };

        


    }]);