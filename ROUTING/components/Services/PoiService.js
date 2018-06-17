angular.module("citiesApp")
    .service('PoiService', ['$http','setHeadersToken','localStorageModel',
     function($http, setHeadersToken,localStorageModel) {
        var self = this;
        self.pois="";
        let server_url = 'http://localhost:3000/';
        self.rand3poi = [];
        self.popCat = [];
        self.last2Hist = [];

        self.getAllPoi = function (){
            $http.get(server_url + "POI/",{params:{poiName:"All"} } )
            .then(function(response)
            {
                self.pois = response.data;
                
            }, function(response) //only if the server fails to return anything
            {
                alert("Connection problem with the back-end server");
            });
        };
    
        self.homePrep = function(){
            setHeadersToken.set(localStorageModel.get('token'));
            return $http.get(server_url + "POI/",{params:{poiName:"All"} } )
            .then(function(response)
            {
                self.pois = response.data;
                return $http.get(server_url + "POI/popular") //send the request
                    .then(function(response)
                    {
                        
                        self.rand = [response.data[0].PoiName, response.data[1].PoiName, response.data[2].PoiName];
                        self.rand3poi[0] = self.getPoiByName(self.rand[0]);
                        self.rand3poi[1] = self.getPoiByName(self.rand[1]);
                        self.rand3poi[2] = self.getPoiByName(self.rand[2]);
                        return response;
                    }, function(response) //only if the server fails to return anything
                    {
                        alert("Connection problem with the back-end server");
                        return response;
                    });
                           
            }, function(response) //only if the server fails to return anything
            {
                alert("Connection problem with the back-end server");
                return response;
            });
        };

        self.LogPopCat = function(){
            setHeadersToken.set(localStorageModel.get('token'));
            return $http.get(server_url + "POI/popularCategory")
                .then(function(response){
                    self.popCat[0] = response.data[0][0];
                    self.popCat[1] = response.data[1][0];
                    return response;
                },function(response){
                    alert("Connection problem with the back-end server");
                        return response;
                }
            );
        };

        self.logHistory = function(){
            setHeadersToken.set(localStorageModel.get('token'));
            return $http.get(server_url + "POI/save/userLast2")
                .then(function(response){
                    self.last2Hist[0] = response.data[0];
                    self.last2Hist[1] = response.data[1];
                    return response;
                },function(response){
                    alert("Connection problem with the back-end server");
                        return response;
                }
            );
        };

        self.getPoiByName = function(name){
            for (const key in self.pois) {
                if (self.pois[key].PoiName == name) {
                    return self.pois[key];
                    
                }
            }
            return;
        };



    }]);