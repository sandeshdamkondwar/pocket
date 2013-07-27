'use strict';


/* Controllers */

angular.module('pocket.controllers', [])
  .controller('ArticleList', ['$scope','$http', '$state', 'urlz', 'links', function($scope, $http, $state, urlz, links) {

    $scope.articles = links.getLinks();

    // currently broken
    $scope.signIn = function() {
      var postObject = new Object();
      postObject.consumer_key = pocketKey;
      postObject.redirect_uri = "http://www.hilario.com";

      $http({
        url: pocketUrl,
        method: "POST",
        dataType: "jsonp",
        data: postObject,
        success: function() {
          alert("GREAT SUCCESS");
        }
      })
    }

    $scope.showArticle = function(article) {
      urlz.parseUrl(article.url).then(function(){
        $state.transitionTo("index.detail", {url: article.url});
      })
    }

  }]).controller('ArticleDetail', ['$scope', '$routeParams', '$stateParams', 'urlz', function($scope, $routeParams, $stateParams, urlz) {
  	$scope.article = urlz.retrieveData($stateParams.url);
  }]);