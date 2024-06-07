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
document
  .getElementById("purchaseButton")
  .addEventListener("click", function () {
    if (validateForm()) {
      handlePurchase();
    }
  });

function handlePurchase() {
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

        document.addEventListener("DOMContentLoaded", () => {
          const params = new URLSearchParams(window.location.search);
          const carMark = params.get("mark");
          const carPrice = params.get("price");

          document.getElementById("car-mark").innerText = `Marka: ${carMark}`;
          document.getElementById("car-price").innerText = `Cena: $${carPrice}`;
        });
