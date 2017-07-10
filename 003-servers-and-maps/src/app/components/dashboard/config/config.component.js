(function(){
    'use strict';

    var configComp = {
        bindings:{
            configuration: '<'
        },
        templateUrl: 'app/components/dashboard/config/config.html',
        controller: 'ConfigController',
        controllerAs: 'configCtrl'
    }

    angular
        .module('components.dashboard')
        .component('config', configComp)
        .config(configConfig);

    /** @ngInject */
    function configConfig($stateProvider){
        $stateProvider
            .state('config', {
                parent: 'dashboard',
                url: '',
                component: 'config',
                onEnter: function(Global){
                    Global.setTitle(['Dashboard', 'Config'])
                },
                resolve: {
                    configuration : function(Configuration){
                        return Configuration.getFile();
                    }
                }
            })
    }
})();