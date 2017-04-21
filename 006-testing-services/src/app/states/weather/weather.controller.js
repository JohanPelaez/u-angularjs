(function() {
  'use strict';

  angular
    .module('angularApp')
    .controller('WeatherController', WeatherController);

  /** @ngInject */
  function WeatherController($http, $scope, $mdDialog, WeatherFactory, $log) {
    var vm = this;

    vm.kind = '0';
    vm.options = {
        center: {
            lat: 38.8225909761771,
            lng: -96.5478515625,
            zoom: 4
        },
        defaults: {
            scrollWheelZoom: false
        },
        events: {
            map: {
                enable: ['click'],
                logic: 'emit'
            }
        }
    };

    $scope.$on('leafletDirectiveMap.map.click', triggerClick);

    function triggerClick(event, args){

        vm.lat = args.leafletEvent.latlng.lat;
        vm.lon = args.leafletEvent.latlng.lng;

        if(vm.kind == '0'){
            WeatherFactory.getWeather(vm.lat, vm.lon).query({},{},function(response) {
                if(response && response.name && response.weather[0] && response.main.temp){
                    vm.response = {
                        place: response.name,
                        weather: response.weather[0].description,
                        temp: response.main.temp,
                        success: true 
                    };
                }else{
                    vm.response = {
                        success: false 
                    };
                }

                openModal();

              }, function(err){
                $log.debug('There was an error',err);
              });
        }else if(vm.kind == '1'){
             WeatherFactory.getUV().query({latlng: [Math.round(vm.lat,1), Math.round(vm.lon,1)]},{},function(response) {
                if(response && response.data){
                    vm.response = {
                        uv: response.data,
                        success: true 
                    };
                }else{
                    vm.response = {
                        success: false 
                    };
                }

                openModal();

            }, function(err){
                $log.debug('There was an error',err);
            }); 
        }
    }

    function openModal(){
        $mdDialog.show({
            controller: 'DialogController',
            templateUrl: 'app/states/weather/dialog/dialog.html',
            parent: angular.element(document.body),
            clickOutsideToClose: true,
            locals: {
                data: vm.response
            },
            controllerAs: 'dialogCtrl'
        });
    }

  }

})();