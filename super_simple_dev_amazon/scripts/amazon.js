/*
  The products variable holds the products data as JSON data
  with id, name, rating (stars & count), price in cents for
  decimal division and keywords
*/

import { cart, addToCart } from "../data/cart.js";
import { products } from "../data/products.js";
import { calculateCartItemsQuantity } from "./utils/calculateCartQuantity.js";
import { formatCurrency } from "./utils/currency.js";
/*
  Generate the product HTML components from above product
  JSON data to display in the element product-grid in the main 
  page
*/

updateCartQuantity();

const product_display = document.querySelector(".js-products");

let items = "";

//Iterate over the products data

products.forEach((product) => {
  //Using accumulator pattern, we store all the product data in
  //items and display using innerHTML

  items += `<div class="product-container">
  <div class="product-image-container">
    <img class="product-image"
      src="${product.image}">
  </div>

  <div class="product-name limit-text-to-2-lines">
    ${product.name}
  </div>

  <div class="product-rating-container">
    <img class="product-rating-stars"
      src="images/ratings/rating-${product.rating.stars * 10}.png">
    <div class="product-rating-count link-primary">
      ${product.rating.count}
    </div>
  </div>

  <div class="product-price">
    $${formatCurrency(product.priceCents)}
  </div>

  <div class="product-quantity-container">
    <select class="js-quantity-selector-${product.id}">
      <option selected value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
      <option value="10">10</option>
    </select>
  </div>

  <div class="product-spacer"></div>

  <div class="added-to-cart js-add-to-cart-${product.id}">
    <img src="images/icons/checkmark.png">
    Added
  </div>

  <button class="add-to-cart-button button-primary js-add-to-cart" data-product-id="${
    product.id
  }">
    Add to Cart
  </button>
</div>`;
});
// The products are displayed here
product_display.innerHTML = items;

//The cart button for all products should have click event with
// functionality to be appended to cart array

const cartButton = document.querySelectorAll(".js-add-to-cart");

//For each cart button that has been clicked is recorded using
//addEventlistener and that specific product is checked if it exists
//in the cart to append into the cart array or else just increase
//the quantity of the existing item

// Adding interactivity to the Add to Cart button**

//*2. Modify the cart button in top right corner to be dynamic
function updateCartQuantity() {
  //To display the no of items added to the cart on the cart element
  //in the top right corner we have to use accumulator pattern to
  //sum up the quantities of items in cart

  const cartItemsQuantity = calculateCartItemsQuantity(cart);

  const no_of_cart_items = document.querySelector(".cart-items");

  no_of_cart_items.innerHTML = cartItemsQuantity;
}

//*3. Display added popup message on clicking add to click
let added_timeout_id = {};
function addedToCart_popup(productId) {
  const added = document.querySelector(`.js-add-to-cart-${productId}`);

  added.classList.add("js-added-to-cart");

  if (added_timeout_id[productId]) clearTimeout(added_timeout_id[productId]);
  added_timeout_id[productId] = setTimeout(() => {
    added.classList.remove("js-added-to-cart");
  }, 2000);
}

cartButton.forEach((order) => {
  order.addEventListener("click", () => {
    //Destructuring productId value into the variable
    const { productId } = order.dataset;

    //The function is located in the /data/cart.js file since it is concerned about the cart whereas the updateCartQuantity() is located in this file since it is concerned about the cart button and addToCart_popup() deals with the webpage itself
    addToCart(productId);

    updateCartQuantity();

    addedToCart_popup(productId);
  });
});
