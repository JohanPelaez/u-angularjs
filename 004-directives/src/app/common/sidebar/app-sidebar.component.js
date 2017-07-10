(function(){
    'use strict';

    var appSidebar = {
        bindings: {
            user: '<',
            onLogout: '&',
            onMenu: '&'
        },
        templateUrl: 'app/common/sidebar/app-sidebar.html',
        controller: 'AppSidebarController',
        controllerAs: 'sidebarCtrl'
    };

    angular
        .module('common')
        .component('appSidebar', appSidebar);
})();