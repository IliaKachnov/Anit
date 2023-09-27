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

const tableUserWrapper = document.querySelector('.prices__item-users-wrapper.second');
const tableDropdown = document.querySelector('.table__dropdown');
const tableUserAmount = document.querySelector('.prices__item-amount.second');
const tableUserArrow = document.querySelector('.arrow-dropdown');

tableUserWrapper.addEventListener('click', () => {
  tableDropdown.classList.toggle('active');
  tableUserArrow.classList.toggle('active');
});

const dropdownUsers = document.querySelectorAll('.table__dropdown-users');
dropdownUsers.forEach((userElement) => {
  userElement.addEventListener('click', () => {
    const userText = userElement.textContent;
    const userAmount = parseInt(userText.match(/\d+/)[0]);
    tableUserAmount.textContent = userAmount;

    
  });
});