
$(document).ready(function() {

  setTimeout(function() {
    $('body').fadeIn(100);
  }, 200)


  $(".sendTextImg").click(function() {
    $(".appRow").css('opacity', '0').promise().done(function() {

      setTimeout(function() {
        $(".appRow").html("<div class='input-group mb-3 phoneInput'> <input type='text' class='form-control phoneMain' placeholder='Phone Number' aria-label='Recipient's username' aria-describedby='basic-addon2'> <div class='input-group-append'> <button class='btn btn-outline-secondary sendTextBtn' type='button'>Send</button> </div> </div>");
        $(".phoneMain").mask('(999) 999-9999');

        $(".sendTextBtn").click(function() {

          $(".appRow").css('opacity', '0').promise().done(function() {

            setTimeout(function() {
              $(".appRow").html("<div class='col-md-6 p-1 appRowDefault'> <img class='img-fluid' src='/img/appstore.png' /> </div>");
              setTimeout(function() {
                $(".appRow").css('opacity', '1');
                $(".appRow").append("<div class='col-md-6 p-1 appRowDefault animated zoomInRight'> <img class='img-fluid textSentImg' src='/img/text_sent.png' /> </div>");
              }, 500);
            }, 500);


          });

        });

        setTimeout(function() {
          $('.appRow').css('opacity', '1');
        }, 300)

      }, 500)


    });




  });



});
