'use strict';


// Declare app level module which depends on filters, and services
var pocket = angular.module('pocket', ['pocket.services', 'pocket.controllers', 'ui.state']);

pocket.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('index', {
      url: '/home',
      templateUrl: 'partials/list.html',
      controller: 'ArticleList'
    })
    .state('index.detail', {
      url: '/articles/{id}',
      templateUrl: 'partials/detail.html',
      controller: 'ArticleDetail'
    });

  $urlRouterProvider.otherwise('/home');

  //$locationProvider.html5Mode(true);
});