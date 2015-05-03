angular.module('cavamenu.controllers', [])

.controller('AppCtrl', function($scope) {
  $scope.categories = ['Eggs & Dairy', 'Fruits & Vegetables', 'Grains & Breads', 'Junk & Snack Foods','Meat, Fish & Shellfish', 'Nuts, Beans, & Legumes'];
})

.controller('DishesCtrl', function($scope, $stateParams) {
  categories = ['Eggs & Dairy', 'Fruits & Vegetables', 'Grains & Breads', 'Junk & Snack Foods','Meat, Fish & Shellfish', 'Nuts, Beans, & Legumes'];

  dishes = [
    [
	  {title: "Cheese (Full Fat)", imgsrc: "img/egg.jpg", calories: 115, quantity: 30 + " grams"},
	  {title: "Cheese (Low Fat)", imgsrc: "img/egg.jpg", calories: 90, quantity: 30 + " grams"},
	  {title: "Cottage Cheese", imgsrc: "img/egg.jpg", calories: 86, quantity: 100 + " grams"},
      {title: "Egg (Medium Size)", imgsrc: "img/egg.jpg", calories: 78, quantity: 1},
	  {title: "Milk (Full Fat)", imgsrc: "img/Milk.jpg", calories: 148, quantity: 1 + " glass"},
      {title: "Milk (Low Fat)", imgsrc: "img/Milk.jpg", calories: 103, quantity: 1 + " glass"},
	  {title: "Natural Yoghurt", imgsrc: "img/naturalyogurt.jpg", calories: 165, quantity: 250 + " grams"},
    ],
    [  
	  {title: "Apple", imgsrc: "img/Apples.jpg", calories: 95, quantity: 1},
	  {title: "Avocado", imgsrc: "img/egg.jpg", calories: 322, quantity: 1},
      {title: "Banana", imgsrc: "img/banana.jpg", calories: 105, quantity: 1},
	  {title: "Broccoli", imgsrc: "img/Broccoli.jpg", calories: 34, quantity: 100 + " grams"},
	  {title: "Brussel Sprouts", imgsrc: "img/egg.jpg", calories: 40, quantity: 100 + " grams"},
	  {title: "Cauliflower", imgsrc: "img/egg.jpg", calories: 30, quantity: 100 + " grams"},
	  {title: "Garlic", imgsrc: "img/egg.jpg", calories: 5, quantity: 1 + " clove"},
	  {title: "Onion", imgsrc: "img/egg.jpg", calories: 28, quantity: 1},
	  {title: "Orange", imgsrc: "img/orange.jpg", calories: 62, quantity: 1},
      {title: "Pineapple", imgsrc: "img/egg.jpg", calories: 50, quantity: 100 + " grams"},
	  {title: "Potato", imgsrc: "img/Potatoes.jpg", calories: 77, quantity: 100 + " grams"},
      {title: "Spinach", imgsrc: "img/egg.jpg", calories: 23, quantity: 100 + " grams"},
	  {title: "Sweet Potato", imgsrc: "img/egg.jpg", calories: 86, quantity: 100 + " grams"},
	],
    [
      {title: "Bread (Wholegrain)", imgsrc: "img/egg.jpg", calories: 69, quantity: 1 + " slice"},
	  {title: "Bread (White)", imgsrc: "img/egg.jpg", calories: 74, quantity: 1 + " slice"},
	  {title: "Pasta (Wholegrain)", imgsrc: "img/egg.jpg", calories: 250, quantity: 75 + " grams (Uncooked)"},
      {title: "Pasta (White)", imgsrc: "img/egg.jpg", calories: 262, quantity: 75 + " grams (Uncooked)"},
	  {title: "Quinoa", imgsrc: "img/egg.jpg", calories: 180, quantity: 45 + " grams (Uncooked)"},
      {title: "Rice (Wholegrain)", imgsrc: "img/egg.jpg", calories: 112, quantity: 50 + " grams (Uncooked)"},
	  {title: "Rice (White)", imgsrc: "img/egg.jpg", calories: 130, quantity: 50 + " grams (Uncooked)"},
	],
    [
	 {title: "Chips", imgsrc: "img/egg.jpg", calories: 312, quantity: 100 + " grams"},
	 {title: "Chocolate (Dairy-Milk)", imgsrc: "img/egg.jpg", calories: 212, quantity: 1},
	 {title: "Chocolate (Snickers)", imgsrc: "img/egg.jpg", calories: 250, quantity: 1},
     {title: "Crisps (Tayto)", imgsrc: "img/egg.jpg", calories: 197, quantity: 1},
	 {title: "Hamburger", imgsrc: "img/egg.jpg", calories: 254, quantity: 1},
	 {title: "Pizza", imgsrc: "img/egg.jpg", calories: 760, quantity: 1},
	 {title: "Potato Wedges", imgsrc: "img/egg.jpg", calories: 150, quantity: 100 + " grams"},
    ],
	[
	 {title: "Bacon Rasher", imgsrc: "img/egg.jpg", calories: 55, quantity: 1},
	 {title: "Beef Mince", imgsrc: "img/egg.jpg", calories: 275, quantity: 125 + " grams"},
	 {title: "Chicken", imgsrc: "img/Chicken.png", calories: 202, quantity: 125 + " grams"},
	 {title: "Cod", imgsrc: "img/egg.jpg", calories: 101, quantity: 125 + " grams"},
	 {title: "Ham", imgsrc: "img/egg.jpg", calories: 34, quantity: 1 + " slice"},
	 {title: "Lamb", imgsrc: "img/Lamb.jpg", calories: 312, quantity: 125 + " grams"},
	 {title: "Oysters", imgsrc: "img/egg.jpg", calories: 79, quantity: 100 + " grams"},
	 {title: "Pork", imgsrc: "img/Pork.jpg", calories: 210, quantity: 125 + " grams"},
	 {title: "Prawns", imgsrc: "img/egg.jpg", calories: 79, quantity: 100 + " grams"},
	 {title: "Sausage", imgsrc: "img/egg.jpg", calories: 80, quantity: 1},
	 {title: "Salmon", imgsrc: "img/salmon.jpg", calories: 178, quantity: 125 + " grams"},
	 {title: "Steak", imgsrc: "img/Steak.png", calories: 270, quantity: 125 + " grams"},
	 {title: "Tuna", imgsrc: "img/egg.jpg", calories: 180, quantity: 1 + " large can (brine)"},
     {title: "Turkey", imgsrc: "img/egg.jpg", calories: 210, quantity: 125 + " grams"},
	],
	[
	 {title: "Almonds", imgsrc: "img/egg.jpg", calories: 155, quantity: 25 + " grams"},
	 {title: "Baked Beans", imgsrc: "img/egg.jpg", calories: 324, quantity: 1 + " medium tin"},
	 {title: "Cashews", imgsrc: "img/egg.jpg", calories: 154, quantity: 25 + " grams"},
	 {title: "Chickpeas", imgsrc: "img/egg.jpg", calories: 298, quantity: 1 + " tin"},
	 {title: "Garden Peas", imgsrc: "img/Peas.jpg", calories: 250, quantity: 1 + " tin"},
     {title: "Kidney Beans", imgsrc: "img/egg.jpg", calories: 248, quantity: 1 + " tin"},
	 {title: "Peanuts", imgsrc: "img/egg.jpg", calories: 158, quantity: 25 + " grams"},
     {title: "Walnuts", imgsrc: "img/egg.jpg", calories: 180, quantity: 25 + " grams"},
	]
  ];
  
  $scope.category = categories[$stateParams.dishesId];
  $scope.dishes = dishes[$stateParams.dishesId];

});