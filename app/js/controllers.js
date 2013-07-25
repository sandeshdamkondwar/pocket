'use strict';


/* Controllers */

angular.module('pocket.controllers', [])
  .controller('ArticleList', ['$scope','$http','$state','urlz', 'links', function($scope, $http, $state, urlz, links) {

    $scope.articles = links.getLinks();

    // currently broken
    $scope.signIn = function() {
      var postObject = new Object();
      postObject.consumer_key = pocketKey;
      postObject.redirect_uri = "http://www.hilario.com";

      $http.post(pocketUrl, postObject).success(function(data){
        alert(data);
      });
    }

    $scope.showArticle = function(article) {
      urlz.parseUrl(article.url).then(function(){
        $state.transitionTo("index.detail", article, false);
      })
    }

  }]).controller('ArticleDetail', ['$scope', '$routeParams', 'urlz', function($scope, $routeParams, urlz) {
  	$scope.leArticle = urlz.retrieveData();
  }]);