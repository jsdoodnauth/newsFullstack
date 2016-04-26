'use strict';

angular.module('newsFullStackApp')
  .service('hnService', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    return {
	    getData: function() {
          return $http.get("https://hacker-news.firebaseio.com/v0/topstories.json");
      },
     	getStaticData: function() {
    		return "hello";
    	}
		};
  });
