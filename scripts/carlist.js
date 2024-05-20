document.addEventListener("DOMContentLoaded", () => {
  const carItems = document.querySelectorAll(".car-item a");

  carItems.forEach((item) => {
    item.addEventListener("click", (event) => {
      event.preventDefault();

      const carMark = item.getAttribute("data-mark");
      const carPrice = item.getAttribute("data-price");

      const url = `onepage.html?mark=${encodeURIComponent(
        carMark
      )}&price=${encodeURIComponent(carPrice)}`;

      window.location.href = url;
    });
  });
});

let $carMark = document.getElementById("carMark").value();
function showConfigForm(carId) {
  let carDetails = document.querySelector("#" + carId);
  let configForm = document.getElementById("config-form");
  let carList = document.querySelector(".car-list");

  let $carMark = document.getElementById("carMark").value();

  carList.style.display = "none";
  // carDetails.style.display = "block";
  configForm.style.display = "block";
}
