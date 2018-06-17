angular.module('citiesApp')
    .controller('loginCtrl', ['$location', '$scope', '$http','setHeadersToken', 'localStorageModel', function ($location, $scope, $http, setHeadersToken, localStorageModel) {
        self=this;
        let server_url='http://localhost:3000/';
        

        $scope.submitLogin=function(){
            self.deleteToken(); //delete the last token if was there
            setHeadersToken.set("");
            $scope.$parent.$parent.isLogged=false;

            $http.post(server_url + "Users/login", $scope.user) //send the request
            .then(function(response)
            {
                if(response.data==="login failed bad username"){
                    alert("login failed bad username");
                    
                }
                else if(response.data==="login failed bad password/username"){
                    alert("login failed bad password/username");
                   
                }
                else {
                    self.token = response.data;
                    self.username=$scope.user;
                    $scope.$parent.$parent.username=self.username.UserName;
                    $scope.$parent.$parent.isLogged=true;
                    self.addToken();
                    alert("success");
                    $location.path('/');
                }
                
            }, function(response) //only if the server fails to return anything
            {
                alert("Connection problem with the back-end server");
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