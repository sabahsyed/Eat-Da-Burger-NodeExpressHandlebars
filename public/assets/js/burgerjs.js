// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $("#devour").on("click", function(event) {
      var id = $("burger_id").data("id");
      var newDevour =  true;
      var newDevouredState = {
        devoured: newDevour
      };
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevouredState
      }).then(
        function() {

          // Reload the page to get the updated list
          location.reload();
        }
      );
    });

    $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
    
        var newBurger = {
         name: $("#burger_name").val().trim()
        };
    
        // Send the POST request.
        $.ajax("/api/burgers", {
          type: "POST",
          data: newBurger
        }).then(
          function() {
            console.log("created new burger");
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });
  });
  