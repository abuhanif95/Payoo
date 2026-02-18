document.getElementById("cashout-btn").addEventListener("click", function () {
  // Agent number
  const cashoutNumberInput = document.getElementById("cashout-number");
  const cashoutNumber = cashoutNumberInput.value;
  console.log(cashoutNumber);
  if (cashoutNumber.length != 11) {
    alert("Invalid Agent Number");
  }

  // Amount
  const cashoutAmountInput = document.getElementById("cashout-amount");
  const cashoutAmount = cashoutAmountInput.value;
  console.log(cashoutAmount);

  // Current balance
  const balanceElement = document.getElementById("balance");
  const balance = balanceElement.innerText;
  console.log(balance);

  // New balance
  const newBalance = Number(balance) - Number(cashoutAmount);
  if (newBalance < 0) {
    alert("You don't have Sufficient Amount");
    return;
  }

  // Pin and verify
  const cashoutPinInput = document.getElementById("cashout-pin");
  const pin = cashoutPinInput.value;
  if (pin === "1234") {
    alert("cashout successfull");
    console.log("new balance", newBalance);
    balanceElement.innerText = newBalance;
  } else {
    alert("Invalid Pin");
    return;
  }
});
