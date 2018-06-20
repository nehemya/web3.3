angular.module("citiesApp")
    .service('poiModalService', ['$http','setHeadersToken','localStorageModel','$mdDialog',
     function($http, setHeadersToken,localStorageModel, $mdDialog) {
        var self = this;

        self.showPoi = function(ev) {
            $mdDialog.show({
              controller: function(){

              },
              templateUrl: 'components/PoiModal/poiModal.html',
              parent: angular.element(document.body),
              clickOutsideToClose:true,
              onComplete: ()=> { console.log('eden')}

                    })
            
          };




     }]);