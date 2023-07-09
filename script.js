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

/*To make the site responsive*/
// Get the necessary elements
const mobileNav = document.querySelector('.mobile-nav');
const navBar = document.querySelector('.nav-bar');
const socialsContact = document.querySelector('.socials-contact-me');
const websiteTitle = document.querySelector('.titleWebsite')
const columnNav = document.querySelector('.column-nav');

// Add event listener to the bars icon
mobileNav.addEventListener('click', function () {
  // Toggle the 'active' class on mobileNav
  mobileNav.classList.toggle('active');
  
  // Toggle the display of navBar and socialsContact
  navBar.style.display = navBar.style.display === 'none' ? 'flex' : 'none';
  socialsContact.style.display = socialsContact.style.display === 'none' ? 'flex' : 'none';
  websiteTitle.style.display =  websiteTitle.style.display === 'none' ? 'flex' : 'none';
  
  // Toggle the display of columnNav- CHECK... use columnNav to help create a column/list when screen reduced?
  columnNav.style.display = columnNav.style.display === 'none' ? 'flex' : 'none';
});

