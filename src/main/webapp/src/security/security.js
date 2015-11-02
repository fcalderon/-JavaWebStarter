/**
 * Created by francisco on 10/15/15.
 */
(function () {
    'use strict';
    angular.module('commonDirectives', []);
    angular.module('securityControllers', []);
    angular.module('securityFactories', []);

    angular.module('security', ['ngMaterial'
        , 'securityControllers'
        , 'commonDirectives'
        , 'securityFactories'
        , 'ui.router'
        , 'ngMessages'
        , 'ngResource'])
        .constant('settings', {
            companyLogoUrl: '/assets/company-logo-64.png'
            , partialsUrl: '/src/security/view/partials/'
            , apiUrl: '/webresources/api/'
        }).config(function ($mdThemingProvider) {
            $mdThemingProvider.theme('default')
                .primaryPalette('light-blue')
                .accentPalette('red');
        }).config(['$stateProvider', '$urlRouterProvider', 'settings',
            function ($stateProvider, $urlRouterProvider, settings) {
                $urlRouterProvider.otherwise("/login");

                $stateProvider
                    .state('login', {
                        url: '/login'
                        , templateUrl: settings.partialsUrl + 'login.html'
                        , controller: 'LoginCtrl'
                    })
                    .state('signUp', {
                        url: '/signUp'
                        , templateUrl: settings.partialsUrl + 'signup.html'
                        , controller: 'SignUpCtrl'
                    })
                    .state('forgotPassword', {
                        url: '/forgotPassword'
                        , templateUrl: settings.partialsUrl + 'forgot-password.html'
                        , controller: 'ForgotPasswordCtrl'
                    })
                    .state('resetPassword', {
                        url: '/resetPassword?tkn&id'
                        , templateUrl: settings.partialsUrl + 'reset-password.html'
                        , controller: 'ResetPasswordCtrl'
                    })

            }]);
})();