const cloudBtn = document.querySelector('.cloud__btn');

const includeMake = document.querySelector('.include__make');

if (window.innerWidth <= 760) {
  includeMake.textContent = 'Записаться на демонстрацию';
}

if (window.innerWidth <= 760) {
  cloudBtn.textContent = 'Бесплатная консультация';
}