(function() {
  'use strict';

    angular
        .module('app.config', [
        'ui.router',
        'app.globals'
        ])
        .config(config)
        .run(runBlock)
        .constant('SITE_NAME', 'Talos University');

    /** @ngInject */
    function config($logProvider) {
        // Enable log
        $logProvider.debugEnabled(true);
    }	

    /** @ngInject */
    function runBlock($transitions, $state, Auth) {
        $transitions
            .onStart({
                to: function(state){
                    if(state.name === 'login'){
                        return false;
                    }
                    return true;
                }
            }, function() {
                if (!Auth.isAuth()) {
                    return $state.target('login');
                }
            });
        $transitions
            .onStart({
                to: 'login'
            }, function () {
                if (Auth.isAuth()) {
                    return $state.target('app');
                }
            }); 
    }

})();
