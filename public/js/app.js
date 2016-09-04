console.log('app.js loded');

var app = angular.module('TestApp', ['ui.router', 'ui.bootstrap']);

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');

  $stateProvider

    .state('home', {
      url: '/home',
      templateUrl: 'views/testView.html'
    })

    .state('home.list', {
      url: '/list',
      templateUrl: 'templates/partial-home-list.html',
      controller: function($scope) {
          $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
      }
    })

    .state('about', {
      url: '/about',
      views: {

          '': { templateUrl: 'templates/partial-about.html' },

          'columnOne@about': { template: 'Look I am a column!' },

          'columnTwo@about': { 
              templateUrl: 'templates/table-data.html',
              controller: 'scotchController'
          }
      }
      
    })

});
