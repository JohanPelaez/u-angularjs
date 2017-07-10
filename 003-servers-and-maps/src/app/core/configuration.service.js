(function(){
    'use strict';

    angular
        .module('app.globals')
        .factory('Configuration', Configuration);
    
    function Configuration($http){
        var jsonFile = {};
            

        var Configuration = {
            getFile: getFile
        }

        return Configuration;

        function getFile(){
            return $http.get('assets/files/configuration.json')
                .then(function(resource){
                    jsonFile = resource.data;
                    return jsonFile;
                },function(error){
                    console.error(error);
                })
        }
    }
})();