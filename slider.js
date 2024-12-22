const videoItems = document.querySelectorAll(".video-item");
const videoModal = document.getElementById("videoModal");
const modalVideo = document.getElementById("modalVideo");
const closeBtn = document.getElementById("closeBtn");

// Open the modal when a video item is clicked
videoItems.forEach((item) => {
  item.addEventListener("click", () => {
    const videoSrc = item.getAttribute("data-video");
    modalVideo.src = videoSrc;
    videoModal.style.display = "flex";
  });
});

// Close the modal when the close button is clicked
closeBtn.addEventListener("click", () => {
  videoModal.style.display = "none";
  modalVideo.pause();
  modalVideo.src = "";
});

// Close the modal when clicking outside the video
window.addEventListener("click", (e) => {
  if (e.target === videoModal) {
    videoModal.style.display = "none";
    modalVideo.pause();
    modalVideo.src = "";
  }
});
