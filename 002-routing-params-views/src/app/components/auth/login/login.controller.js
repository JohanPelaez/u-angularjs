(function(){
    'use strict';

    angular
        .module('components.auth')
        .controller('LoginController', LoginController);
    
    /** @ngInject */
    function LoginController($state, Auth){
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
            Auth.logIn(event.user);
            $state.go('app');
        }
    }
})();