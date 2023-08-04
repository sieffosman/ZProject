document.addEventListener('DOMContentLoaded', () => {
  const NavList = document.querySelector('.headerNavList');
  const navLinkItems = Array.from(NavList.querySelectorAll('a'));

  // Function to set the active link
  function setActiveLink() {
    const currentPage = window.location.pathname.split('/').pop();
    navLinkItems.forEach((link) => {
      const linkPage = link.href.split('/').pop();
      if (currentPage === linkPage) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  // Set the active link on page load
  setActiveLink();

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
