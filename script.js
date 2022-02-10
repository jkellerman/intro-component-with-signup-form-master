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
    fname.style.borderColor = "var(--Red)";
    fname.style.borderWidth = "2px";
    placeholderFname[0].placeholder = "";
    icon.classList.add("active");

    // Remove styles when click on input field

    fname.addEventListener("click", () => {
      errorFname.innerText = "";
      fname.style.borderColor = null;
      fname.style.borderWidth = null;
      icon.classList.remove("active");
    });
  }

  if (lname.value === "" || null) {
    const icon = lname.previousElementSibling.previousElementSibling;
    e.preventDefault();
    errorLname.innerText = "Last Name cannot be empty";
    lname.style.borderColor = "var(--Red)";
    lname.style.borderWidth = "2px";
    placeholderLname[0].placeholder = "";
    icon.classList.add("active");

    lname.addEventListener("click", () => {
      errorLname.innerText = "";
      lname.style.borderColor = null;
      lname.style.borderWidth = null;
      icon.classList.remove("active");
    });
  }

  if (!email.value.includes("@") || !email.value.includes(".")) {
    const icon = email.previousElementSibling.previousElementSibling;
    e.preventDefault();
    errorEmail.innerText = "Looks like this is not an email";
    placeholderEmail[0].placeholder = "";
    email.style.borderColor = "var(--Red)";
    email.style.borderWidth = "2px";
    email.style.color = "var(--Red)";
    email.value = "email@example.com";
    icon.classList.add("active");

    email.addEventListener("click", () => {
      errorEmail.innerText = "";
      email.style.borderColor = null;
      email.style.borderWidth = null;
      email.style.color = null;
      email.value = null;
      icon.classList.remove("active");
    });
  }

  if (password.value === "" || null) {
    const icon = password.previousElementSibling.previousElementSibling;
    e.preventDefault();
    errorPassword.innerText = "Password cannot be empty";
    password.style.borderColor = "var(--Red)";
    password.style.borderWidth = "2px";
    placeholderPassword[0].placeholder = "";
    icon.classList.add("active");

    password.addEventListener("click", () => {
      errorPassword.innerText = "";
      password.style.borderColor = null;
      password.style.borderWidth = null;
      icon.classList.remove("active");
    });
  }
});
