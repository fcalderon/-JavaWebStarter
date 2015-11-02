/**
 * Created by francisco on 11/2/15.
 */
(function () {
    'use strict';
    angular.module('projects').controller('HeaderCtrl', [
        '$scope', '$rootScope', '$location', '$mdSidenav', '$mdBottomSheet', '$q', '$state', 'settings', HeaderCtrl]);
    function HeaderCtrl($scope, $rootScope, $location, $mdSidenav, $mdBottomSheet, $q, $state, settings) {
        var self = this;

        self.toggleList = toggleList;
        $rootScope.state = {
            currentPage : {
                pTitle : 'Home',
                path : 'home'
            }

        };

        $scope.sessionData = {};

        $scope.go = function(path, pageName){
            $location.path(path);
            $rootScope.state.currentPage.pTitle = pageName;
            $rootScope.state.currentPage.path = path;
        };

        $scope.isActive = function (viewLocation) {
            return viewLocation === $location.path();
        };

        function toggleList() {
            var pending = $mdBottomSheet.hide() || $q.when(true);

            pending.then(function(){
                $mdSidenav('left').toggle();
            });
        }


        $scope.logout = function () {
            Session.get({logout: "logout"}).$promise.then(function (data) {
                //$location.path(settings.root);
                window.location.replace(settings.root);
            });

        };



    }
})();