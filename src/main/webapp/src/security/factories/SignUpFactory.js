/**
 * Created by francisco on 10/16/15.
 */
(function () {
    'use strict';
    angular.module('securityFactories').provider('SignUpFactory', SignUpFactory);
    function SignUpFactory() {
        this.$get = ['$resource', 'settings', Resource];
        function Resource($resource, settings) {
            //TODO implement
            return $resource(settings.apiUrl + 'security/signUp/login', {}, {});
        }
    }
})();
    