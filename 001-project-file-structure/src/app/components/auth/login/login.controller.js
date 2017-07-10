(function(){
    'use strict';

    angular
        .module('components.auth')
        .controller('LoginController', LoginController);
    
    /** @ngInject */
    function LoginController($state, Global){
        var vm = this;
        vm.$onInit = onInit;
        vm.loginUser = loginUser

        function onInit() {
            vm.error = null;
            vm.user = {
                name: ''
            };
        }

        function loginUser(event) {
            Global.setUser(event.user);
            $state.go('app');
        }
    }
})();