'use strict';

class NavbarController {
  //start-non-standard
  menu = [{
    'title': 'Home',
    'state': 'main'
  },
  {
    'title': 'Comment',
    'state': 'comment'
  },
  {
    'title': 'News',
    'state': 'news'
  }];

  isCollapsed = true;
  //end-non-standard

  constructor() {
    }
}

angular.module('newsFullStackApp')
  .controller('NavbarController', NavbarController);
