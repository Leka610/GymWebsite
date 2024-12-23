function loadAbout() {
  // Check if the About content is already loaded
  if (document.getElementById("about-us")) {
    console.log("About content already loaded");
    return; // If About content is already loaded, do nothing
  }

  // Hide the content of the index.html page (main content except the navbar)
  const mainContent = document.getElementById("main-content");
  if (mainContent) {
    mainContent.style.display = "none"; // Hide the main content section
  }

  // Fetch the about.html content
  fetch("about.html")
    .then((response) => response.text())
    .then((data) => {
      // Create a div element to hold the About content
      const aboutContainer = document.createElement("div");
      aboutContainer.innerHTML = data;

      // Add a class or ID to the container element to control the styling
      aboutContainer.classList.add("about-page");

      // Insert the About content right after the navbar
      const navbar = document.querySelector("header");
      navbar.insertAdjacentElement("afterend", aboutContainer);

      // Dynamically load the about.css file
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "about.css"; // Path to your about.css file
      document.head.appendChild(link);
    })
    .catch((error) => {
      console.error("Error loading About page:", error);
    });
}
