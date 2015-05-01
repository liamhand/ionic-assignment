angular.module('cavamenu.controllers', [])

.controller('AppCtrl', function($scope) {
  $scope.categories = ['Eggs & Dairy', 'Fruits & Vegetables', 'Grains & Breads', 'Junk & Snack Foods','Meat, Fish & Shellfish', 'Nuts, Beans, & Legumes'];
})

.controller('DishesCtrl', function($scope, $stateParams) {
  categories = ['Eggs & Dairy', 'Fruits & Vegetables', 'Grains & Breads', 'Junk & Snack Foods','Meat, Fish & Shellfish', 'Nuts, Beans, & Legumes'];

  dishes = [
    [
      "Egg (Medium Size)",
      "Milk (Full Fat)",
      "Milk (Low Fat)",
      "Cheese (Full Fat)",
	  "Cheese (Low Fat)",
	  "Cottage Cheese",
	  "Natural Yoghurt",
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