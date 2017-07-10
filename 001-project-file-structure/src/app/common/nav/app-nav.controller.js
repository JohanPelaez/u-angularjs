(function(){
    'use strict';

    angular
        .module('common')
        .controller('AppNavController', AppNavController);

    /** @ngInject */
    function AppNavController(Global){
        var vm = this;
        vm.title = function(){
            return Global.getTitle();
        };
    }
})();