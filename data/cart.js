export const cart = [];

export function addToCart(productId){
  let matchingItem;

  cart.forEach((CartItem) => {
    if (productId === CartItem.productId) {
      matchingItem = CartItem;
    }
  });

  const quantitySelector = document.querySelector(`.js-quantity-selector-${productId}`);
  const quantity = Number(quantitySelector.value);

  if (matchingItem) {
    matchingItem.quantity += quantity;
  } else {
    cart.push({
      productId,
      quantity: 1,
      quantity
    });
  }
}