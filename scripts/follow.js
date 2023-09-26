const clientsTitle = document.querySelector('.clients__title');

if (window.innerWidth < 1300) {
  clientsTitle.textContent = 'Отзывы наших клиентов';
}

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



const filterItems = document.querySelectorAll('.plans__filter');

filterItems.forEach((filterItem) => {
  filterItem.addEventListener('click', function () {
    filterItems.forEach((item) => {
      item.classList.remove('active');
    });
    this.classList.add('active');
  });
});



const swiper1 = new Swiper(".mySwiper1", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});



const openFixModals = document.querySelectorAll('#popup__open-fix');
const closeFixModals = document.querySelectorAll('#support__close-fix');
const modalFix = document.querySelector('.popup__support-fix'); 

openFixModals.forEach((openFixModal) => {
  openFixModal.addEventListener('click', () => {
    modalFix.classList.add('open');
    document.body.style.overflow = 'hidden';
  });
});

closeFixModals.forEach((closeFixModal) => {
  closeFixModal.addEventListener('click', () => {
    modalFix.classList.remove('open')
    document.body.style.overflow = 'visible';
  });
})