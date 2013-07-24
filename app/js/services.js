'use strict';

/* Services */

angular.module('pocket.services', [])

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