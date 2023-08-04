document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const NavList = document.querySelector('.headerNavList');
  const navLinkItems = Array.from(NavList.querySelectorAll('a'));

  hamburger.addEventListener('click', () => {
    console.log('Hamburger clicked!');
    NavList.classList.toggle('active');
  });

  navLinkItems.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      navLinkItems.forEach((item) => {
        item.classList.remove('active');
      });
      link.classList.add('active');
    });
  });

  // Close dropdown when clicking outside the nav-bar
  document.addEventListener('click', (event) => {
    const targetElement = event.target;
    if (!targetElement.closest('.headerNavList') && !targetElement.closest('.hamburger')) {
      NavList.classList.remove('active');
    }
  });

  // Close dropdown on scroll
  window.addEventListener('scroll', () => {
    NavList.classList.remove('active');
  });
});
