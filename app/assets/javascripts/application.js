// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require_tree .


$( document ).ready(function() {
  // Hide load more button
    $("#loadMore").hide()
    // If there are still results that havent been loaded, show load more button.
    function load(){
      setTimeout(function(){
          if ($("div:hidden").length > 0){
            $("#loadMore").show()
          }
          else {
            $("#loadMore").hide()
          }
        }
        , 2000);
    }
    $("form").submit(function(){
      load();
    })

});


$(function () {
    // Display results and slide down more when load more bottun is clicked
    $(".result").slice(0, 4).show();
    $(".user").show()
    $("#loadMore").on('click', function (e) {
        e.preventDefault();
        $("div:hidden").slice(0, 4).slideDown();
        if ($("div:hidden").length == 0) {
            $("#load").fadeOut('slow');
        }
        $('html,body').animate({
            scrollTop: $(this).offset().top
        }, 1500);
        if ($(".result:visible").length > 10){
          $('.totop a').fadeIn();
        }
    });

});

// Back to top button
$("a[href='#top']").click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
});

