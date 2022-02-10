const form = document.getElementById("form");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const errorFname = document.getElementById("error-fname");
const errorLname = document.getElementById("error-lname");
const errorEmail = document.getElementById("error-email");
const errorPassword = document.getElementById("error-password");
const placeholderFname = document.getElementsByName("fname");
const placeholderLname = document.getElementsByName("lname");
const placeholderEmail = document.getElementsByName("email");
const placeholderPassword = document.getElementsByName("password");

form.addEventListener("submit", (e) => {
  if (fname.value === "" || null) {
    const icon = fname.previousElementSibling.previousElementSibling;
    e.preventDefault();
    errorFname.innerText = "First Name cannot be empty";
    placeholderFname[0].placeholder = "";
    icon.classList.add("active");
  }

  if (lname.value === "" || null) {
    const icon = lname.previousElementSibling.previousElementSibling;
    e.preventDefault();
    errorLname.innerText = "Last Name cannot be empty";
    placeholderLname[0].placeholder = "";
    icon.classList.add("active");
  }

  if (!email.value.includes("@") || !email.value.includes(".")) {
    const icon = email.previousElementSibling.previousElementSibling;
    e.preventDefault();
    errorEmail.innerText = "Looks like this is not an email";
    placeholderEmail[0].placeholder = "";
    email.value = "email@example.com";
    email.classList.add("placeholder-red");
    icon.classList.add("active");
  }

  if (password.value === "" || null) {
    const icon = password.previousElementSibling.previousElementSibling;
    e.preventDefault();
    errorPassword.innerText = "Password cannot be empty";
    placeholderPassword[0].placeholder = "";
    icon.classList.add("active");
  }
});
