'use strict';

/**
 * @ngdoc overview
 * @name healthcheckerApp
 * @description
 * # healthcheckerApp
 *
 * Main module of the application.
 */
angular
  .module('healthcheckerApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'gridshore.c3js.chart',
    'ui.bootstrap',
    'angular.filter',
    'angular-loading-bar',
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'scripts/mvc/view.html',
        controller: 'AppCtrl',
        controllerAs: 'appctrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeSpinner = false;
  }]);
