angular.module('cavamenu.controllers', [])

.controller('AppCtrl', function($scope) {
  $scope.categories = ['Eggs & Dairy', 'Fruits & Vegetables', 'Grains & Breads', 'Junk & Snack Foods','Meat, Fish & Shellfish', 'Nuts, Beans, & Legumes'];
})

.controller('DishesCtrl', function($scope, $stateParams) {
  categories = ['Eggs & Dairy', 'Fruits & Vegetables', 'Grains & Breads', 'Junk & Snack Foods','Meat, Fish & Shellfish', 'Nuts, Beans, & Legumes'];

  dishes = [
    [
	  {title: "Cheese (Low Fat)", imgsrc: "img/egg.jpg", calories: 100},
	  {title: "Cheese (Full Fat)", imgsrc: "img/egg.jpg", calories: 100},
	  {title: "Cottage Cheese", imgsrc: "img/egg.jpg", calories: 100},
      {title: "Egg (Medium Size)", imgsrc: "img/egg.jpg", calories: 100},
	  {title: "Milk (Full Fat)", imgsrc: "img/egg.jpg", calories: 100},
      {title: "Milk (Low Fat)", imgsrc: "img/egg.jpg", calories: 100},
	  {title: "Natural Yoghurt", imgsrc: "img/naturalyogurt.jpg", calories: 200},
    ],
    [  
	  {title: "Apple", imgsrc: "img/egg.jpg", calories: 100},
	  {title: "Avocado", imgsrc: "img/egg.jpg", calories: 100},
      {title: "Banana", imgsrc: "img/egg.jpg", calories: 100},
	  {title: "Broccoli", imgsrc: "img/egg.jpg", calories: 100},
	  {title: "Brussel Sprouts", imgsrc: "img/egg.jpg", calories: 100},
	  {title: "Cauliflower", imgsrc: "img/egg.jpg", calories: 100},
	  {title: "Garlic", imgsrc: "img/egg.jpg", calories: 100},
	  {title: "Onion", imgsrc: "img/egg.jpg", calories: 100},
	  {title: "Orange", imgsrc: "img/egg.jpg", calories: 100},
      {title: "Pineapple", imgsrc: "img/egg.jpg", calories: 100},
	  {title: "Potato", imgsrc: "img/egg.jpg", calories: 100},
      {title: "Spinach", imgsrc: "img/egg.jpg", calories: 100},
	  {title: "Sweet Potato", imgsrc: "img/egg.jpg", calories: 100},
	],
    [
      {title: "Bread (Wholegrain)", imgsrc: "img/egg.jpg", calories: 100},
	  {title: "Bread (White)", imgsrc: "img/egg.jpg", calories: 100},
	  {title: "Pasta (Wholegrain)", imgsrc: "img/egg.jpg", calories: 100},
      {title: "Pasta (White)", imgsrc: "img/egg.jpg", calories: 100},
	  {title: "Quinoa", imgsrc: "img/egg.jpg", calories: 100},
      {title: "Rice (Wholegrain)", imgsrc: "img/egg.jpg", calories: 100},
	  {title: "Rice (White)", imgsrc: "img/egg.jpg", calories: 100},
	],
    [
	 {title: "Chips", imgsrc: "img/egg.jpg", calories: 100},
	 {title: "Chocolate (Dairy-Milk)", imgsrc: "img/egg.jpg", calories: 100},
	 {title: "Chocolate (Snickers)", imgsrc: "img/egg.jpg", calories: 100},
     {title: "Crisps (Tayto)", imgsrc: "img/egg.jpg", calories: 100},
	 {title: "Hamburger", imgsrc: "img/egg.jpg", calories: 100},
	 {title: "Pizza", imgsrc: "img/egg.jpg", calories: 100},
	 {title: "Potato Wedges", imgsrc: "img/egg.jpg", calories: 100},
    ],
	[
	 {title: "Bacon Rasher", imgsrc: "img/egg.jpg", calories: 100},
	 {title: "Beef Mince", imgsrc: "img/egg.jpg", calories: 100},
	 {title: "Chicken", imgsrc: "img/egg.jpg", calories: 100},
	 {title: "Cod", imgsrc: "img/egg.jpg", calories: 100},
	 {title: "Ham", imgsrc: "img/egg.jpg", calories: 100},
	 {title: "Lamb", imgsrc: "img/egg.jpg", calories: 100},
	 {title: "Oysters", imgsrc: "img/egg.jpg", calories: 100},
	 {title: "Pork", imgsrc: "img/egg.jpg", calories: 100},
	 {title: "Prawns", imgsrc: "img/egg.jpg", calories: 100},
	 {title: "Sausage", imgsrc: "img/egg.jpg", calories: 100},
	 {title: "Salmon", imgsrc: "img/egg.jpg", calories: 100},
	 {title: "Steak", imgsrc: "img/egg.jpg", calories: 100},
	 {title: "Tuna", imgsrc: "img/egg.jpg", calories: 100},
     {title: "Turkey", imgsrc: "img/egg.jpg", calories: 100},
	],
	[
	 {title: "Almonds", imgsrc: "img/egg.jpg", calories: 100},
	 {title: "Baked Beans", imgsrc: "img/egg.jpg", calories: 100},
	 {title: "Cashews", imgsrc: "img/egg.jpg", calories: 100},
	 {title: "Chickpeas", imgsrc: "img/egg.jpg", calories: 100},
	 {title: "Garden Peas", imgsrc: "img/egg.jpg", calories: 100},
     {title: "Kidney Beans", imgsrc: "img/egg.jpg", calories: 100},
	 {title: "Peanuts", imgsrc: "img/egg.jpg", calories: 100},
     {title: "Walnuts", imgsrc: "img/egg.jpg", calories: 100},
	]
  ];
  
  $scope.category = categories[$stateParams.dishesId];
  $scope.dishes = dishes[$stateParams.dishesId];

});