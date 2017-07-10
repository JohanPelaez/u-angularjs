(function(){
    'use strict';

    var card = {
        bindings: {
            toCreate: '<',
            onSave: '&',
            cardOptions: '<'
        },
        templateUrl: 'app/components/directives/card/card.html'
    }

    angular
        .module('components.directives')
        .component('card', card);
})();