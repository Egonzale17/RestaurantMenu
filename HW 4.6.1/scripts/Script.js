let menuItem = {
    name: 'Kale Caesar Salad',
    nickName: 'All Hail Kale',
    referenceID: 'SLD001',
    description: 'Kale is king in this hearty, flavorful salad that pays homage to the traditional - but with a healthy twist',
    highInCalories: false,
    ingredients: ['Kale', 'Caesar dressing', 'Anchovy paste', 'Grilled corn', 'Parmesan cheese', 'Croutons'],
    numIngredients: function() {
    return this.ingredients.length;
    }
    }

    //adding the year of the salad was added to the menu
    menuItem.saladYear = 2017;
    console.log(menuItem);


    //calories for salad
    menuItem.calories = 560;


    //remove the nickname
    menuI.nickName = ``;

    //add lemo as an ingridient
    menuItem.splice(`Lemon`);
    console.log(menutime);

