(function(){
    'use strict';

    angular
        .module('common')
        .controller('AppSidebarController', AppSidebarController);
        
    /** @ngInject */
    function AppSidebarController() {
        var vm = this;
        
        vm.pages = [{
            label: 'Dashboard',
            icon: 'star',
            state: 'dashboard'
        },{
            label: 'Weather',
            icon: 'star',
            state: 'weather'
        }];

        vm.openMenu = function($mdMenu, ev) {
            $mdMenu.open(ev);
        };
    }
})();