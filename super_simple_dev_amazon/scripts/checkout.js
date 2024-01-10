import {
  cart,
  updateCartAfterDelete,
  updateCartQuantity,
} from "../data/cart.js";
import { products } from "../data/products.js";
import { calculateCartItemsQuantity } from "./utils/calculateCartQuantity.js";
import { formatCurrency } from "./utils/currency.js";

let items = "";

cart.forEach((cartItem) => {
  let matchingProduct;
  products.forEach((product) => {
    if (product.id === cartItem.productId) matchingProduct = product;
  });

  items += `
        <div class="cart-item-container js-cart-item-container-${
          matchingProduct.id
        }">
        <div class="delivery-date">
        Delivery date: Tuesday, June 21
        </div>

        <div class="cart-item-details-grid">
        <img class="product-image"
            src="${matchingProduct.image}">

        <div class="cart-item-details">
            <div class="product-name">
            ${matchingProduct.name}
            </div>
            <div class="product-price">
            $${formatCurrency(matchingProduct.priceCents)}
            </div>
            <div class="product-quantity">
            <span>
                Quantity: <span class="quantity-label js-quantity-label-${
                  cartItem.productId
                }">${cartItem.quantity}</span>
            </span>
            <span class="update-quantity-link link-primary js-update-quantity" data-product-id = "${
              cartItem.productId
            }">
                Update
            </span>
            <input class = "quantity-input js-quantity-input-${
              cartItem.productId
            }">
            <span class = "save-quantity-link link-primary js-save-quantity-link-${
              cartItem.productId
            }">Save</span>
            <span class="delete-quantity-link link-primary js-delete-link" data-product-id="${
              cartItem.productId
            }">
                Delete
            </span>
            </div>
        </div>

        <div class="delivery-options">
            <div class="delivery-options-title">
            Choose a delivery option:
            </div>
            <div class="delivery-option">
            <input type="radio" checked
                class="delivery-option-input"
                name="delivery-option-${cartItem.productId}">
            <div>
                <div class="delivery-option-date">
                Tuesday, June 21
                </div>
                <div class="delivery-option-price">
                FREE Shipping
                </div>
            </div>
            </div>
            <div class="delivery-option">
            <input type="radio"
                class="delivery-option-input"
                name="delivery-option-${cartItem.productId}">
            <div>
                <div class="delivery-option-date">
                Wednesday, June 15
                </div>
                <div class="delivery-option-price">
                $4.99 - Shipping
                </div>
            </div>
            </div>
            <div class="delivery-option">
            <input type="radio"
                class="delivery-option-input"
                name="delivery-option-${cartItem.productId}">
            <div>
                <div class="delivery-option-date">
                Monday, June 13
                </div>
                <div class="delivery-option-price">
                $9.99 - Shipping
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
    `;
});

document.querySelector(".js-order-summary").innerHTML = items;

function updateCartHeaderMiddleSection() {
  const checkoutCartQuantity = document.querySelector(
    ".js-checkout-header-middle-section"
  );

  checkoutCartQuantity.innerHTML = `Checkout (<a class="return-to-home-link js-return-to-home"
        href="amazon.html">${calculateCartItemsQuantity(cart)}</a>)`;
}

updateCartHeaderMiddleSection();

document.querySelectorAll(".js-delete-link").forEach((deleteButton) => {
  deleteButton.addEventListener("click", () => {
    const { productId } = deleteButton.dataset;

    updateCartAfterDelete(productId);
    updateCartHeaderMiddleSection();

    document.querySelector(`.js-cart-item-container-${productId}`).remove();
  });
});

document.querySelectorAll(".js-update-quantity").forEach((updateButton) => {
  const { productId } = updateButton.dataset;
  const updateProduct = document.querySelector(
    `.js-cart-item-container-${productId}`
  );
  const updateValue = document.querySelector(`.js-quantity-input-${productId}`);
  const saveButton = document.querySelector(
    `.js-save-quantity-link-${productId}`
  );

  updateButton.addEventListener("click", () => {
    updateProduct.classList.toggle("is-editing-quantity");

    saveButton.addEventListener("click", () => {
      if (updateProduct.classList.contains("is-editing-quantity")) {
        updateCartQuantity(productId, Number(updateValue.value));
        updateProduct.classList.remove("is-editing-quantity");
        document.querySelector(`.js-quantity-label-${productId}`).innerText =
          updateValue.value;
        updateCartHeaderMiddleSection();
        console.log(cart);
      }
    });
  });
});
