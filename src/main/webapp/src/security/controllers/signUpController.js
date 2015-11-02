/**
 * Created by francisco on 10/16/15.
 */
(function () {
    'use strict';
    angular.module('securityControllers').controller('SignUpCtrl', ['$scope', 'SignUpFactory', SignUpCtrl]);
    function SignUpCtrl($scope, SignUpFactory) {
        $scope.customer = new SignUpFactory();
        $scope.signUp = function () {
            $scope.customer.$save(function () {
            }, function () {
            });
        }
    }
})();
