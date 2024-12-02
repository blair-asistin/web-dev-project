var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
});

document.querySelector('.warning-ex-btn button').addEventListener('click', () => {
  const warningContainer = document.querySelector('.warning-container');
  if (warningContainer) {
      warningContainer.remove();
  }
});