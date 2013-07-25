'use strict'; 

/* Services */

angular.module('pocket.services', [])


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