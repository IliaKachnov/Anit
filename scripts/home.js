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
    depth: 0,
    modifier: 0,
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

const elementToAddClass = document.querySelector('.screen');
function addClassOnScroll() {

  const scrollY = window.scrollY || window.pageYOffset;
  if (scrollY >= 1000) {
    elementToAddClass.classList.add('active');
  } else {
    elementToAddClass.classList.remove('active');
  }
}

window.addEventListener('scroll', addClassOnScroll);


const swiper1 = new Swiper(".mySwiper1", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
const cookieWrapper = document.querySelector('.cookie__wrapper');
cookieWrapper.addEventListener('click', () => {
  cookieWrapper.classList.add('hide');
})