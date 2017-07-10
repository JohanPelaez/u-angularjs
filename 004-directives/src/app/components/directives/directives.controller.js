(function(){
    'use strict';

    angular
        .module('components.directives')
        .controller('DirectivesController', DirectivesController);

    /** @ngInject */
    function DirectivesController(){
        var vm = this;
        vm.card = {};
        vm.favCards = [];
        vm.colors = ['red', 'pink', 'purple', 'deep-purple', 'indigo', 'blue', 'light-blue', 'cyan', 'teal', 'green', 'light-green', 'lime', 'yellow', 'amber', 'orange', 'deep-orange', 'brown', 'grey', 'blue-grey', 'black', 'white'];
        vm.images = ['bee-cartoon.png', 'cat-cartoon.png', 'duc-cartoon.png', 'girl-cartoon.png', 'koala-cartoon.png', 'lamp-cartoon.png', 'man-cartoon.png', 'mouse-cartoon.png', 'penguin-cartoon.png', 'pig-cartoon.png'];
        vm.saveCard = saveCard;
        vm.deleteCard = deleteCard;

        function saveCard(){
            vm.favCards.push(vm.card);
            vm.card = {};
        }

        function deleteCard(card){
            var index = vm.favCards.indexOf(card);
            vm.favCards.splice(index, 1);
        }
    }
})();