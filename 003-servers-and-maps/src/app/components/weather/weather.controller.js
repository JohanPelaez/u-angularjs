(function(){
    'use strict';

    angular
        .module('components.weather')
        .controller('WeatherController', WeatherController);

    /** @ngInject */
    function WeatherController($http, $scope, $mdDialog){
        var vm = this;
         //Talitos API Key
        vm.apiKey = '534eccb946ce639dbb41f82b8be15dcc';
        vm.kind = '0';

        vm.markers = [];
        vm.center = {
            lat: 38.8225909761771,
            lng: -96.5478515625,
            zoom: 4
        }
        vm.events = {
            map: {
                enable: ['click'],
                logic: 'emit'
            }
        }
        vm.defaults = {
            scrollWheelZoom: false
        }

        $scope.$on('leafletDirectiveMap.map.click', function(event, args){
            var coor = args.leafletEvent.latlng;
            var url = '';
            if(vm.kind == '0'){
                url = 'http://api.openweathermap.org/data/2.5/weather?APPID='+vm.apiKey+'&lat='+coor.lat+'&lon='+coor.lng;
            }else if(vm.kind == '1'){
                url = 'http://api.owm.io/air/1.0/uvi/current?APPID='+vm.apiKey+'&lat='+coor.lat+'&lon='+coor.lng;
            }else if(vm.kind == '2'){
                url = 'http://api.openweathermap.org/pollution/v1/co/'+Math.round(coor.lat)+','+Math.round(coor.lng)+'/current.json?appid='+vm.apiKey;
            }
            $http({
                method: 'GET',
                url: url
            }).then(function successCallback(response) {
                console.log(response)
                var msg = 'Lat: ' + coor.lat + '<br>Lng: ' + coor.lng + (vm.kind === '0' ? '<br>Weather: ' + response.data.weather[0].description : '<br>Polution');
                $mdDialog.show(
                    $mdDialog.alert()
                        .parent(angular.element(document.querySelector('body')))
                        .clickOutsideToClose(true)
                        .title(response.data.weather[0].description)
                        .htmlContent(msg)
                        .ariaLabel(response.data.weather[0].description)
                        .ok('OK!')
                    ).then(function(){
                        pinMarker(coor.lat, coor.lng, response.data, msg);
                    })
            }, function errorCallback(response) {
                alert('Error');
            });
        });

        function pinMarker(lat, lng, data, message){
            vm.markers.push({
                lat : lat,
                lng : lng,
                message : message ? message : '',
                icon: vm.kind === '0' ? {
                    iconUrl: 'assets/icon/'+data.weather[0].main.toLowerCase()+'.png',
                    iconSize: [30, 30],
                } : '' 
            })
        }
    }
})();