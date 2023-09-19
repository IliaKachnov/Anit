const cloudBtn = document.querySelector('.cloud__btn');
const resultItemTexts = document.querySelectorAll('.result__item-text');
const includeMake = document.querySelector('.include__make');
const contactBtn = document.querySelector('.contact__btn');

if (window.innerWidth <= 580) {
  resultItemTexts.forEach((resultItemText) => {
    resultItemText.textContent = 'Техническое обслуживание вашего сервера';
  })
}

if (window.innerWidth <= 760) {
  includeMake.textContent = 'Записаться на демонстрацию';
}

if (window.innerWidth <= 760) {
  cloudBtn.textContent = 'Записаться';
}

if (window.innerWidth <= 580) {
  contactBtn.textContent = 'Записаться на бесплатный аудит'
}