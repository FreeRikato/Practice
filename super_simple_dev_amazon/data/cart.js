export const cart = [];

//*1. Appending items and their selected quantity into cart array

export function addToCart(productId){

    //We access the select element using DOM
    const cart_items_added = document.querySelector(
    `.js-quantity-selector-${productId}`
    );
    //Number of items selected is explicitly coerced to number for operation later
    let cart_items_added_value = Number(cart_items_added.value);
  
    let matchingItem;
    //ForEach loop matches the item added lately into the cart and if there exists an element already stored its value or else it is undefined
    cart.forEach((cartItem) => {
      if (cartItem.productId === productId) matchingItem = cartItem;
    });
  
    //Ternary operator to check if the item already exists in the cart
    //so that the quantity gets added up from existing value or else
    //the number of items selected to be add to the cart is chosen
    matchingItem
      ? (matchingItem.quantity += cart_items_added_value)
      : cart.push({ productId, quantity: cart_items_added_value });
  
    console.log(cart);
  }