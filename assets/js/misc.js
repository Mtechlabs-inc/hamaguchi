// Import jQuery
import $ from "jquery";
import "jquery-match-height";

// Add a body class once page has loaded
(function () {
  // Add a body class once page has loaded
  // Used to add CSS transitions to elems
  // and avoids content shifting during page load
  window.addEventListener("load", function () {
    document.body.classList.add("page-loaded");
  });
})();

document.addEventListener("DOMContentLoaded", function () {
  $(".icon-wrapper").matchHeight();
  $(".text-title").matchHeight();

  const scrollToTopButton = document.getElementById("scrollToTop");
    scrollToTopButton.addEventListener("click", function(event) {
        event.preventDefault();
        // Scroll to the top of the page smoothly
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
  
});
