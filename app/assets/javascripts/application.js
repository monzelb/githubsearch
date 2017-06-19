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
    console.log( "ready!" );
    $("#loadMore").hide()
    function delay(){
      setTimeout(function(){
        console.log($("div:hidden").length)
          if ($("div:hidden").length > 0){
            $("#loadMore").show()
          }
          else {
            $("#loadMore").hide()
          }
        }
        , 1300);
    }

    $("form").submit(function(){
      delay();
    })

});


$(function () {

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




$("a[href='#top']").click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
});

