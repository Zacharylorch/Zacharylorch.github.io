document.addEventListener('DOMContentLoaded', function () {
  let currentPage = window.location.pathname; // Get current page path
  let links = document.querySelectorAll('.nav-bar ul li a'); // Select all navigation links

  links.forEach(function (link) {
    if (currentPage.includes(link.getAttribute('href'))) {
      // Check if link matches current page
      link.parentElement.classList.add('active'); // Add 'active' class to the parent li element
    }
  });
});
