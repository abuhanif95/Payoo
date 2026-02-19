document.getElementById("add-money-btn").addEventListener("click", function () {
  // get bank account
  const bankAccount = getValueFromInput("add-money-bank");
  if (bankAccount == "Select a Bank") {
    alert("Please Select a Bank");
    return;
  }

  // get bank account number
  const accountNumber = getValueFromInput("add-money-number");
  if (accountNumber.length != 11) {
    alert("Invalid Account Number");
    return;
  }

  // get amount
  const amount = getValueFromInput("add-money-amount");
  const currentBalance = getBalance();
  const newBalance = currentBalance + Number(amount);

  const pin = getValueFromInput("add-money-pin");
  if (pin == "1234") {
    alert(`Add Money Success from ${bankAccount} at ${new Date()}`);
    setBalance(newBalance);

    // history container
    const history = document.getElementById("history-container");

    // Create new div
    const newHistory = document.createElement("div");

    // add new div innerHTML
    newHistory.innerHTML = `
    <div class="p-5 transaction-card rounded-md bg-base-100">
     Add Money Success from ${bankAccount}, account number ${accountNumber} at ${new Date()}
    </div>
    `;

    // append new div in history container
    history.append(newHistory);
  } else {
    alert("Invalid Pin");
    return;
  }
});
