// Machine ID => input value
function getValueFromInput(id) {
  const input = document.getElementById(id);
  const value = input.value;
  console.log(id, value);
  return value;
}

// Machine => Balance
function getBalance() {
  const balanceElement = document.getElementById("balance");
  const balance = balanceElement.innerText;
  return Number(balance);
}

// Machine value => set Balance
function setBalance(value) {
  const balanceElement = document.getElementById("balance");
  balanceElement.innerText = value;
}

//Machine ID => Hide all => Show ID
function showOnly(id) {
  const addMoney = document.getElementById("add-money");
  const cashout = document.getElementById("cashout");
  const history = document.getElementById("history");

  // Hide all
  addMoney.classList.add("hidden");
  cashout.classList.add("hidden");
  history.classList.add("hidden");

  // Show the selected
  const selected = document.getElementById(id);
  selected.classList.remove("hidden");
}
