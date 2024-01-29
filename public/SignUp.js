var email = document.getElementById("email");
var password = document.getElementById("password");
var confirm_password = document.getElementById("confirm_password");
var phonenumber = document.getElementById("phonenumber");

var email_error = document.getElementById("email_error");
var pass_error = document.getElementById("pass_error");
var pass_confirm_error = document.getElementById("passconfirm_error");
var phone_error = document.getElementById("phone_error");

var email_label = document.querySelector('label[for="email"]');
var password_label = document.querySelector('label[for="password"]');
var confirm_password_label = document.querySelector(
  'label[for="confirm_password"]'
);
var phone_label = document.querySelector('label[for="phonenumber"]');

email.addEventListener("input", email_Verify);
password.addEventListener("input", pass_Verify);
confirm_password.addEventListener("input", PassConfirm_verify);
phonenumber.addEventListener("input", phone_Verify);

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

  if (
    confirm_password.value.length < 6 ||
    confirm_password.value !== password.value
  ) {
    confirm_password.style.borderBottom = "1px solid red";
    pass_confirm_error.style.display = "block";
    confirm_password_label.style.color = "red";
    confirm_password.focus();
    return false;
  } else {
    confirm_password.style.borderBottom = "1px solid #243b55";
    pass_confirm_error.style.display = "none"; // Assuming you want to hide the error message when the input is valid
    confirm_password_label.style.color = "#243b55";
  }

  if (phonenumber.value.length < 11) {
    phonenumber.style.borderBottom = "1px solid red";
    phone_error.style.display = "block";
    phone_label.style.color = "red";
    phonenumber.focus();
    return false;
  } else {
    phonenumber.style.borderBottom = "1px solid #243b55";
    phone_error.style.display = "none"; // Assuming you want to hide the error message when the input is valid
    phone_label.style.color = "#243b55";
  }

  // If both email and password are valid, you might want to return true here.
  return true;
}

function email_Verify() {
  if (email.value.length >= 8) {
    email_error.style.display = "none";
    return true;
  }
}

function pass_Verify() {
  if (password.value.length >= 5) {
    pass_error.style.display = "none";
    return true;
  }
}

function PassConfirm_verify() {
  if (password.value.length >= 5) {
    pass_error.style.display = "none";
    return true;
  }
}

function phone_Verify() {
  var phoneRegex =
    /^(0|\+98)?([ ]|-|[()]){0,2}9[1|2|3|4]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}$/;
  var phonenumber = document.getElementById("phonenumber");
  // Test if the phone number matches the regex
  if (phoneRegex.test(phonenumber)) {
    // If it matches, hide the error message
    pass_error.style.display = "none";
    return true;
  } else {
    // If it doesn't match, display the error message
    pass_error.style.display = "block"; // Assuming you want to show the error message
    return false;
  }
}
