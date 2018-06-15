angular.module("citiesApp")
    .service('localStorageModel', ['localStorageService', function(localStorageService) {

        var self=this;

        self.addLocalStorage = function (key, value) {
            var data = localStorageService.get(key);
            console.log(data);
            if (!data)
            {
                if (localStorageService.set(key, value)) {
                    console.log("data added");
                }
                else
                    console.log('failed to add the data');
            }
           
        }



        self.getLocalStorage= function (key)
        {
           return  localStorageService.get(key);
        };

        self.updateLocalStorage = function (key,value)
        {
            localStorageService.remove(key);
            localStorageService.set(key,value);
        };



}]);