document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const NavList = document.querySelector('.headerNavList');
  const navLinkItems = Array.from(NavList.querySelectorAll('a'));

  hamburger.addEventListener('click', () => {
    NavList.classList.toggle('active');
  });

  navLinkItems.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      NavList.classList.remove('active');

      navLinkItems.forEach((item) => {
        item.classList.remove('active');
      });
      link.classList.add('active');
    });
  });
});
