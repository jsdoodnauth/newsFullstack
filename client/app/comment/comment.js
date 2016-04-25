'use strict';

angular.module('newsFullStackApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('comment', {
        url: '/comment',
        template: '<comment></comment>'
      });
  });
