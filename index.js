////////////////////email
document
  .getElementById("emailForm")
  .addEventListener("submit", function (event) {
    let formIsValid = true;

    const emailPattern = /^[a-zA-Z0-9._%±]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const emailInput = document.getElementById("email").value;

    const emailError = document.getElementById("emailError");

    if (!emailPattern.test(emailInput)) {
      emailError.textContent = "invalid email";

      formIsValid = false;
    } else {
      emailError.textContent = "success";
      document.getElementById("emailError").style.color = "green";
    }

    if (!formIsValid) {
      event.preventDefault();
    }

    ////////////////////email

    let userIsValid = true;

    const userPattern = /^[0-9A-Za-z]{6,16}$/;

    const userInput = document.getElementById("user").value;

    const userError = document.getElementById("userError");

    if (!userPattern.test(userInput)) {
      userError.textContent = "invalid user";

      userIsValid = false;
    } else {
      userError.textContent = "success";
      document.getElementById("userError").style.color = "green";
    }
    if (!userIsValid) {
      event.preventDefault();
    }

    ////////////////////////password

    let passIsValid = true;

    const passPatter =
      /^(?=.*?[0-9])(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[^0-9A-Za-z]).{8,32}$/;

    const passInput = document.getElementById("pass").value;

    const passError = document.getElementById("passError");

    if (!passPatter.test(passInput)) {
      passError.textContent = "invalid password";
      
      passIsValid = false;

    }

    else{

      passError.textContent = "success";
      document.getElementById('passError').style.color = "green";

    }

    if (!passIsValid) {
      event.preventDefault();
    }
  });
