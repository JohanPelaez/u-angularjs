(function(){
    'use strict';

    var authForm = {
        bindings: {
            user: '<',
            button: '@',
            message: '@',
            onSubmit: '&'
        },
        templateUrl: 'app/components/auth/auth-form/auth-form.html',
        controller: 'AuthFormController',
        controllerAs: 'authCtrl'
    };

    angular
        .module('components.auth')
        .component('authForm', authForm);

})();