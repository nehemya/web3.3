angular.module('citiesApp')
    .controller('rePassCtrl', ['$location', '$scope', '$http','setHeadersToken', 'localStorageModel','PoiService', 
    function ($location, $scope, $http, setHeadersToken, localStorageModel, PoiService) {
        self=this;
        
        let server_url='http://localhost:3000/';
        $scope.show1 = true;
        $scope.submitRePass=function(){
            
            $http.post(server_url + "Users/restorePassword", $scope.user) //send the request
            .then(function(response)
            {
                if(response.data==="sorry wrong answers"){
                    alert("Bad answers, try again.");
                    
                }
                else if(response.data==="faild: the given username not exist"){
                    alert("Bad username, try again.");
                   
                }
                else {
                    alert("Your password is: "+response.data.password)
                    $location.path('/login');
                }
                
            }, function(response) //only if the server fails to return anything
            {
                alert("Connection problem with the back-end server");
             });
                
        };

        $scope.getQ = function(){
            $http.get(server_url + "Users/getQuestions/"+$scope.user.UserName) //send the request
            .then(function(response)
            {
                if(response.data==="faild: the given username not exist"){
                    alert("Bad username, try again.");
                    
                }
                
                else {
                    $scope.q1 = response.data.qPassword1;
                    $scope.q2 = response.data.qPassword2;
                    $scope.show1 = false;
                }
                
            }, function(response) //only if the server fails to return anything
            {
                alert("Connection problem with the back-end server");
             });
        };


    }]);