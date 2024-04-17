
function showConfigForm(carId) {
    var carDetails = document.querySelector("#" + carId);
    var configForm = document.getElementById("config-form");
    var carList = document.querySelector(".car-list");

    carList.style.display = "none";
    // carDetails.style.display = "block";
    configForm.style.display = "block";
}
