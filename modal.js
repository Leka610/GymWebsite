function loadModal() {
  fetch("signup.html")
    .then((response) => response.text())
    .then((data) => {
      document.body.insertAdjacentHTML("beforeend", data);
      document.getElementById("id01").style.display = "block";
    });
}

function closeModal() {
  const modal = document.getElementById("id01");
  if (modal) {
    modal.style.display = "none";
    modal.remove();
  }
}
