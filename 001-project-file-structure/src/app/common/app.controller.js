(function(){
    'use strict';

    angular
        .module('common')
        .controller('AppController', AppController);

    /** @ngInject */
    function AppController($state, Global) {
        var vm = this;
        vm.user = Global.getUser();
        vm.logout = function () {
            Global.setUser({name:''});
            $state.go('login');
        };
    }
})();