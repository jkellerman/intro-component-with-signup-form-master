const form = document.getElementById("form");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const errorFname = document.getElementById("error-fname");
const placeholder = document.getElementsByName("fname");

form.addEventListener("submit", (e) => {
  if (fname.value === "" || null) {
    const icon = fname.previousElementSibling.previousElementSibling;
    e.preventDefault();
    errorFname.innerText = "First Name cannot be empty";
    placeholder[0].placeholder = "";
    icon.classList.add("active");
  }
});
