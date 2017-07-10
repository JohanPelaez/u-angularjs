(function(){
    'use strict';

    angular
        .module('components.auth')
        .controller('AuthFormController', AuthFormController);

    /** @ngInject */
    function AuthFormController() {
        var vm = this;
        vm.$onChanges = onChanges;
        vm.submitForm = submitForm;
        function submitForm() {
            vm.onSubmit({
                $event: {
                    user: vm.user
                }
            });
        }

        function onChanges(changes) {
            if (changes.user) {
                vm.user = angular.copy(vm.user);
            }
        }
    }
})();