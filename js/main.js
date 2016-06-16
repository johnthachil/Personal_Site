var targetUrl;
var spinner = '<div class="loader">Loading...</div>';

function dynaload() {
  $.ajaxSetup({ cache:true});
  $('.demo01').click(function() {
    targetUrl = $(this).attr("data-target") +'.html'
    console.log(targetUrl);
    $('.modal-content').html(spinner).load(targetUrl);
  });
}

$(function() {
  dynaload();
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
