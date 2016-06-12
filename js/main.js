var newhtml = 'flat.html';
var spinner = '<div class="loader">Loading...</div>';

function dynaload() {
  $.ajaxSetup({ cache:true});
  $('#demo01').click(function() {
    $('.modal-content').html(spinner).load(newhtml);
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
