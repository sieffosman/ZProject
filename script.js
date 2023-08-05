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
    });
  });

  // Underline the link corresponding to the current page
  const currentPage = window.location.pathname.split('/').pop();
  const currentLink = Array.from(navLinks).find(link => link.href.endsWith(currentPage));
  if (currentLink) {
    currentLink.classList.add('active');
  }
});
