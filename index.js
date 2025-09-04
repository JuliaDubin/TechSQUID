/* Hamburger menu toggle effect */

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// Get the current page's filename from the URL
// Example: "/pages/programs.html" → "programs.html"
const currentPage = window.location.pathname.split("/").pop();

// Select all <a> elements inside your main navigation
const navLink = document.querySelectorAll(".nav-menu a");

// Loop through each link in the navigation
navLink.forEach(link => {
  // Get the value of the href attribute (e.g., "./pages/about.html")
  const href = link.getAttribute("href");

  // Extract just the filename from the href
  // Example: "./pages/about.html" → "about.html"
  const linkPage = href.split("/").pop();

  // Compare the link filename with the current page filename
  // Also handle the case where the homepage is accessed as just "/"
  if (linkPage === currentPage || (linkPage === "index.html" && currentPage === "")) {
    // If it matches, add the "active" class to this link
    link.classList.add("active");
  }
});

/* Closing the Alert Bar */

document.addEventListener("DOMContentLoaded", function () {
  const alertBar = document.getElementById("alertBar");
  const closeBtn = document.getElementById("closeAlertBtn");

  if (alertBar && closeBtn) {
      closeBtn.addEventListener("click", function () {
          alertBar.style.display = "none";
      });
  }
});


/* ===== Modal images ====== */

// Elements
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');
const closeBtn = document.getElementById('closeModal');

// Attach click to every thumbnail
document.querySelectorAll('.thumbnail').forEach(img => {
  img.addEventListener('click', () => {
    modalImg.src = img.src;   // or img.dataset.large if you add one
    modalImg.alt = img.alt || '';
    modal.style.display = 'flex';
  });
});

document.querySelectorAll('.box').forEach(img => {
    img.addEventListener('click', () => {
      modalImg.src = img.src;   // or img.dataset.large if you add one
      modalImg.alt = img.alt || '';
      modal.style.display = 'flex';
    });
  });

// Close on X
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
  modalImg.removeAttribute('src'); // optional cleanup
  modalImg.alt = '';
});

// Close when clicking the dark backdrop (outside the image)
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
    modalImg.removeAttribute('src');
    modalImg.alt = '';
  }
});

// Close on Esc
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.style.display === 'flex') {
    modal.style.display = 'none';
    modalImg.removeAttribute('src');
    modalImg.alt = '';
  }
});