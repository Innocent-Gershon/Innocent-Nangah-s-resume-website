// Toggle navbar on mobile devices
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Handle navigation links
const navigationLinks = document.querySelectorAll('.nav-links a');
const contentSections = document.querySelectorAll('.section');

navigationLinks.forEach((link, index) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    toggleActiveSection(index);
    navLinks.classList.remove('show');
    scrollToTop();
  });
});

// Toggle active section
function toggleActiveSection(index) {
  contentSections.forEach((section, i) => {
    if (i === index) {
      section.style.display = 'block';
    } else {
      section.style.display = 'none';
    }
  });
}

// Scroll to top function
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Modal functionality
const downloadBtn = document.getElementById('download-btn');
const modal = document.getElementById('modal');
const closeModal = document.getElementsByClassName('close-modal')[0];

downloadBtn.addEventListener('click', () => {
  modal.style.display = 'block';
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
});