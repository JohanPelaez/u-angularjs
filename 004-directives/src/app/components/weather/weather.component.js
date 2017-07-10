(function(){
    'use strict';

    var weather = {
        templateUrl: 'app/components/weather/weather.html',
        controller: 'WeatherController',
        controllerAs: 'weatherCtrl'
    };
        
    angular
        .module('components.weather')
        .component('weather', weather)
        .config(weatherConfig);

    /** @ngInject */
    function weatherConfig($stateProvider){
        $stateProvider
            .state('weather', {
                parent: 'app',
                url: 'weather',
                template: '<weather layout="column" flex></weather>',
                onEnter: function(Global){
                    Global.setTitle('Weather')
                }
            })
    }
})();