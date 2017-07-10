(function(){
    'use strict';

    angular
        .module('common')
        .controller('AppController', AppController);

    /** @ngInject */
    function AppController($state, $mdSidenav, Auth) {
        var vm = this;
        vm.user = Auth.getUser();
        vm.logout = logout;
        vm.viewSidebar = viewSidebar;

        function logout() {
            Auth.logOut();
            $state.go('login');
        };

        function viewSidebar(){
            console.log('...')
            $mdSidenav('left').toggle();
        }
    }
})();