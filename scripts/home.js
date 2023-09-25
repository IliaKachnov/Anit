const acc = document.getElementsByClassName("accordion");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    const panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
      panel.classList.remove('active');
    } else {
      panel.classList.add('active');
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

const swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  effect: 'coverflow',
  coverflowEffect: {
    rotate: 0,
    slideShadows: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
  },
});



const btnNextFirst = document.querySelector('#next-first');
const prevBtnSecond = document.querySelector('#prev-btn-second');
const nextBtnSecond = document.querySelector('#next-btn-third')
const prevBtnThird = document.querySelector('#prev-btn-third');

const reviewItemFirst = document.querySelector('.review__item.first');
const reviewItemSecond = document.querySelector('.review__item.second');
const reviewItemThird = document.querySelector('.review__item.third');


btnNextFirst.addEventListener('click', () => {
  reviewItemFirst.classList.add('hide');
  reviewItemSecond.classList.remove('hide')
})

prevBtnSecond.addEventListener('click', () => {
  reviewItemFirst.classList.remove('hide');
  reviewItemSecond.classList.add('hide')
})

nextBtnSecond.addEventListener('click', () => {
  reviewItemSecond.classList.add('hide');
  reviewItemThird.classList.remove('hide');
})

prevBtnThird.addEventListener('click', () => {
  reviewItemSecond.classList.remove('hide');
  reviewItemThird.classList.add('hide');
})


const elementToAddClass = document.querySelector('.screen');

// Функция, которая будет вызываться при прокрутке страницы
function addClassOnScroll() {
  // Получаем текущую позицию прокрутки страницы
  const scrollY = window.scrollY || window.pageYOffset;

  // Проверяем, прокручена ли страница на 1000px вниз
  if (scrollY >= 1000) {
    // Если да, добавляем класс к элементу
    elementToAddClass.classList.add('active');
  } else {
    // В противном случае, удаляем класс (если он был добавлен ранее)
    elementToAddClass.classList.remove('active');
  }
}

// Добавляем слушатель события прокрутки страницы
window.addEventListener('scroll', addClassOnScroll);