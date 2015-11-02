/**
 * Controller used to perform operations on the login page.
 * Created by francisco on 10/16/15.
 */
(function () {
    'use strict';
    angular.module('securityControllers').controller('LoginCtrl', ['$scope', '$resource', LoginCtrl]);
    function LoginCtrl($scope, $resource) {
        var projectsResource = createResource('projects')
        function createResource(name){
            return $resource('/api/' + name, { id : '@id' }, {
                update: {
                    method: 'PUT'
                }
            });
        }

        $scope.projects = projectsResource.query(function(){
            console.log($scope.projects);
        });
    }
})();
