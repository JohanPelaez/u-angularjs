(function(){
    'use strict';

    angular
        .module('app.globals')
        .factory('Auth', Auth);

    /** @ngInject */
    function Auth(){
        var user = {
            name: ''
        };
        if (localStorage.getItem("TU-User")){
            user.name = localStorage.getItem("TU-User");
        }
        var Auth = {
            logIn: logIn,
            getUser: getUser,
            logOut: logOut,
            isAuth: isAuth
        };

        return Auth;

        function logIn(newUser){
            user = newUser;
            localStorage.setItem("TU-User", newUser.name);
        }

        function getUser(){
            return user;
        }

        function logOut(){
            user.name = '';
            localStorage.removeItem("TU-User");
        }

        function isAuth(){
            if (user.name !== ''){
                return true;
            }
            return false;
        }
    }
})();