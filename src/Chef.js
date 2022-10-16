

class Chef {
  constructor(name, restaurant) {
    this.name = name,
    this.restaurant = restaurant
  }


greetCustomer(customer, isMorning){
  
  if (isMorning) {
   return `Good morning, ${customer}!`
} else {
  // console.log(`Hello, ${customer}!`)
  return `Hello, ${customer}!`
}
}
checkForFood(foodItem) {
  if (this.restaurant.menus.breakfast.includes(foodItem) || 
  this.restaurant.menus.lunch.includes(foodItem) ||
  this.restaurant.menus.dinner.includes(foodItem)){
//need this. for CLASS
// || checks all 3 menus
    return `Yes, we're serving ${foodItem.name} today!`
  } else 
  return `Sorry, we aren't serving ${foodItem.name} today.`
}
}

module.exports = Chef;