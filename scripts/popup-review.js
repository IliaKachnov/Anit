// const openReviewModals = document.querySelectorAll('#popup__open-review');
// const closeReviewModal = document.getElementById('review__close');
// const modalReview = document.querySelector('.popup__review');  

// openReviewModals.forEach((openReviewModal) => {
//   openReviewModal.addEventListener('click', () => {
//     modalReview.classList.add('open');
//     document.body.style.overflow = 'hidden';
//   });
// });

// closeReviewModal.addEventListener('click', () => {
//   modalReview.classList.remove('open')
//   document.body.style.overflow = 'visible';
// });
const openNameModal = document.getElementById('popup__open-review');
const closeNameModal = document.querySelector('.popup__image-wrapper');
const modalName = document.querySelector('.popup__name');

openNameModal.addEventListener('click', () => {
  modalName.classList.add('open');
  document.body.style.overflow = 'hidden';
});
closeNameModal.addEventListener('click', () => {
  modalName.classList.remove('open')
  document.body.style.overflow = 'visible';
});
