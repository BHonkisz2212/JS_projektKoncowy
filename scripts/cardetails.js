// var $totalPrice = document.getElementById('totalPrice')
// var testZmiennejB = document.getElementById('carModel')
// var elementDoWyświetlenia = document.getElementById('carModel')
  document
    .getElementById("purchaseButton")
    .addEventListener("click", function () {
      // Wywołaj funkcję validateForm()
      if (validateForm()) {
        // Jeżeli validateForm() zwróciła true, wywołaj funkcję handlePurchase()
        handlePurchase();
      }
    });


function checkInput() {
  var $customerName = document.getElementById('owner-name').value;
  

  var regex = /^[a-zA-Z]+\s[a-zA-Z]+$/;
}

function validateForm() {

  var financeOptions = document.querySelectorAll(
    'input[name="finance"]:checked'
  );
  if (financeOptions.length !== 1) {
    document.getElementById("error-message").style.display = "block";
    return false;
  }

  var deliveryDate = document.getElementById("delivery-date").value;
  if (!deliveryDate) {
    document.getElementById("error-message").style.display = "block";
    return false;
  }

  var ownerName = document.getElementById("owner-name").value;
  var ownerNameArray = ownerName.split(" ");
  if (ownerNameArray.length !== 2) {
    document.getElementById("error-message").style.display = "block";
    return false;
  }

  document.getElementById("error-message").style.display = "none";
  document.getElementById("success-message").style.display = "block";
  return true;
}

function handlePurchase() {
  if (validateForm()) {
    document.getElementById("purchaseButton").onclick ="window.location.href='summary.html'"; // Przekierowanie do 'summary.html', które nie chce działać :(
    }
  }
  

  function checkInput() {
    localStorage.setItem('finance', document.querySelector('input[name="finance"]:checked').value);
    localStorage.setItem('ownerName', document.getElementById('owner-name').value);
    localStorage.setItem('deliveryDate', document.getElementById('delivery-date').value);
  }

  window.onload = function() {
    document.querySelector('input[name="finance"][value="' + localStorage.getItem('finance') + '"]').checked = true;
    document.getElementById('owner-name').value = localStorage.getItem('ownerName');
  document.getElementById('delivery-date').value = localStorage.getItem('deliveryDate');
};
function clearLocalStorage() {
  localStorage.clear();
  console.log("Wyczyszczono dane z localStorage.");
}
function setDefaultDeliveryDate() {
  var today = new Date(); // Pobierz bieżącą datę
  var deliveryDate = new Date(today.getTime() + (14 * 24 * 60 * 60 * 1000)); // Dodaj 14 dni
  // Ustaw wartość pola input na sformatowaną datę
  var deliveryDateInput = document.getElementById('delivery-date');
  var formattedDate = deliveryDate.toISOString().split('T')[0]; // Format YYYY-MM-DD
  deliveryDateInput.value = formattedDate;
  // document.getElementById('delivery-date').value=localStorage.setItem('deliveryDate')
}
window.onload = function() {
  setDefaultDeliveryDate();
};
    // Funkcja do aktualizacji całkowitej ceny na podstawie zaznaczonych opcji
    function updateTotalPrice() {
      let totalPrice = 50000; // Cena bazowa
      const checkboxes = document.querySelectorAll('input[name="accessories[]"]:checked');
      checkboxes.forEach(checkbox => {
          const accessoryPrice = parseFloat(checkbox.value.split(' - ')[1].replace('$', ''));
          totalPrice += accessoryPrice;
      });
      document.getElementById('totalPrice').textContent = `Cena całkowita: ${totalPrice.toFixed(2)} PLN`;
  }
  // Nasłuchuj zmian w checkboxach
  const accessoryCheckboxes = document.querySelectorAll('input[name="accessories[]"]');
  accessoryCheckboxes.forEach(checkbox => {
      checkbox.addEventListener('change', updateTotalPrice);
  });
