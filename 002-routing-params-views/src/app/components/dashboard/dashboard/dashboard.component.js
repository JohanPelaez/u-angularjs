(function(){
    'use strict';

    var dashboard = {
        templateUrl: 'app/components/dashboard/dashboard/dashboard.html'
    };
        
    angular
        .module('components.dashboard')
        .component('dashboard', dashboard)
        .config(dashboardConfig);

    /** @ngInject */
    function dashboardConfig($stateProvider){
        $stateProvider
            .state('dashboard', {
                parent: 'app',
                redirectTo: 'config',
                url: '/dashboard',
                template: '<dashboard layout="column" flex></dashboard>',
                onEnter: function(Global){
                    Global.setTitle('Dashboard')
                }
            })
    }
})();