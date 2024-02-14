function createMeal(name, specialRequests, tableNumber) {
  return { name, specialRequests, tableNumber, complete: false }
}

function getMade(meal) {
  meal.complete = true;
  return meal;
}

function announceMeal(meal) {
  const COMPLETE_STRING = `Order up - ${meal.name} for table ${meal.tableNumber}!`
  const INCOMPLETE_STRING = `This ${meal.name} is not completed yet`

  if (meal.complete) return COMPLETE_STRING;
  return INCOMPLETE_STRING;
}

function createOrder(order) {
  return {
    tableNumber: order.name,
    meals: order.meals,
    completedMeals: []
  }
}

function cookMeal(order, meal) {  
  if (order.tableNumber === meal.tableNumber) order.completedMeals.push(meal.name);
  return order;
}

function listOrders(orders) {
  let orderList = [];
  orders.meals.forEach((meal) => orderList.push(meal.name));
  return orderList;
}

function listSpecialRequests(order) {
  let specialRequests = [];
  order.meals.forEach((meal) => { 
    specialRequests = specialRequests.concat(meal.specialRequests);
  });
  return specialRequests;
}

module.exports = { 
  createMeal, 
  getMade, 
  announceMeal,
  createOrder, 
  cookMeal, 
  listOrders, 
  listSpecialRequests
};
