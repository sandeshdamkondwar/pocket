'use strict';


/* Controllers */

angular.module('pocket.controllers', [])
  .controller('ArticleList', function($scope, $http) {

  	$scope.articles = [
	  	{'id': 'fomo',
	  	'title': 'Do You Suffer from #FOMO?',
	  	'url': 'http://www.gq.com/news-politics/mens-lives/201308/instagram-fomo-disorder-treatment-plan'},
	  	{'id': 'walter-white',
	  	'title': 'The Last Stand of Walter White',
	  	'url': 'http://www.gq.com/entertainment/celebrities/201308/bryan-cranston-walter-white-breaking-bad-season-6'}, 
	  	{'id': 'joe-biden',
	  	'title': 'Have You Heard the One About President Joe Biden?',
	  	'url': 'http://www.gq.com/news-politics/newsmakers/201308/joe-biden-presidential-campaign-2016-2013#ixzz2Zu3rrl'}
	  ]

    $scope.signIn = function() {

      var postObject = new Object();
      postObject.consumer_key = pocketKey;
      postObject.redirect_uri = "http://www.hilario.com";

      $http.post(apiUrl, postObject).success(function(data){
        alert(data);
      });
    }

  }).controller('ArticleDetail', function($scope, $routeParams) {
  	$scope.phoneId = $routeParams.phoneId;
  });