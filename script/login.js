document.getElementById("login-btn").addEventListener("click", function () {
  //get the mobile number
  const numberInput = document.getElementById("input-number");
  const mobileNumber = numberInput.value;
  // console.log(mobileNumber);

  //get the pin
  const pinInput = document.getElementById("input-pin");
  const pin = pinInput.value;
  // console.log(pin);

  if (mobileNumber == "01827092003" && pin == "1234") {
    alert("Login Successfully");
    // window.location.replace("home.html");
    window.location.assign("/home.html");
  } else {
    alert("Login Failed");
    return;
  }
});
