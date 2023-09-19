const pricesOrderPrice = document.querySelector('.prices__order-price');
const pricesOrders = document.querySelectorAll('.prices__price');

if (window.innerWidth <= 730) {
  pricesOrderPrice.classList.add('hide');
}

pricesOrders.forEach((pricesOrder) => {
  if (window.innerWidth <= 730) {
    pricesOrder.textContent = '14 900 ₽/мес';
  }
})