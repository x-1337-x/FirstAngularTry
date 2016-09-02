console.log('app.js loded');

var app = angular.module('EmailApp', ['ngRoute']);

app.config(function($routeProvider) {
  
  'use strict';

  $routeProvider
    .when('/inbox', {
      templateUrl: '../views/inbox.html',
      controller: 'InboxCtrl'
    })
    .otherwise({
      redirectTo: '/inbox'
    });
});

