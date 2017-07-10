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
  function runBlock($log) {
    $log.debug('runBlock AppRuning');
  }

})();
