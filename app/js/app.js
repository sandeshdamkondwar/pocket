'use strict';


// Declare app level module which depends on filters, and services
var pocket = angular.module('pocket', ['pocket.filters', 'pocket.services', 'pocket.directives', 'pocket.controllers', 'ui.state']);


pocket.config(function($stateProvider, $urlRouterProvider) {
  //$locationProvider.html5Mode(true);

  $urlRouterProvider.otherwise('/home');

  $stateProvider
    .state('index', {
      url: '/home',
      templateUrl: 'partials/list.html',
      controller: 'ArticleList'
    })
    .state('index.detail', {
      url: '/articles/:articleId',
      templateUrl: 'partials/detail.html',
      controller: 'ArticleDetail'
    });

  //$routeProvider
  //  .when('/', {templateUrl: 'partials/list.html', controller: 'ArticleList'})
  //  .when('/articles/:articleId', {templateUrl: 'partials/article-detail.html', controller: 'ArticleDetail'})
  //  .otherwise({redirectTo: '/'});
});