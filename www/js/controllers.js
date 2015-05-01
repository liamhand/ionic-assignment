angular.module('cavamenu.controllers', [])

.controller('AppCtrl', function($scope) {
  $scope.categories = ['Eggs & Dairy', 'Fruits & Vegetables', 'Grains & Breads', 'Junk & Snack Foods','Meat, Fish & Shellfish', 'Nuts, Beans, & Legumes', ];
})

.controller('DishesCtrl', function($scope, $stateParams) {
  categories = ['Eggs & Dairy', 'Fruits & Vegetables', 'Grains & Breads', 'Junk & Snack Foods','Meat, Fish & Shellfish', 'Nuts, Beans, & Legumes', ];

  dishes = [
    [
      "egg (medium size)",
      "milk (full fat)",
      "milk (low fat)",
      "cheese (full fat)",
	  "cheese (low fat)",
	  "cottage cheese",
	  "natural yoghurt",
	],
    [
      "banana",
      "apple",
      "orange",
      "avocado",
      "pineapple",
      "broccoli",
      "cauliflower",
      "spinach",
      "onion",
	  "garlic",
	  "potato"
	  "sweet potato",
	  "brussel sprouts",
    ],
    [
      "bread (wholegrain)",
	  "bread (white)",
	  "rice (white)",
	  "rice (wholegrain)",
	  "pasta (wholegrain)",
	  "pasta (white)",
	  "quinoa",
    ],
    [
     "crisps (Tayto)",
	 "chocolate (Dairy-Milk)",
	 "chocolate (Snickers)"
	 "pizza",
	 "potato wedges",
	 "chips",
	 "hamburger",
	],
	[
	 "mince",
	 "steak",
	 "chicken",
	 "turkey",
	 "salmon",
	 "cod",
	 "tuna",
	 "prawns",
	 "oyster",
	 "bacon rasher",
	 "pork",
	 "lamb",
	],
	[
	 "almonds",
	 "cashews",
	 "walnuts",
	 "peanuts",
	 "chickpeas",
	 "kidney beans",
	 "baked beans",
	 "garden peas",
	 
    ]
  ];
  
  $scope.category = categories[$stateParams.dishesId];
  $scope.dishes = dishes[$stateParams.dishesId];

});

