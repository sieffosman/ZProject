document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navList = document.querySelector('.headerNavList');
  const navLinks = navList.querySelectorAll('a');

  hamburger.addEventListener('click', () => {
    navList.classList.toggle('active');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.forEach(link => link.classList.remove('active'));
      link.classList.add('active');
      navList.classList.remove('active'); // Close the dropdown after clicking a link
    });
  });

  // Underline the link corresponding to the current page
  const currentPage = window.location.pathname.split('/').pop();
  const currentLink = Array.from(navLinks).find(link => link.href.endsWith(currentPage));
  if (currentLink) {
    currentLink.classList.add('active');
  }

  // Close dropdown when clicking outside the nav-bar
  document.addEventListener('click', event => {
    const targetElement = event.target;
    if (!targetElement.closest('.headerNavList') && !targetElement.closest('.hamburger')) {
      navList.classList.remove('active');
    }
  });

  // Close dropdown on scroll
  window.addEventListener('scroll', () => {
    navList.classList.remove('active');
  });
});
