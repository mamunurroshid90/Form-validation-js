// Error message
const name_error = document.getElementById("name_error");
const phone_error = document.getElementById("phone_error");
const email_error = document.getElementById("email_error");
const message_error = document.getElementById("message_error");
const submit_error = document.getElementById("submit_error");

// name input function
function validateName() {
  let name = document.getElementById("contact_name").value;

  if (name == 0) {
    name_error.innerHTML = "Name is required";
    return false;
  }
  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    name_error.innerHTML = "Write full name";
    return false;
  }
  name_error.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

// phone number input function
function validatePhone() {
  let phone = document.getElementById("contact_phone").value;
  if (phone == 0) {
    phone_error.innerHTML = "Phone no is required";
    return false;
  }
  if (phone.length !== 11) {
    phone_error.innerHTML = "Phone no should be 11 digits";
    return false;
  }
  if (!phone.match(/^[0-9]{11}$/)) {
    phone_error.innerHTML = "only digits please";
    return false;
  }
  phone_error.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

// email input function
function validateEmail() {
  let email = document.getElementById("contact_email").value;

  if (email.length == 0) {
    email_error.innerHTML = "Email is required";
    return false;
  }
  if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
    email_error.innerHTML = "Invalid email";
    return false;
  }
  email_error.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

// textarea input function
function validateMessage() {
  let message = document.getElementById("contact_message").value;
  let required = 30;
  let left = required - message.length;

  if (left > 0) {
    message_error.innerHTML = left + " more characters required";
    return false;
  }

  message_error.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  return true;
}

// submit button function
function validateForm() {
  if (
    !validateName() ||
    !validatePhone() ||
    !validateEmail() ||
    !validateMessage()
  ) {
    submit_error.style.display = "block";
    submit_error.innerHTML = "Please fix error to submit";
    setTimeout(function () {
      submit_error.style.display = "none";
    }, 3000);
    return false;
  }
}
