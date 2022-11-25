const emailE1 = document.querySelector("#email");
const passwordE1 = document.querySelector("#password");
const form = document.querySelector("#login");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let isEmailValid = checkEmail(),
    isPasswordValid = checkPassword();
  let isFormValid = isEmailValid && isPasswordValid;
  if (isFormValid) {
  }
});

function checkEmail() {
  let valid = false;
  const min = 3,
    max = 25;
  const email = emailE1.value.trim();
  if (!isRequired(email)) {
    showError(emailE1, "Email Address cannot be blank.");
  } else if (!isBetween(email.length, min, max)) {
    showError(
      emailE1,
      `Username must be between ${min} and ${max} characters.`
    );
  } else {
    showSuccess(emailE1);
    valid = true;
  }
  return valid;
}

let isRequired = (value) => (value === "" ? false : true);

const isBetween = (length, min, max) =>
  length < min || length > max ? false : true;

let showError = (input, message) => {
  let formField = input.parentElement;
  formField.classList.remove("success");
  formField.classList.add("error");

  const error = formField.querySelector("small");
  error.textContent = message;
};

const showSuccess = (input) => {
  const formField = input.parentElement;
  formField.classList.remove("error");
  formField.classList.add("success");

  formField.querySelector("small").textContent = "";
};

const isPasswordValid = (password) => {
  const re = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  return re.test(password);
};

function checkPassword() {
  let valid = false;

  const password = passwordE1.value.trim();
  if (!isRequired(password)) {
    showError(passwordE1, "You have to enter the password to log in.");
  } else if (!isPasswordValid(password)) {
    showError(
      passwordE1,
      "Password must be at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number and 1 special character "
    );
  } else {
    showSuccess(passwordE1);
    valid = true;
  }
  return true;
}
