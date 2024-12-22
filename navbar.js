window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  const navContainer = document.querySelector(".nav-container"); // Use class selector
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    navContainer.style.top = "0"; // Shows the navbar when scrolling down
  } else {
    navContainer.style.top = "0px"; // Hides the navbar when at the top
  }
}
