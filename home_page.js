  $(document).ready(function() {
    // Submit the form using AJAX
    $('#contact-form').submit(function(event) {
      event.preventDefault(); // Prevent the default form submission

      var form = $(this);
      var url = form.attr('action');
      var data = form.serialize();

      $.ajax({
        type: 'POST',
        url: url,
        data: data,
        success: function(response) {
          // Handle the success response here, if needed
          console.log(response);
          // Update the page content with the returned data
          $('#content-container').html(response);
        },
        error: function(xhr, errmsg, err) {
          // Handle the error response here, if needed
          console.log(xhr.status + ": " + xhr.responseText);
        }
      });
    });
  });