'use strict';

angular.module('newsFullStackApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('news', {
        url: '/news',
        template: '<news></news>'
      });
  });
