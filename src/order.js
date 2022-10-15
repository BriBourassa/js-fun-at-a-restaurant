

// function takeOrder(orderNumber, item, price, orderType, status){
//   var newOrder = {
//     orderNumber: orderNumber,
//     item: item,
//     price: price,
//     orderType: orderType,
//     status: status
//   };
// takeOrder = newOrder;
// console.log(newOrder);
// return newOrder
// }

function takeOrder(newOrder, deliveryOrders){
  if (deliveryOrders.length < 3) {
  return deliveryOrders.push(newOrder)
} else {
  return
}
}

function refundOrder(orderNum, deliveryOrders) {
  //orderNum = argument, deliveryOrders = array
  for (var i = 0; i < deliveryOrders.length; i++) {
    if (deliveryOrders[i].orderNumber === orderNum) {
      deliveryOrders.splice([i], 1);
  //deliveryOrders[i].ordernumber is looping through array
  //dot notation specifically pulls value
  // .splice([i], 1); means it splices 1 value
    }
  }
}

function listItems(deliveryOrders){
  var itemNames = []
  for (var i = 0; i < deliveryOrders.length; i++) {
    itemNames.push(deliveryOrders[i].item)
//made new array, adding values
  }
  console.log(itemNames.join(`, `));
  return itemNames.join(`, `)
// .join takes OUT OF array and joins them as one string
}

// not a super great grasp on this one ^^^


function searchOrder(deliveryOrders, orderItemName){
  for (var i =0; i < deliveryOrders.length; i++) {
    if (deliveryOrders[i].item.includes(orderItemName)) { 
      // console.log(deliveryOrders[i].includes.orderItemName)
      // deliveryOrders[i].item.includes(orderItemName)
      console.log(deliveryOrders[i].item.includes(orderItemName));
    return true
  } 
}
return false
}


module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}