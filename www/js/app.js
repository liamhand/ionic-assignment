angular.module('cavamenu', ['ionic', 'project.controllers'])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  

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

  $urlRouterProvider.otherwise('/app/dishes/0');
});
