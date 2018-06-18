angular.module('citiesApp').service('FavoriteService', ['$http', 'localStorageModel', function($http, localStorageModel){

    var self = this;
    let server_url = 'http://localhost:3000/';

    self.favoritePrep = function()
    {
        return $http.get(server_url + 'POI/save')
        .then(function(response){
            let data = localStorageModel.get('favorite');
            if (!data)
            {
                localStorageModel.add('favorite', response.data);
                return response;
            }
            else
            {
                localStorageModel.update('favorite', response.data);
                return response;
            }
        }), function(response)
        {
            alert("Connection problem with the back-end server");
            return response;
        };
    };
}]);