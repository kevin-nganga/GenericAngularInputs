'use strict';

/**
 * @ngdoc overview
 * @name angularGenericInputsApp
 * @description
 * # angularGenericInputsApp
 *
 * Main module of the application.
 */
angular
  .module('angularGenericInputsApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angular-ui-router'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
