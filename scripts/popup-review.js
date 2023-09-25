const openReviewModals = document.querySelectorAll('#popup__review');
const closeNameModals = document.querySelectorAll('.popup__image-wrapper');
const modalReview = document.querySelector('#popup__review-body');



openReviewModals.forEach((openReviewModal) => {
  openReviewModal.addEventListener('click', () => {
    modalReview.classList.add('open');
    document.body.style.overflow = 'hidden';
  });
});

closeNameModals.forEach((closeNameModal) => {
  closeNameModal.addEventListener('click', () => {
    modalReview.classList.remove('open')
    document.body.style.overflow = 'visible';
  });  
})


const letterImg = document.querySelector('.letter__img');
const imgFullscreenWrapper = document.querySelector('.img__fullscreen-wrapper');
const crestFull = document.querySelector('.crest__full');


letterImg.addEventListener('click', () => {
  imgFullscreenWrapper.classList.remove('hide');
})
crestFull.addEventListener('click', () => {
  imgFullscreenWrapper.classList.add('hide');
})