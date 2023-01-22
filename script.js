const inputs = document.querySelectorAll("input");

function validateForm() {
  let estValide = true;
  inputs.forEach(function(input) {
    if (input.value === "") {
      if(input.id === "first_name"){
        document.getElementById("first_name_error").innerHTML = "First Name cannot be empty";
        input.nextElementSibling.style.display = "block";
        input.style.border = "1px solid red";
        document.getElementById("first_name_error").style.color = "red";
        estValide = false;
        var img = document.createElement("img");
        img.src = "icon-error.svg";
        input.appendChild(img);
      } else if(input.id === "last_name"){
        document.getElementById("last_name_error").innerHTML = "Last Name cannot be empty";
        input.nextElementSibling.style.display = "block";
        input.style.border = "1px solid red";
        document.getElementById("last_name_error").style.color = "red";
        estValide = false;
        var img = document.createElement("img");
        img.src = "icon-error.svg";
        input.appendChild(img);
      } else if(input.id === "email"){
        document.getElementById("email_error").innerHTML = "Looks like this is not an email";
        input.nextElementSibling.style.display = "block";
        input.style.border = "1px solid red";
        document.getElementById("email_error").style.color = "red";
        estValide = false;
        var img = document.createElement("img");
        img.src = "icon-error.svg";
        input.appendChild(img);
      }else if(input.id === "password"){
        document.getElementById("password_error").innerHTML = "Password cannot be empty";
        input.nextElementSibling.style.display = "block";
        input.style.border = "1px solid red";
        document.getElementById("password_error").style.color = "red";
        estValide = false;
        var img = document.createElement("img");
        img.src = "icon-error.svg";
        input.appendChild(img);
      }
    } else {
      input.nextElementSibling.style.display = "none";
      input.style.border = "1px solid black";
    }
  });
  if (estValide) {

  }
}
