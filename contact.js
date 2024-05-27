function validateForm() {
  // Get form input values
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  // Clear previous error messages
  document.getElementById("nameError").innerHTML = "";
  document.getElementById("emailError").innerHTML = "";
  document.getElementById("messageError").innerHTML = "";

  // Check if name is empty
  if (name == "") {
    document.getElementById("nameError").innerHTML = "Name is required";
    return false;
  }

  // Check if email is empty and valid
  if (email == "") {
    document.getElementById("emailError").innerHTML = "Email is required";
    return false;
  } else if (!validateEmail(email)) {
    document.getElementById("emailError").innerHTML = "Invalid email format";
    return false;
  }

  // Check if message is empty
  if (message == "") {
    document.getElementById("messageError").innerHTML = "Message is required";
    return false;
  }

  // Return true if all input values are valid
  return true;
}

function validateEmail(email) {
  // Regular expression to validate email format
  var regex = /^\S+@\S+\.\S+$/;
  return regex.test(email);
}
