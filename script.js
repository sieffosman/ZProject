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

//END OF NAV BAR CODE

//music code
const musicToggle = document.getElementById("music-toggle");
const icon = document.getElementById("icon");
let audio = document.getElementById("background-music"); // Assuming your audio element has this ID
let musicPlaying = false;

// Function to toggle music and icon
function toggleMusic() {
    if (musicPlaying) {
        // Pause music
        audio.pause();
        icon.textContent = "volume_up"; // Change text content to "volume_up"
    } else {
        // Play music
        audio.play();
        icon.textContent = "volume_off"; // Change text content to "volume_off"
    }
    musicPlaying = !musicPlaying;
}

// Event listener for click on the button
musicToggle.addEventListener("click", toggleMusic);


//To drag music button
let isDragging = false;
let offsetX, offsetY;

// Function to start dragging
function startDragging(e) {
    isDragging = true;
    offsetX = e.clientX - musicToggle.getBoundingClientRect().left;
    offsetY = e.clientY - musicToggle.getBoundingClientRect().top;
    musicToggle.style.cursor = "grabbing"; // Change cursor to grabbing hand
}

// Function to stop dragging
function stopDragging() {
    isDragging = false;
    musicToggle.style.cursor = "grab";
}

// Function to move the button while dragging
function dragButton(e) {
    if (!isDragging) return;
    const x = e.clientX - offsetX;
    const y = e.clientY - offsetY;
    musicToggle.style.left = `${x}px`;
    musicToggle.style.top = `${y}px`;
}

// Event listeners for mouse interactions
musicToggle.addEventListener("mousedown", startDragging);
window.addEventListener("mousemove", dragButton);
window.addEventListener("mouseup", stopDragging);
















