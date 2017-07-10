(function(){
    'use strict';

    var details = {
        templateUrl: 'app/components/dashboard/details/details.html',
        controller: 'DetailsController',
        controllerAs: 'detailsCtrl'
    }

    angular
        .module('components.dashboard')
        .component('detailsComp', details)
        .config(detailsConfig);

    /** @ngInject */
    function detailsConfig($stateProvider){
        $stateProvider
            .state('details', {
                parent: 'dashboard',
                url: '/details',
                component: 'detailsComp',
                params:{
                    conf: {}
                },
                onEnter: function(Global){
                    Global.setTitle(['Dashboard', 'Details'])
                }
            })
    }
})();