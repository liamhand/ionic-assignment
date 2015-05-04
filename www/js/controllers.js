angular.module('project.controllers', [])

.controller('AppCtrl', function($scope) {
  $scope.categories = ['Eggs & Dairy', 'Fruits & Vegetables', 'Grains & Breads', 'Junk & Snack Foods','Meat, Fish & Shellfish', 'Nuts, Beans, & Legumes'];
})

.factory('Projects', function() {
	return {
    
    save: function(projects) {
      window.localStorage['projects'] = angular.toJson(projects);
    },
    
	}
})




.controller('DishesCtrl', function($scope,$rootScope,Projects,$stateParams) {
 
   $rootScope.count = 0;
 
 categories = ['Eggs & Dairy', 'Fruits & Vegetables', 'Grains & Breads', 'Junk & Snack Foods','Meat, Fish & Shellfish', 'Nuts, Beans, & Legumes'];
	
 

  $rootScope.addCalories = function(calorie) {													
	    $rootScope.count = $rootScope.count + calorie;
		Projects.save($rootScope.count);
			
		
  };
  
  $rootScope.removeCalories = function(calorie) {													
	    $rootScope.count = $rootScope.count - calorie;
		 if($rootScope.count < 0){
		     $rootScope.count = 0;
			 Projects.save($rootScope.count);
		 }else{
			 Projects.save($rootScope.count);
		 }
		 
		
		
  };
  
  $scope.reset = function() {														
	   $rootScope.count = 0;																
   };
  
  
  dishes = [
    [
	  {title: "Cheese (Full Fat)", imgsrc: "img/cheese.jpg", calories: 115, quantity: 30 + " grams"},
	  {title: "Cheese (Low Fat)", imgsrc: "img/cheese.jpg", calories: 90, quantity: 30 + " grams"},
	  {title: "Cottage Cheese", imgsrc: "img/cottage-cheese.jpg", calories: 86, quantity: 100 + " grams"},
      {title: "Egg (Medium Size)", imgsrc: "img/egg.jpg", calories: 78, quantity: 1},
	  {title: "Milk (Full Fat)", imgsrc: "img/Milk.jpg", calories: 148, quantity: 1 + " glass"},
      {title: "Milk (Low Fat)", imgsrc: "img/Milk.jpg", calories: 103, quantity: 1 + " glass"},
	  {title: "Natural Yoghurt", imgsrc: "img/naturalyogurt.jpg", calories: 165, quantity: 250 + " grams"},
    ],
    [  
	  {title: "Apple", imgsrc: "img/Apples.jpg", calories: 95, quantity: 1},
	  {title: "Avocado", imgsrc: "img/avocado.jpg", calories: 322, quantity: 1},
      {title: "Banana", imgsrc: "img/banana.png", calories: 105, quantity: 1},
	  {title: "Broccoli", imgsrc: "img/Brocolli.jpg", calories: 34, quantity: 100 + " grams"},
	  {title: "Brussel Sprouts", imgsrc: "img/brussels_sprouts.jpg", calories: 40, quantity: 100 + " grams"},
	  {title: "Cauliflower", imgsrc: "img/cauliflower.jpg", calories: 30, quantity: 100 + " grams"},
	  {title: "Garlic", imgsrc: "img/garlic.jpg", calories: 5, quantity: 1 + " clove"},
	  {title: "Onion", imgsrc: "img/onion.jpg", calories: 28, quantity: 1},
	  {title: "Orange", imgsrc: "img/orange.jpg", calories: 62, quantity: 1},
      {title: "Pineapple", imgsrc: "img/pineapple.jpg", calories: 50, quantity: 100 + " grams"},
	  {title: "Potato", imgsrc: "img/Potatoes.jpg", calories: 77, quantity: 100 + " grams"},
      {title: "Spinach", imgsrc: "img/spinach.jpg", calories: 23, quantity: 100 + " grams"},
	  {title: "Sweet Potato", imgsrc: "img/sweet-potato.jpg", calories: 86, quantity: 100 + " grams"},
	],
    [
      {title: "Bread (Wholegrain)", imgsrc: "img/wholegrain-bread.jpg", calories: 69, quantity: 1 + " slice"},
	  {title: "Bread (White)", imgsrc: "img/white-bread.jpg", calories: 74, quantity: 1 + " slice"},
	  {title: "Pasta (Wholegrain)", imgsrc: "img/wholegrain-pasta.jpg", calories: 250, quantity: 75 + " grams (Uncooked)"},
      {title: "Pasta (White)", imgsrc: "img/white-pasta.jpg", calories: 262, quantity: 75 + " grams (Uncooked)"},
	  {title: "Quinoa", imgsrc: "img/quinoa.jpg", calories: 180, quantity: 45 + " grams (Uncooked)"},
      {title: "Rice (Wholegrain)", imgsrc: "img/wholegrain-rice.jpg", calories: 112, quantity: 50 + " grams (Uncooked)"},
	  {title: "Rice (White)", imgsrc: "img/white-rice.jpg", calories: 130, quantity: 50 + " grams (Uncooked)"},
	],
    [
	 {title: "Chips", imgsrc: "img/chips.jpg", calories: 312, quantity: 100 + " grams"},
	 {title: "Chocolate (Dairy-Milk)", imgsrc: "img/dairy-milk.jpg", calories: 212, quantity: 1},
	 {title: "Chocolate (Snickers)", imgsrc: "img/snickers.jpg", calories: 250, quantity: 1},
     {title: "Crisps (Tayto)", imgsrc: "img/tayto.jpg", calories: 197, quantity: 1},
	 {title: "Hamburger", imgsrc: "img/hamburger.jpg", calories: 254, quantity: 1},
	 {title: "Pizza", imgsrc: "img/pizza.jpg", calories: 760, quantity: 1},
	 {title: "Potato Wedges", imgsrc: "img/wedges.jpg", calories: 150, quantity: 100 + " grams"},
    ],
	[
	 {title: "Bacon Rasher", imgsrc: "img/rasher.jpg", calories: 55, quantity: 1},
	 {title: "Beef Mince", imgsrc: "img/mince.jpg", calories: 275, quantity: 125 + " grams"},
	 {title: "Chicken", imgsrc: "img/Chicken.png", calories: 202, quantity: 125 + " grams"},
	 {title: "Cod", imgsrc: "img/cod.jpg", calories: 101, quantity: 125 + " grams"},
	 {title: "Ham", imgsrc: "img/ham.jpg", calories: 34, quantity: 1 + " slice"},
	 {title: "Lamb", imgsrc: "img/Lamb.jpg", calories: 312, quantity: 125 + " grams"},
	 {title: "Oysters", imgsrc: "img/oysters.jpg", calories: 79, quantity: 100 + " grams"},
	 {title: "Pork", imgsrc: "img/Pork.jpg", calories: 210, quantity: 125 + " grams"},
	 {title: "Prawns", imgsrc: "img/prawns.jpg", calories: 79, quantity: 100 + " grams"},
	 {title: "Sausage", imgsrc: "img/sausage.jpg", calories: 80, quantity: 1},
	 {title: "Salmon", imgsrc: "img/salmon.jpg", calories: 178, quantity: 125 + " grams"},
	 {title: "Steak", imgsrc: "img/Steak.png", calories: 270, quantity: 125 + " grams"},
	 {title: "Tuna", imgsrc: "img/tuna.jpg", calories: 180, quantity: 1 + " large can (brine)"},
     {title: "Turkey", imgsrc: "img/turkey.jpg", calories: 210, quantity: 125 + " grams"},
	],
	[
	 {title: "Almonds", imgsrc: "img/almonds.jpg", calories: 155, quantity: 25 + " grams"},
	 {title: "Baked Beans", imgsrc: "img/beans.jpg", calories: 324, quantity: 1 + " medium tin"},
	 {title: "Cashews", imgsrc: "img/cashews.jpg", calories: 154, quantity: 25 + " grams"},
	 {title: "Chickpeas", imgsrc: "img/chick-peas.jpg", calories: 298, quantity: 1 + " tin"},
	 {title: "Garden Peas", imgsrc: "img/Peas.jpg", calories: 250, quantity: 1 + " tin"},
     {title: "Kidney Beans", imgsrc: "img/kidney-beans.jpg", calories: 248, quantity: 1 + " tin"},
	 {title: "Peanuts", imgsrc: "img/peanuts.jpg", calories: 158, quantity: 25 + " grams"},
     {title: "Walnuts", imgsrc: "img/walnuts.jpg", calories: 180, quantity: 25 + " grams"},
	]
  ];
  
  $scope.category = categories[$stateParams.dishesId];
  $scope.dishes = dishes[$stateParams.dishesId];

});