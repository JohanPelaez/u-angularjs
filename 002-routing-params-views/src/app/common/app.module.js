(function(){
    'use strict';

    angular
        .module('common', [
            'ui.router',
            'angular-loading-bar',
            'ngMaterial'
        ])
        .config(appConfig);

    /** @ngInject */
    function appConfig($mdThemingProvider){
        $mdThemingProvider.theme('default')
            .primaryPalette('deep-orange', {
                'default': 'A400',
                'hue-1': 'A700', 
                'hue-2': '500',
                'hue-3': 'A100' 
            });
    }
})();