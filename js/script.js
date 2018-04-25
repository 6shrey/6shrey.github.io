window.sixthState = 'notify';
window.contactShowing = false;


$(document).ready(function() {

  $("#phoneForm").submit(function() {

    $(".phoneSendMain").fadeOut(200).promise().done(function() {
      $(".phoneSendMain").val('Text Sent');
      $(".phoneSendMain").prop('disabled', true)
      $(".phoneSendMain").fadeIn();
    });

    return false;
  });

  $(".phoneFormMb").submit(function() {
    $(".phoneSendMain").fadeOut(200).promise().done(function() {
      $(".phoneSendMain").val('Text Sent');
      $(".phoneSendMain").prop('disabled', true)
      $(".phoneSendMain").fadeIn();
    });

    return false;
  });


  maskOptions = {
    onComplete: function(cep) {

      $(".phoneInput").fadeOut().promise().done(function() {
        $(".phoneSendMain").show();
      });

    },
  }
  $('.phoneMain').mask('(000) 000-0000', maskOptions);

  setTimeout(function() {
    $('body').fadeIn(100);
  }, 200)

  function phoneSubmit(form) {
    console.log(form);
    return false;
  }


  $(".sendTextImg").click(function() {

    $(".appRow").fadeOut(500).promise().done(function() {

      $(".appRow_sm").fadeOut();
      $(".numbRow").fadeIn();

    });


  });

  $(".sendTextImg_sm").click(function() {

    $(".appRow_sm").fadeOut(200).promise().done(function() {
      $(".appRow").fadeOut();
      $(".numbRow").fadeIn();
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
