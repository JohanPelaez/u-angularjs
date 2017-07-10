(function(){
    'use strict';

    var appSidebar = {
        bindings: {
            user: '<',
            onLogout: '&'
        },
        templateUrl: 'app/common/sidebar/app-sidebar.html',
        controller: 'AppSidebarController',
        controllerAs: 'sidebarCtrl'
    };

    angular
        .module('common')
        .component('appSidebar', appSidebar);
})();