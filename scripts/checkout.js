import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { renderCheckoutHeader } from "./checkout/checkoutHeader.js";
import { loadProducts, loadProductsFetch } from "../data/products.js";
import { loadCart, loadCartFetch } from "../data/cart.js";
// import '../data/cart-class.js';

async function loadPage(){ 
  try {
    // throw 'error1';

    await Promise.all([
      loadProductsFetch(),
      loadCartFetch()
    ]);

  } catch (error) {
    console.log('Unexpected error. Please try again later');
  }

  renderCheckoutHeader();
  renderPaymentSummary();
  renderOrderSummary();
  renderPaymentSummary();
}
loadPage()

/*
Promise.all([
  loadProductsFetch(),
  new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  })

]).then((values) => {
  renderCheckoutHeader();
  renderPaymentSummary();
  renderOrderSummary();
  renderPaymentSummary();
});
*/
/*
loadProducts(() => {
  renderCheckoutHeader();
  renderOrderSummary();
  renderPaymentSummary();
});
*/