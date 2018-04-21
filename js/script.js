window.sixthState = 'notify';
window.contactShowing = false;


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

  $(".sendTextImg_sm").click(function() {
    $(".appRow_sm").css('opacity', '0').promise().done(function() {

      setTimeout(function() {
        $(".appRow_sm").html("<div class='input-group mb-3 phoneInput'> <input type='text' class='form-control phoneMain' placeholder='Phone Number' aria-label='Recipient's username' aria-describedby='basic-addon2'> <div class='input-group-append'> <button class='btn btn-outline-secondary sendTextBtn' type='button'>Send</button> </div> </div>");
        $(".phoneMain").mask('(999) 999-9999');

        $(".sendTextBtn_sm").click(function() {

          $(".appRow_sm").css('opacity', '0').promise().done(function() {

            setTimeout(function() {
              $(".appRow_sm").html("<div class='col-2'> </div> <div class='col-4 p-1 appRowDefault_sm'> <img class='img-fluid' src='/img/appstore.png' /> </div>");
              setTimeout(function() {
                $(".appRow_sm").css('opacity', '1');
                $(".appRow_sm").append("<div class='col-4 p-1 appRowDefault_sm'> <img class='img-fluid' src='/img/text_sent.png' /> </div>");
              }, 500);
            }, 500);


          });

        });

        setTimeout(function() {
          $('.appRow_sm').css('opacity', '1');
        }, 300)

      }, 500)


    });




  });

  $(".sellerBtn").click(function() {
    if (window.sixthState == 'notify') {

      requestSeller(function() {
        window.sixthState = 'requestSeller';
      });

    } else if (window.sixthState == 'requestSeller') {

      getNotified(function() {
        window.sixthState = 'notify';
      });

    }
  });

  $(".contactBtn").click(function() {

    if (window.contactShowing == true) {

      window.contactShowing = false;

      if (window.sixthState == 'notify') {
        getNotified();
      } else {
        requestSeller();
      }

    } else {

      window.contactShowing = true;

      if (window.sixthState == 'notify') {

        $(".notifyDiv").fadeOut(200).promise().done(function() {
          $(".contactDiv").fadeIn();
          $(".contactBtn").html('Sign up for notifications');
        });

      } else {

        $(".requestDiv").fadeOut(200).promise().done(function() {
          $(".notiColor").css('background-color', '#F6F6F6');
          $(".footer").removeClass("text-white");
          $(".footer").addClass("text-dark");
          $(".contactBtn").html('Request to be a seller');
          $(".contactDiv").fadeIn();
        });

      }
    }






  });

  function getNotified(callback) {

    $(".requestDiv").fadeOut(200).promise().done(function() {

      $(".contactDiv").fadeOut(200).promise().done(function() {
        $(".notiColor").css('background-color', '#F6F6F6');
        $(".footer").removeClass("text-white");
        $(".footer").addClass("text-dark");
        $(".contactBtn").html('Contact Us');
        $(".notifyDiv").fadeIn();
      });



    });


    callback();

  }



  function requestSeller(callback) {

    $(".notifyDiv").fadeOut(200).promise().done(function() {

      $(".contactDiv").fadeOut(200).promise().done(function() {
        $(".notiColor").css('background-color', '#2b2a2a');
        $(".footer").removeClass("text-dark");
        $(".footer").addClass("text-white");
        $(".contactBtn").html('Contact Us');
        $(".requestDiv").fadeIn();
      });



    });

    callback();

  }



});
