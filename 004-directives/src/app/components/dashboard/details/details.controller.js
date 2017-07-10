(function(){
    'use strict';

    angular
        .module('components.dashboard')
        .controller('DetailsController', DetailsController);

    /** @ngInject */
    function DetailsController($state, $stateParams){
        var vm = this;
        vm.goBack = goBack;
        vm.conf = $stateParams.conf;

        function goBack(){
            $state.go('config');
        }
    }
})();