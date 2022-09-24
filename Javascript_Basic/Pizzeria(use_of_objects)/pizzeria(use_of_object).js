function pizzaOven(crustType, sauceType, cheese, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheese = cheese;
    pizza.toppings = toppings;
    return pizza;
}

function randomPizza() {
    var crustType = ["ct1", "ct2", "ct3", "ct4", "ct5"];
    var sauceType = ["st1", "st2", "st3", "st4", "st5"];
    var cheese = ["c1", "c2", "c3", "c4", "c5"];
    var toppings = ["t1", "t2", "t3", "t4", "t5"];

    yourCrustType = Math.floor(Math.random() * crustType.length);
    yourSauceType = Math.floor(Math.random() * sauceType.length);
    yourCheese = Math.floor(Math.random() * cheese.length);
    yourToppings = Math.floor(Math.random() * toppings.length);
    
    var pizza = {};
    pizza.crustType = crustType[yourCrustType];
    pizza.sauceType = sauceType[yourSauceType];
    pizza.cheese = cheese[yourCheese];
    pizza.toppings = toppings[yourToppings];
    return pizza;
}

var pizzaGiven1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
var pizzaGiven2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
var homeMadePizza= pizzaOven("crispy thin", "classico", ["blue cheese"], ["wagyo beef", "sausage", "Pineapple"]);

console.log("Here is your first pizza:");
console.log(pizzaGiven1);
console.log("Here is your second pizza:");
console.log(pizzaGiven2);
console.log("Here is your homemade pizza:");
console.log(homeMadePizza);
console.log("Here is your random pizza:");
console.log(randomPizza());
