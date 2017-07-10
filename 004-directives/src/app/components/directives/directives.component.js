(function(){
    'use strict';

    var directives = {
        templateUrl: 'app/components/directives/directives.html',
        controller: 'DirectivesController',
        controllerAs: 'directivesCtrl'
    };
        
    angular
        .module('components.directives')
        .component('directives', directives)
        .config(directivesConfig);

    /** @ngInject */
    function directivesConfig($stateProvider){
        $stateProvider
            .state('directives', {
                parent: 'app',
                url: 'directives',
                template: '<directives layout="column" flex></directives>',
                onEnter: function(Global){
                    Global.setTitle('Directives')
                }
            })
    }
})();