$(document).ready(function () {
  $("#signupForm").submit(function (event) {
    event.preventDefault(); // Prevent the form from submitting via the browser

    // Clear previous messages
    $("#message").empty();

    // Get the values from the form inputs
    var name = $("#name").val().trim();
    var email = $("#email").val().trim();
    var password = $("#password").val().trim();

    // Simple validation
    if (name === "") {
      $("#message").html('<div class="alert alert-danger">Name is required.</div>');
      return;
    }
    if (email === "") {
      $("#message").html('<div class="alert alert-danger">Email is required.</div>');
      return;
    }
    if (password === "") {
      $("#message").html('<div class="alert alert-danger">Password is required.</div>');
      return;
    }

    // Here, you can add further validation like email format or password strength

    // If all validations pass
    $("#message").html('<div class="alert alert-success">Sign Up successful!</div>');

    // You can now send the form data to the server via AJAX, if needed

    $.ajax({
        url: 'http://localhost:8080/api/v1/auth/register',
        type: 'POST',
        contentType: 'application/json',
        data: {
            name: name,
            email: email,
            password: password
        },
        success: function(response) {
            // $("#message").html('<div class="alert alert-success">Sign Up successful!</div>');
          console.log(response)
          localStorage.setItem("token",response.data.token);
        },
        error: function(error) {
            // $("#message").html('<div class="alert alert-danger">Sign Up failed. Please try again.</div>');
          console.log(error)
        }
    });

  });
});
