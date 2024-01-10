export let cart = JSON.parse(localStorage.getItem("cart")) || [];

//*1. Appending items and their selected quantity into cart array
function saveStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

export function addToCart(productId) {
  //We access the select element using DOM
  const cart_items_added = document.querySelector(
    `.js-quantity-selector-${productId}`
  );
  //Number of items selected is explicitly coerced to number for operation later
  const cart_items_added_value = Number(cart_items_added.value);

  const matchingItem = cart.find(
    (cartItem) => cartItem.productId === productId
  );

  //Ternary operator to check if the item already exists in the cart
  //so that the quantity gets added up from existing value or else
  //the number of items selected to be add to the cart is chosen
  matchingItem
    ? (matchingItem.quantity += cart_items_added_value)
    : cart.push({ productId, quantity: cart_items_added_value });

  saveStorage();
}

export function updateCartAfterDelete(productId) {
  cart = cart.filter((cartItem) => cartItem.productId != productId);
  saveStorage();
}

export function updateCartQuantity(productId, newQuantity) {
  const matchingItem = cart.find(
    (cartItem) => cartItem.productId === productId
  );

  matchingItem.quantity = newQuantity;

  saveStorage;
}
