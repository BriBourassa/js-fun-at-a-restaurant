

function nameMenuItem(food) {
  console.log(`Delicious ${food}`)
  return `Delicious ${food}`
};

function createMenuItem(name, price, type) {
  var menuItem = {
    name: "Delicious French Toast",
    price: 10.99,
    type: "breakfast"
  }
  console.log(menuItem);
  return menuItem
};

function addIngredients(food) {
  var ingredients = []
  addIngredients = ingredients.push("cheese")
  ingredients.push(food)

  console.log(ingredients);
  return ingredients.push("cheese")
}


module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  // formatPrice,
  // decreasePrice,
  // createRecipe
}


