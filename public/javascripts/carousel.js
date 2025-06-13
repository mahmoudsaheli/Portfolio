document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.querySelector('.organization-carousel');
  const leftBtn = document.querySelector('.left-arrow');
  const rightBtn = document.querySelector('.right-arrow');
  const dotsContainer = document.querySelector('.carousel-dots');

  if (!carousel || !leftBtn || !rightBtn || !dotsContainer) return;

  const cardWidth = carousel.querySelector('.organization-card')?.offsetWidth + 16 || 216;
  const totalCards = carousel.children.length;
  const visibleCards = Math.floor(carousel.offsetWidth / cardWidth);
  const dotsCount = totalCards - visibleCards + 1;

  let currentIndex = 0;

  
  for (let i = 0; i < dotsCount; i++) {
    const dot = document.createElement('div');
    dot.classList.add('carousel-dot');
    if (i === 0) dot.classList.add('active');
    dot.dataset.index = i;
    dotsContainer.appendChild(dot);
  }

  const dots = dotsContainer.querySelectorAll('.carousel-dot');

  function updateDots(index) {
    dots.forEach(dot => dot.classList.remove('active'));
    if (dots[index]) dots[index].classList.add('active');
  }

  function scrollToIndex(index) {
    currentIndex = Math.min(Math.max(index, 0), dotsCount - 1);
    carousel.scrollTo({ left: currentIndex * cardWidth, behavior: 'smooth' });
    updateDots(currentIndex);
  }

  rightBtn.addEventListener('click', () => scrollToIndex(currentIndex + 1));
  leftBtn.addEventListener('click', () => scrollToIndex(currentIndex - 1));
  dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
      scrollToIndex(parseInt(e.target.dataset.index));
    });
  });


  setInterval(() => {
    scrollToIndex((currentIndex + 1) % dotsCount);
  }, 5000);
});
