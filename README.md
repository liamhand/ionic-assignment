This is my Calorie Counter App for the Mobile Applications Development project 2015.

My app has 3 states which correspond to my 3 html templates. These states are defined in my app.js file, and their controllers in my controllers.js file.

Upon starting my app, you are greeted by my home page. This contains a welcome image and some welcome text, and a link that you tap which brings you to the main section of the app.
The homepage is one of the 3 states, and links to another state, where food is listed as an inset list. This also has a div for Total Daily Calories. 
Total Daily Calories is stored as a $rootScope variable in my DishCtrl (located in controllers.js). 
This then uses the factory method from the toDo app, to store the value of the $rootScope variable in local storage. 
This means that when the app is closed, or loaded between different states, this value will remain consistent.
There are 3 buttons attached to every item of food, which add calories, remove calories, and reset the total calories.

The third state displays each category of food as a side-menu. Each category then contains an appropriate listing of foods.
These categories are stored as an array in the DishCtrl, and each category has an array of food items. Each item of food also has some attributes such as name, picture of the food, and calories within the food.

My app works perfectly except for one issue I have had: 
Before the total daily calories can be stored persistently, upon opening the app, you must load each category into memory by clicking on the side-menu, and clicking on each category individually.
Once you do this, you can add, remove, and reset calories as you please, and navigate between different states and your total daily calories will always remain consistent.
If you don't open each category individually upon starting, you may add some items from the dairy section, but then when you click into say, the meats section, the counter is automatically set to zero.
This is a small problem that I wish I could have solved, but unfortunately time was against me...

All my source code and commit history is available on GitHub at https://github.com/liamhand/ionic-assignment.

