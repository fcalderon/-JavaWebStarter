/**
 * Main
 * Created by francisco on 11/1/15.
 */
(function () {
    'use strict';
    angular.module('projects', [
        'ngMaterial'
        , 'ngRoute'
        , 'ui.router'
        , 'ngMessages'
        , 'ngResource'
        , 'ngSanitize'])
        .constant('settings', {
        apiUrl: '/api/'
            , partialsPath: '/src/projects/view/partials/'
            , directivesTemplatesPath: '/src/projects/directives/templates/'
    }).config(['$stateProvider', '$urlRouterProvider', 'settings',
        function($stateProvider, $urlRouterProvider, settings){
            $urlRouterProvider.otherwise("/home");
            $urlRouterProvider.when("/projects", "/projects/list");
            $urlRouterProvider.when("/users", "/users/list");
            $stateProvider
                .state('home', {
                    url: '/home'
                    , templateUrl: settings.partialsPath + 'home.html'
                    , controller: 'HomeCtrl'
                    , data: {pageTitle: 'Home'}
                }).state('projects', {
                    url: '/projects'
                    , template: '<div ui-view></div>'
                    , abstract: true
                }).state('projects.list', {
                    url: '/list'
                    , templateUrl: settings.partialsPath + 'projects.html'
                    , controller: 'GenericCtrl'
                    , data: {
                        pageTitle: 'Projects'
                        , resourceName: 'projects/:id'
                    }
                }).state('projects.project', {
                    url: '/:id'
                    , templateUrl: settings.partialsPath + 'projects.project.html'
                    , controller: 'GenericCtrl'
                    , data: {
                        pageTitle: 'Projects'
                        , resourceName: 'projects/:id'
                    }
                }).state('projects.new', {
                    url: '/new/:new'
                    , templateUrl: settings.partialsPath + 'projects.project.html'
                    , controller: 'GenericCtrl'
                    , data: {
                        pageTitle: 'Projects'
                        , resourceName: 'projects/:id'
                    }
                }).state('users', {
                    url: '/users'
                    , template: '<div ui-view></div>'
                    , abstract: true
                })
                .state('users.list', {
                    url: '/list'
                    , templateUrl: settings.partialsPath + 'users.html'
                    , controller: 'GenericCtrl'
                    , data: {
                        pageTitle: 'Users'
                        , resourceName: 'users/:id'
                        , template: "<div class=\"md-list-item-text\">\n" +
                        "        <h3>{{i.name}}</h3>\n" +
                        "        <div>\n" +
                        "            {{i.description}}\n" +
                        "        </div>\n" +
                        "        <md-icon class=\"md-secondary\" ng-click=\"delete(i.id)\" aria-label=\"Delete\">delete</md-icon>\n" +
                        "    </div>"
                    }
                }).state('users.user', {
                    url: '/:id'
                    , templateUrl: settings.partialsPath + 'users.user.html'
                    , controller: 'GenericCtrl'
                    , data: {
                        pageTitle: 'Users'
                        , resourceName: 'users/:id'
                    }
                }).state('users.new', {
                    url: '/new'
                    , templateUrl: settings.partialsPath + 'users.user.html'
                    , controller: 'GenericCtrl'
                    , data: {
                        pageTitle: 'Users'
                        , resourceName: 'users/:id'
                    }
                })
        }]);


})();