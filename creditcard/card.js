const form = document.querySelector("#cardForm");
const errors = document.querySelector(".errors");

function displayError(message) {
  errors.textContent = message;
}

function isCardNumberValid(number) {
  return number === "1234123412341234";
}

function isCardExpired(month, year) {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1;
  const currentYear = currentDate.getFullYear();

  const fullYear = 2000 + Number(year);

  if (
    fullYear < currentYear ||
    (fullYear === currentYear && Number(month) < currentMonth)
  ) {
    return true;
  }

  return false;
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  displayError("");

  const cardNumber = document.querySelector("#cardNumber").value.trim();
  const month = document.querySelector("#month").value.trim();
  const year = document.querySelector("#year").value.trim();

  let errorMsg = "";

  if (!/^\d{16}$/.test(cardNumber)) {
    errorMsg += "Card number must be 16 digits.\n";
  } else if (!isCardNumberValid(cardNumber)) {
    errorMsg += "Card number is not valid.\n";
  }

  if (isCardExpired(month, year)) {
    errorMsg += "Card is expired.\n";
  }

  if (errorMsg !== "") {
    displayError(errorMsg);
    return;
  }

  form.innerHTML = "<h2>Payment Successful!</h2>";
});