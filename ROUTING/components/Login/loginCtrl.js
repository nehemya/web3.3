angular.module('citiesApp')
    .controller('loginCtrl', ['$location', '$scope', '$http','setHeadersToken', 'localStorageModel', function ($location, $scope, $http, setHeadersToken, localStorageModel) {
        self=this;
        let server_url='http://localhost:3000/';
        

        $scope.submitLogin=function(){
            self.deleteToken(); //delete the last token if was there
            setHeadersToken.set("");
            $http.post(server_url + "Users/login", $scope.user) //send the request
            .then(function(response)
            {
                if(response.data=="login failed bad username"){
                    alert("login failed bad username");
                    $scope.user.UserName="";
                    $scope.user.Password="";
                }
                else if(response.data=="login failed bad password/username"){
                    alert("login failed bad password/username");
                    $scope.user.UserName="";
                    $scope.user.Password="";
                }
                else {
                    self.token = response.data.token;
                    self.username=$scope.user;
                    self.addToken();
                    alert("success");
                    $location.path('/')
                }
                
            }, function(response) //only if the server fails to return anything
            {
                alert("Couldn't login");
                $scope.user.UserName="";
                $scope.user.Password="";
            });
                
        };

        self.addToken = function()
        {
            localStorageModel.add('token', self.token);
            localStorageModel.add('username', self.username.UserName );
            setHeadersToken.set(self.token); //add to the http req heders

        };

        self.deleteToken = function(){
            if(localStorageModel.get('token')){
                localStorageModel.update('token', null);
                localStorageModel.update('username',null);
            }
            else{
                localStorageModel.add('token', null);
                localStorageModel.add('username',null);
            }
        };


    }]);