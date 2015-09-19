angular.module('todoly', ['ionic', 'todoly.controller', 'todoly.service'])

.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
    .state('main', {
      url:'/',
      templateUrl:'templates/main.html',
      controller: "MainCtrl as main"
    })
    .state('add', {
      url:'/add',
      templateUrl:'templates/add.html',
      controller: "AddCtrl as add"
    });

  $urlRouterProvider.otherwise('/');

});
