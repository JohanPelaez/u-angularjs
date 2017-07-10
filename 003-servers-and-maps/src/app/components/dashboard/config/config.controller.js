(function(){
    'use strict';

    angular
        .module('components.dashboard')
        .controller('ConfigController', ConfigController);

    /** @ngInject */
    function ConfigController($state){
        var vm = this;
        vm.showInfo = showInfo;

        function showInfo(conf){
            $state.go('details', {conf: conf});
        }
    }
})();