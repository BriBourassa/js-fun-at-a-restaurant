

function nameMenuItem(food) {
  // console.log(`Delicious ${food}`)
  return `Delicious ${food}`
};

//---------------------------------------

function createMenuItem(name, price, type) {
  var menuItem = {
    name: `${name}`,
    price: `${price}`,
    type: `${type}`
  }
  // console.log(menuItem);
  return menuItem
};

//---------------------------------------

function addIngredients(newIngredients, food) { 
  if (!food.includes(newIngredients)) {
  food.push(newIngredients);
  // console.log(food);
    } else {
  // console.log(food);
} 
};

//---------------------------------------

function formatPrice(price){
// console.log("add dollar sign in front of price", `$${price}`)
return `$${price}`
};

//---------------------------------------

function decreasePrice(menuItem){
// console.log(menuItem.price * .9)
return menuItem.price * .9
};

//---------------------------------------

function createRecipe(title, ingredients, type){
  var recipe = {
    title: title,
    ingredients: ingredients,
    type: type
  }
  return recipe
};



module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}


