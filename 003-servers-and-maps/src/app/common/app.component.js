(function(){
    'use strict';

    var app = {
        templateUrl: 'app/common/app.html',
        controller: 'AppController',
        controllerAs: 'appCtrl'
    };

    angular
        .module('common')
        .component('app', app)
        .config(appCofig);

    /** @ngInject */
    function appCofig($stateProvider) {
        $stateProvider
            .state('app', {
                redirectTo: 'dashboard',
                url: '/',
                template: '<app layout="row" flex></app>'
            })
    }
})();