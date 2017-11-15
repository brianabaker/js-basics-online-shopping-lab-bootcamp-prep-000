var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}
var itemPrice = Math.floor(Math.random()*100)

function addToCart(itemName){
  //create a new object from the item
  //item.
  var itemPrice = Math.floor(Math.random()*100)
  var newObj = { [itemName]: itemPrice};
  cart.push(newObj);
  console.log(`${[itemName]} has been added to your cart.`)
  return cart;
}
//<itemName> has been added to your cart.

// addToCart("pizza");
// addToCart("rubber bands");
// addToCart("doritos");

// function viewCart(){
//   loops over every item = for loop
//   prints out contents in one long sentence.
//   commas in between and a period at the end.
//   if empty PRINTS "Your shopping cart is empty."
// // }
//

function viewCart(){
  var line = "In your cart, you have "
  if (cart.length === 0){
    console.log("Your shopping cart is empty.")
  } else {
    for (var i = 0; i < cart.lenth; i++){
      for (var index in data[index]){
        line += ${cart[i]} at ${data[index]}
      }
    }

}
console.log(line);
}
}

  //
  // }else if (cart.length === 2){
  //   return `${itemName} at ${itemPrice}.`
  // } else if cart.
  // for (var i = 0; i < cart.length; i++){
  // `In your cart, you have ${itemName} at ${itemPrice} `
