/**
 * Created by francisco on 11/1/15.
 */
(function () {
    'use strict';
    angular.module('projects').directive('genericView', ['settings', function(settings){
        return{
            templateUrl: settings.directivesTemplatesPath + 'generic-view.html'
            , transclude: true
            , restrict: 'EA'
            , link: function(scope, elem, attr){
                scope.title = attr.title;
                scope.subTitle = attr.subTitle;
                scope.newStateName = attr.newStateName;
                console.log(scope.template);
            }
        }
    }]);

})();