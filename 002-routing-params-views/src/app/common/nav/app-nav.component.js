(function(){
    'use strict';

    var appNav = {
        bindings: {
            user: '<',
            onLogout: '&',
            onMenu: '&'
        },
        templateUrl: 'app/common/nav/app-nav.html',
        controller: 'AppNavController',
        controllerAs: 'navCtrl'
    };

    angular
        .module('common')
        .component('appNav', appNav);
        
})();