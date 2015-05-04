//angular.module can be thought of as a container for my the different parts of my app
//this is used as a replacement for a main method as these different parts can be reused and loaded at any time in any order in my app, and do not follow a strict pattern
angular.module('calorieCounter', ['ionic', 'project.controllers'])

.config(function($stateProvider, $urlRouterProvider) {

 //Defines what states my app can be in. Each state has a controller which is found in controllers.js
  $stateProvider
  
  //My default homepage state
  .state('home', {
    url: "/home",
    abstract: false,
    templateUrl: "templates/homepage.html",
   
  })
  

  //the categories in my side-bar
  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/categories.html",
    controller: 'AppCtrl'
  })
  
  //all dishes and the calorie counter itself
  .state('app.dishes', {
    url: "/dishes/:dishesId",
    views: {
      'menuContent': {
        templateUrl: "templates/dishes.html",
        controller: 'DishesCtrl'
      }
    }
  });
  
  //This is the default state '/home'. This is used when the app is first opened or when another state is not recognised
  $urlRouterProvider.otherwise('/home');

});
