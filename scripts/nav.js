document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".nav");
  const scrollThreshold = 200;
  let isScrollingDown = false;

  window.addEventListener("scroll", () => {
    const currentScrollTop = window.pageYOffset;

    if (currentScrollTop > scrollThreshold) {
      if (!isScrollingDown) {
        nav.classList.add("active");
        isScrollingDown = true;
      }
    } else {
      nav.classList.remove("active");
      isScrollingDown = false;
    }
  });
});


const dropdownWrapper = document.querySelector('.dropdown__wrapper');
const navDropdown = document.querySelector('.nav__dropdown');
const navBlackArrow = document.querySelector('.nav__black-arrow');

dropdownWrapper.addEventListener('click', () => {
  navDropdown.classList.toggle('active');
  navBlackArrow.classList.toggle('active');
});


const openSupportModals = document.querySelectorAll('#popup__open');
const closeSupportModals = document.querySelectorAll('#support__close');
const modalSupport = document.querySelector('.popup__support');  

openSupportModals.forEach((openSupportModal) => {
  openSupportModal.addEventListener('click', () => {
    modalSupport.classList.add('open');
    document.body.style.overflow = 'hidden';
  });
});

closeSupportModals.forEach((closeSupportModal) => {
  closeSupportModal.addEventListener('click', () => {
    modalSupport.classList.remove('open')
    document.body.style.overflow = 'visible';
  });
})

const supportSubmitBtn = document.querySelector('.popup__form');
const labelName = document.querySelector('.label__name');
const labelphone = document.querySelector('.label__phone');
const inputName = document.querySelector('.popup__name');
const inputPhone = document.querySelector('.popup__phone');
const customCheckbox = document.querySelector('.custom-checkbox');
const innerWrapper = document.querySelector('#success')
const popupSendWrapper = document.querySelector('.popup__send-wrapper');
const popupSuccessWrapper = document.querySelector('.popup-success__wrapper');

supportSubmitBtn.addEventListener('submit', (e) => {
  const inputNameValue = inputName.value.trim();
  const inputPhoneValue = inputPhone.value.trim();

  if (inputNameValue === '' || inputPhoneValue === '' || !customCheckbox.checked) {
    e.preventDefault();
    if (inputNameValue === '') {
      labelName.classList.add('hide');
      inputName.classList.add('wrong');
    }
    if (!customCheckbox.checked) {
      customCheckbox.classList.add('active');
    }
    if (inputPhoneValue === '') {
      labelphone.classList.add('hide');
      inputPhone.classList.add('wrong');
    }
  } else {
    e.preventDefault();
    labelphone.classList.remove('hide');
    labelName.classList.remove('hide');
    innerWrapper.classList.add('hide');
    popupSuccessWrapper.classList.remove('hide')
  }
});






const imageElement = document.getElementById("burger");
const navBurgerWrapper = document.querySelector('.nav__burger-wrapper')

let isImage1Visible = false;


imageElement.addEventListener("click",  () => {
    if (isImage1Visible) {
      imageElement.src = "img/icons/burger.svg";
      navBurgerWrapper.classList.remove('active');
    }
    if (!isImage1Visible) {
      navBurgerWrapper.classList.add('active')
      imageElement.src = "img/icons/close-menu.svg";
    }
    
    isImage1Visible = !isImage1Visible
});




const modalDelete = document.querySelector('.popup__burger'); 

navBurgerWrapper.addEventListener('click', () => {
  if(!modalDelete.classList.contains('open')) {
    modalDelete.classList.add('open');
    document.body.style.overflow = 'hidden';
  } else {
    modalDelete.classList.remove('open')
    document.body.style.overflow = 'visible';
  }
});


const burgerArrowWrapper = document.querySelector('.burger__arrow-wrapper');
const burgerDropdown = document.querySelector('.burger__dropdown');

burgerArrowWrapper.addEventListener('click', () => {
  burgerArrowWrapper.classList.toggle('active')
  burgerDropdown.classList.toggle('active');
})