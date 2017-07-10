(function(){
    'use strict';

    angular
        .module('app.globals', [])
        .factory('Global', Global);

    /** @ngInject */
    function Global(){
        var title = 'Talos';
        var user = {
            name: ''
        };

        var Global = {
            getTitle: getTitle,
            setTitle: setTitle,
            setUser: setUser,
            getUser: getUser
        };

        return Global;

        function setTitle(newtitle){
            title = '';
            if (angular.isArray(newtitle)) {
                angular.forEach(newtitle, function(e){
                    title += e+' / ';
                })
                title = title.slice(0, -2);
            }else{
                title = newtitle;
            }
        }

        function getTitle(){
            return title;
        }

        function setUser(newUser){
            user = newUser;
        }

        function getUser(){
            return user;
        }
    }
})();