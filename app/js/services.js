'use strict'; 

/* Services */

angular.module('pocket.services', [])


  .factory('links', function($http){
    return {
      getLinks: function() {
        var links = [
          {
          'id': '1d3fbf',
          'title': 'Do You Suffer from #FOMO?',
          'url': 'http://www.gq.com/news-politics/mens-lives/201308/instagram-fomo-disorder-treatment-plan'},
          {
          'id': '8fjn2k',
          'title': 'The Last Stand of Walter White',
          'url': 'http://www.gq.com/entertainment/celebrities/201308/bryan-cranston-walter-white-breaking-bad-season-6'}, 
          {
          'id': 'k19shf',
          'title': 'Have You Heard the One About President Joe Biden?',
          'url': 'http://www.gq.com/news-politics/newsmakers/201308/joe-biden-presidential-campaign-2016-2013#ixzz2Zu3rrl'}
        ]

        return links;
      }
    }
  })

    .factory('urlz', function($http){

      var articleArray = []
      return {
        parseUrl: function(url) {

          // search for article first
          var result = $.grep(articleArray, function(e) { return e.url == url; });

          // this is not working due to then()
          if (result[0]){
            var promise;
            return promise;

          } else {
            // promise returns a then() function which triggers the detail pane to render with the data
            var promise = $http.jsonp(diffbotWithKey + "&url=" + url + "&callback=JSON_CALLBACK",{'headers': {'Content-Type': 'text/html'}}).success(function(data){
              articleArray.push(data);
            })

            return promise;
          }
        },
        retrieveData: function(url) {
          var article = $.grep(articleArray, function(e) { return e.url == url; });
          return article[0];
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