'use strict';
(function(){

class NewsComponent {
  constructor(hnService, $http) {
    this.$http = $http;
    this.message = 'Hello News';
    this.newsArticles = [];
  }

  $onInit() {
    this.$http.get('https://hacker-news.firebaseio.com/v0/topstories.json').then(response => {
      this.newsArticles = response.data;
      this.socket.syncUpdates('news', this.newsArticles);
    });
  }
}

angular.module('newsFullStackApp')
  .component('news', {
    templateUrl: 'app/news/news.html',
    controller: NewsComponent
  });
})();
