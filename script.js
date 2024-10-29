// JavaScript for Active Link Indicator based on URL
document.addEventListener("DOMContentLoaded", () => {
  // Get the current page's filename
  const currentPage = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll("nav ul li a");

  navLinks.forEach(link => {
      // Check if the link's href matches the current page
      if (link.getAttribute("href") === currentPage) {
          link.classList.add("active");
      } else {
          link.classList.remove("active");
      }
  });
});

