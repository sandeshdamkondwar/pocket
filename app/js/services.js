'use strict'; 

/* Services */

angular.module('pocket.services', [])


  .factory('links', function($http){
    return {
      getLinks: function() {
        var links = [
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

        return links;
      }
    }
  })

    .factory('urlz', function($http){

      var article = []
      return {
        parseUrl: function(url) {

          // promise returns a then() function which triggers the detail pane to render with the data
          var promise = $http.jsonp(diffbotWithKey + "&url=" + url + "&callback=JSON_CALLBACK").success(function(data){
            article = data;
          })

          return promise;
        },
        retrieveData: function() {
          return article;
        }
      }
    })

  // this wonderous function provided by jxnblk
  // http://twitter.com/jxnblk
  .factory('storage', function(){            
    return {
      set: function(key, obj){
        var string = JSON.stringify(obj)
        localStorage.setItem(key, string);
      },
      get: function(key){
        var data = localStorage.getItem(key);
        var obj = JSON.parse(data);
        return obj;
      },
      clearAll: function(){
        localStorage.clear();
      }
    }     
  });