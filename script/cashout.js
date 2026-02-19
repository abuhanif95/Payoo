/* 
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
*/

document.getElementById("cashout-btn").addEventListener("click", function () {
  // get the agent number and validate
  const cashoutNumber = getValueFromInput("cashout-number");
  if (cashoutNumber.length != 11) {
    alert("Invalid number");
    return;
  }

  // get the amount
  const cashoutAmount = getValueFromInput("cashout-amount");

  // get the current balance
  //   const balanceElement = document.getElementById("balance");
  //   const balance = balanceElement.innerText;
  //   console.log(balance);

  const currentBalance = getBalance();

  // calculate the balance
  const newBalance = currentBalance - Number(cashoutAmount);
  console.log(newBalance);
  if (newBalance < 0) {
    alert("You don't have Sufficient Amount");
    return;
  }

  const pin = getValueFromInput("cashout-pin");
  if (pin === "1234") {
    alert("Cashout Successfully");
    setBalance(newBalance);

    // history container
    const history = document.getElementById("history-container");

    // Create new div
    const newHistory = document.createElement("div");

    // add new div innerHTML
    newHistory.innerHTML = `
    <div class="p-5 transaction-card rounded-md bg-base-100">
     Cashout ${cashoutAmount} Tk Success to ${cashoutNumber}, at ${new Date()}
    </div>
    `;

    // append new div in history container
    history.append(newHistory);
  } else {
    alert("Invalid Pin");
    return;
  }
});
