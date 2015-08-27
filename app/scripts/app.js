'use strict';

/**
 * @ngdoc overview
 * @name yeomanDonderdagApp
 * @description
 * # yeomanDonderdagApp
 *
 * Main module of the application.
 */
angular
  .module('yeomanDonderdagApp', [
    'ngResource',
    'ngRoute',
    'ngSanitize'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
