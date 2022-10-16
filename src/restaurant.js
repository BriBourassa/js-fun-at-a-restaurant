

function createRestaurant(restaurantName){
  var restaurant = {
    name: restaurantName,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: []
    }
}
// console.log(restaurant);
return restaurant
};


function addMenuItem(restaurant, menuItem){
  if (menuItem.type === 'breakfast' && !restaurant.menus.breakfast.includes(menuItem)) {
    restaurant.menus.breakfast.push(menuItem)
  } else if (menuItem.type === 'lunch' && !restaurant.menus.lunch.includes(menuItem)) {
    restaurant.menus.lunch.push(menuItem)
  } else if (menuItem.type === 'dinner' && !restaurant.menus.dinner.includes(menuItem)) {
    restaurant.menus.dinner.push(menuItem)
  }
};
// !flippin the boolean
  


function removeMenuItem(restaurant, menuItem, type){
  for (var i = 0; i < menuItem.length; i++){
    if (menuItem === restaurant.menus[type[i].name]){
      restaurant.menuItem.splice([i], 1); 

      return `No one is eating our ${menuItem} - it has been removed from the ${type} menu!`
    } 
     else {
      return `Sorry, we don't sell ${menuItem}, try adding a new recipe!`
    }
  }
};




module.exports = {
  createRestaurant, 
  addMenuItem,
  removeMenuItem
}