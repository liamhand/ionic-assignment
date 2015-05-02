angular.module('cavamenu.controllers', [])

.controller('AppCtrl', function($scope) {
  $scope.categories = ['Eggs & Dairy', 'Fruits & Vegetables', 'Grains & Breads', 'Junk & Snack Foods','Meat, Fish & Shellfish', 'Nuts, Beans, & Legumes'];
})

.controller('DishesCtrl', function($scope, $stateParams) {
  categories = ['Eggs & Dairy', 'Fruits & Vegetables', 'Grains & Breads', 'Junk & Snack Foods','Meat, Fish & Shellfish', 'Nuts, Beans, & Legumes'];

  dishes = [
    [
      {title: "Egg (Medium Size)", imgsrc: "img/egg.jpg", calories: 100},
      {title: "Milk (Full Fat)", imgsrc: "img/egg.jpg", calories: 100},
      {title: "Milk (Low Fat)", imgsrc: "img/egg.jpg", calories: 100},
	  {title: "Cheese (Full Fat)", imgsrc: "img/egg.jpg", calories: 100},
	  {title: "Cheese (Low Fat)", imgsrc: "img/egg.jpg", calories: 100},
	  {title: "Cottage Cheese", imgsrc: "img/egg.jpg", calories: 100},
	  {title: "Natural Yoghurt", imgsrc: "img/naturalyogurt.jpg", calories: 200},
    ],
    [
      "Banana",
      "Apple",
      "Orange",
      "Avocado",
      "Pineapple",
      "Broccoli",
      "Cauliflower",
      "Spinach",
	  "Onion",
	  "Garlic",
	  "Potato",
	  "Sweet Potato",
	  "Brussel Sprouts",
	  
		
    ],
    [
      "Bread (Wholegrain)",
	  "Bread (White)",
	  "Rice (White)",
	  "Rice (Wholegrain)",
	  "Pasta (Wholegrain)",
	  "Pasta (White)",
	  "Quinoa",
    ],
    [
     "Crisps (Tayto)",
	 "Chocolate (Dairy-Milk)",
	 "Chocolate (Snickers)",
	 "Pizza",
	 "Potato Wedges",
	 "Chips",
	 "Hamburger",
	 
	 
    ],
	[
	 "Mince",
	 "Steak",
	 "Chicken",
	 "Turkey",
	 "Salmon",
	 "Cod",
	 "Tuna",
	 "Prawns",
	 "Oyster",
	 "Bacon Rasher",
	 "Sausage",
	 "Pork",
	 "Lamb",
	],
	[
	 "Almonds",
	 "Cashews",
	 "Walnuts",
	 "Peanuts",
	 "Chickpeas",
	 "Kidney Beans",
	 "Baked Beans",
	 "Garden Peas",
	]
  ];
  
  $scope.category = categories[$stateParams.dishesId];
  $scope.dishes = dishes[$stateParams.dishesId];

});