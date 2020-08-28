"use strict";
const form = document.getElementById("cwmForm");
const userName = document.getElementById("userName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const repeatPassword = document.getElementById("repeatPassword");
function showError(input, errMessage) {
  input.style.border = "thin solid red";
  const inputWrapper = input.parentElement;
  inputWrapper.className = "cwm-input-wrapper error";
  const errorMessage = inputWrapper.querySelector(".error");
  errorMessage.innerHTML = errMessage;
}
function successMessage(input) {
  const inputWrapper = input.parentElement;
  input.style.border = "thin solid green";
  inputWrapper.className = "cwm-input-wrapper";
  const errorMessage = inputWrapper.querySelector(".error");
  errorMessage.innerHTML = "";
}
//check email Format
function validateEmailFormat(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
// Required field check
function requiredField(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === "") {
      showError(input, "This field is required");
    } else {
      successMessage(input);
    }
  });
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  requiredField([userName, email, password, repeatPassword]);
  //   validate user input
  //   //validate username
  //   if (userName.value === "") {
  //     showError(userName, "Input field is required");
  //   } else {
  //     successMessage(userName);
  //   }
  //   //validate email
  //   if (email.value === "") {
  //     showError(email, "Input field is required");
  //   } else if (!validateEmailFormat(email.value)) {
  //     showError(email, "Invalid email address");
  //   } else {
  //     successMessage(email);
  //   }
  //   //validate password
  //   if (password.value === "") {
  //     showError(password, "Input field is required");
  //   } else if (password.value.length < 6) {
  //     showError(password, "Min 6 character password required");
  //   } else {
  //     successMessage(password);
  //   }

  //   if (repeatPassword.value === "") {
  //     showError(repeatPassword, "Input field is required");
  //   } else if (repeatPassword.value.length < 6) {
  //     showError(repeatPassword, "Min 6 character password required");
  //   } else if (password.value !== repeatPassword.value) {
  //     showError(repeatPassword, "Repeat Password Doesn't Match");
  //   } else {
  //     successMessage(repeatPassword);
  //   }
});
