(function(){
    'use strict';

    angular
        .module('components.dashboard')
        .controller('DashboardController', DashboardController);

    /** @ngInject */
    function DashboardController(Global){
        var vm = this;
        vm.user = Global.getUser();
    }
})();