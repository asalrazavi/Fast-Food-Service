//Validtion Code For Inputs

var email = document.getElementById("email");
var password = document.getElementById("password");

var email_error = document.getElementById("email_error");
var pass_error = document.getElementById("pass_error");

var email_label = document.querySelector('label[for="email"]');
var password_label = document.querySelector('label[for="password"]');

email.addEventListener("input", email_Verify);
password.addEventListener("input", pass_Verify);

function validated() {
  if (email.value.length < 9) {
    email.style.borderBottom = "1px solid red";
    email_error.style.display = "block";
    email_label.style.color = "red";
    email.focus();
    return false;
  } else {
    email.style.borderBottom = "1px solid #243b55";
    email_error.style.display = "none"; // Assuming you want to hide the error message when the input is valid
    email_label.style.color = "#243b55";
  }

  if (password.value.length < 6) {
    password.style.borderBottom = "1px solid red";
    pass_error.style.display = "block";
    password_label.style.color = "red";
    password.focus();
    return false;
  } else {
    password.style.borderBottom = "1px solid #243b55";
    pass_error.style.display = "none"; // Assuming you want to hide the error message when the input is valid
    password_label.style.color = "#243b55";
  }

  // If both email and password are valid, you might want to return true here.
  window.location.href = "./landing.html";
  return true;
}

function email_Verify() {
  if (email.value.length >= 8) {
    // email.style.border = "1px solid silver";
    email_error.style.display = "none";
    return true;
  }
}

function pass_Verify() {
  if (password.value.length >= 5) {
    // password.style.border = "1px solid silver";
    pass_error.style.display = "none";
    return true;
  }
}

// function showSuccessMessage() {
//   console.log("success");
//   document.getElementById("success_message").style.display = "block";
// }
