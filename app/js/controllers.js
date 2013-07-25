'use strict';


/* Controllers */

angular.module('pocket.controllers', [])
  .controller('ArticleList', ['$scope','$http','$state','urlz', 'storage', function($scope, $http, $state, urlz, storage) {

  	$scope.articles = [
	  	{
	  	'title': 'Do You Suffer from #FOMO?',
	  	'url': 'http://www.gq.com/news-politics/mens-lives/201308/instagram-fomo-disorder-treatment-plan'},
	  	{
	  	'title': 'The Last Stand of Walter White',
	  	'url': 'http://www.gq.com/entertainment/celebrities/201308/bryan-cranston-walter-white-breaking-bad-season-6'}, 
	  	{
	  	'title': 'Have You Heard the One About President Joe Biden?',
	  	'url': 'http://www.gq.com/news-politics/newsmakers/201308/joe-biden-presidential-campaign-2016-2013#ixzz2Zu3rrl'}
	  ]

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
      var testUrl = "http://valleywag.gawker.com/techcrunchs-facebook-ambassador-pens-400-words-about-o-901335669";
      urlz.parseUrl(testUrl).then(function(){
        $state.transitionTo("index.detail", article, false);
      })
    }

  }]).controller('ArticleDetail', ['$scope', '$routeParams', 'urlz', function($scope, $routeParams, urlz) {
  	$scope.leArticle = urlz.retrieveData();
  }]);