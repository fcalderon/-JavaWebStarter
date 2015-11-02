/**
 * Created by francisco on 11/1/15.
 */
(function () {
    'use strict';
    angular.module('projects').directive('genericList', ['settings', '$state', function(settings, $state){
        return {
            templateUrl: settings.directivesTemplatesPath + 'generic-list.html'
            //, transclude: true
            , link: function(scope, elem, attr){
                scope.title = attr.title;
                scope.subTitle = attr.subTitle;
                console.log(scope.template);

                scope.goTo = function(id){
                    $state.go(scope.openStateName, {id: id});
                };
            }
        }
    }]);
})();