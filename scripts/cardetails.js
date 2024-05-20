function setDefaultDeliveryDate() {
  let today = new Date();
  let deliveryDate = new Date(today.getTime() + 14 * 24 * 60 * 60 * 1000);
  let deliveryDateInput = document.getElementById("delivery-date");
  formattedDate = deliveryDate.toISOString().split("T")[0];
  deliveryDateInput.value = formattedDate;
}
window.onload = function () {
  setDefaultDeliveryDate();
};
let sentence1 = "wybrałeś samochód marki" + $carMark;
alert(sentence1);
document.getElementById("car-mark-container").innerHTML = $carMark;
document
  .getElementById("purchaseButton")
  .addEventListener("click", function () {
    if (validateForm()) {
      // Jeżeli validateForm() zwróciła true, wywołaj funkcję handlePurchase() - to również nie chce mi działać :(
      handlePurchase();
    }
  });

function handlePurchase() {
  // if (validateForm()) {
  document.getElementById("purchaseButton").onclick =
    "window.location.href='summary.html'"; // Przekierowanie do 'summary.html', które nie chce działać :(
  // }
}

function checkInput() {
  let $customerName = document.getElementById("owner-name").value;

  let regex = /^[a-zA-Z]+\s[a-zA-Z]+$/;
}

function validateForm() {
  let financeOptions = document.querySelectorAll(
    'input[name="finance"]:checked'
  );
  if (financeOptions.length !== 1) {
    document.getElementById("error-message").style.display = "block";
    return false;
  }

  let deliveryDate = document.getElementById("delivery-date").value;
  if (!deliveryDate) {
    document.getElementById("error-message").style.display = "block";
    return false;
  }

  let ownerName = document.getElementById("owner-name").value;
  let ownerNameArray = ownerName.split(" ");
  if (ownerNameArray.length !== 2) {
    document.getElementById("error-message").style.display = "block";
    return false;
  }

  document.getElementById("error-message").style.display = "none";
  document.getElementById("success-message").style.display = "block";
  return true;
}

function checkInput() {
  localStorage.setItem(
    "finance",
    document.querySelector('input[name="finance"]:checked').value
  );
  localStorage.setItem(
    "ownerName",
    document.getElementById("owner-name").value
  );
  localStorage.setItem(
    "deliveryDate",
    document.getElementById("delivery-date").value
  );
}

window.onload = function () {
  document.querySelector(
    'input[name="finance"][value="' + localStorage.getItem("finance") + '"]'
  ).checked = true;
  document.getElementById("owner-name").value =
    localStorage.getItem("ownerName");
  document.getElementById("delivery-date").value =
    localStorage.getItem("deliveryDate");
};
function clearLocalStorage() {
  localStorage.clear();
  console.log("Wyczyszczono dane z localStorage.");
}

function updateTotalPrice() {
  let totalPrice = 50000;
  const checkboxes = document.querySelectorAll(
    'input[name="accessories[]"]:checked'
  );
  checkboxes.forEach((checkbox) => {
    const accessoryPrice = parseFloat(
      checkbox.value.split(" - ")[1].replace("$", "")
    );
    totalPrice += accessoryPrice;
  });
  document.getElementById(
    "totalPrice"
  ).textContent = `Cena całkowita: ${totalPrice.toFixed(2)} PLN`;
}
const accessoryCheckboxes = document.querySelectorAll(
  'input[name="accessories[]"]'
);
accessoryCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", updateTotalPrice);
});
