angular.module("citiesApp")
    .service('PoiService', ['$http', function($http) {
        var self = this;
        self.pois="";
        let server_url = 'http://localhost:3000/';
        self.rand3poi = [];

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
            $http.get(server_url + "POI/",{params:{poiName:"All"} } )
            .then(function(response)
            {
                self.pois = response.data;
                $http.get(server_url + "POI/popular") //send the request
                    .then(function(response)
                    {
                        self.rand3 = response.data;
                        self.rand = [self.rand3[0].PoiName, self.rand3[1].PoiName, self.rand3[2].PoiName];
                        self.rand3poi[0] = self.getPoiByName(self.rand[0]);
                        self.rand3poi[1] = self.getPoiByName(self.rand[1]);
                        self.rand3poi[2] = self.getPoiByName(self.rand[2]);
                    }, function(response) //only if the server fails to return anything
                    {
                        alert("Connection problem with the back-end server");
                    });
                           
            }, function(response) //only if the server fails to return anything
            {
                alert("Connection problem with the back-end server");
            });
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