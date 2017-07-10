(function(){
    'use strict';

    var login = {
        templateUrl : 'app/components/auth/login/login.html',
        controller : 'LoginController',
        controllerAs: 'loginCtrl'
    };

    angular
        .module('components.auth')
        .component('login', login)
        .config(loginConfig);

    /** @ngInject */
    function loginConfig($stateProvider, $urlRouterProvider){
        $stateProvider
            .state('login', {
                url: '/login',
                template: '<login layout="row" layout-wrap layout-fill layout-align="center center" ng-cloak></login>'
            });
            
            $urlRouterProvider.otherwise('/login');
    }
})();