/*
  The products variable holds the products data as JSON data
  with id, name, rating (stars & count), price in cents for
  decimal division and keywords
*/

import {cart} from '../data/cart.js';

/*
  Generate the product HTML components from above product
  JSON data to display in the element product-grid in the main 
  page
*/
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
    $${product.priceCents / 100}
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

let added_timeout_id = {};
cartButton.forEach((order) => {
  order.addEventListener("click", () => {
    //*1. Provide functionality of adding multiple items to the cart in an instance
    //Destructuring productId value into the variable

    const { productId } = order.dataset;
    //We access the select element using DOM
    const cart_items_added = document.querySelector(
      `.js-quantity-selector-${productId}`
    );
    //Number of items selected is explicitly coerced to number for operation later
    let cart_items_added_value = Number(cart_items_added.value);


    //*2. Appending items and their quantity into cart array
    

    let matchingItem;
    //ForEach loop matches the item added lately into the cart and if there exists an element already stored its value or else it is undefined
    cart.forEach((item) => {
      if (item.productId === productId) matchingItem = item;
    });

    //Ternary operator to check if the item already exists in the cart
    //so that the quantity gets added up from existing value or else
    //the number of items selected to be add to the cart is chosen
    matchingItem
      ? (matchingItem.quantity += cart_items_added_value)
      : cart.push({ productId, quantity: cart_items_added_value });

    console.log(cart);
    //To display the no of items added to the cart on the cart element
    //in the top right corner we have to use accumulator pattern to
    //sum up the quantities of items in cart

    //*3. Modify the cart button in top right corner to be dynamic
    let cartQuantity = 0;
    cart.forEach((items) => {
      cartQuantity += items.quantity;
    });

    const no_of_cart_items = document.querySelector(".cart-items");

    no_of_cart_items.innerHTML = cartQuantity;

    //*4. Display added message on clicking add to click
    const added = document.querySelector(
      `.js-add-to-cart-${productId}`
    );

    added.classList.add("js-added-to-cart");

    if (added_timeout_id[productId]) clearTimeout(added_timeout_id[productId]);
    added_timeout_id[productId] = setTimeout(() => {
      added.classList.remove("js-added-to-cart");
    }, 2000);
  });
});
