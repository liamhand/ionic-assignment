angular.module('calorieCounter', ['ionic', 'project.controllers'])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  
  .state('home', {
    url: "/home",
    abstract: false,
    templateUrl: "templates/homepage.html",
    //controller: 'AppCtrl'
  })
  

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/categories.html",
    controller: 'AppCtrl'
  })
  

  

  .state('app.dishes', {
    url: "/dishes/:dishesId",
    views: {
      'menuContent': {
        templateUrl: "templates/dishes.html",
        controller: 'DishesCtrl'
      }
    }
  });

  $urlRouterProvider.otherwise('/home');
});
