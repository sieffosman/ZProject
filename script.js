const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const logoContainer = document.querySelector('.logo-container');

const scrollStep = 200; // Adjust the value to control the scroll distance
let scrollAmount = 0;
let logoCount = logoContainer.childElementCount; // Number of logos
let clickCount = 0;

prevBtn.addEventListener('click', () => {
  clickCount--;
  scrollAmount += scrollStep;
  logoContainer.style.transform = `translateX(${scrollAmount}px)`;

  if (clickCount < 0) {
    clickCount = logoCount - 1;
    scrollAmount = -(logoCount * scrollStep);
    logoContainer.style.transform = `translateX(${scrollAmount}px)`;
  }
});

nextBtn.addEventListener('click', () => {
  clickCount++;
  scrollAmount -= scrollStep;
  logoContainer.style.transform = `translateX(${scrollAmount}px)`;

  if (clickCount >= (logoCount-5)) {
    clickCount = 0;
    scrollAmount = 0;
    logoContainer.style.transform = `translateX(${scrollAmount}px)`;
  }
});
