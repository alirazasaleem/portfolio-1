$(document).ready(function() {
  $('.gallery .img-hover-effect').on('click', function(event) {
    var parent_object = $(this).parent('div');
    var img_src = parent_object.children('img').attr('src');
    $('#preview-img').children('img').attr('src', img_src);
    $('#preview-img').show('slow');
  });

  $('.nav.navbar-nav a').animateScroll({
    speed:1000
  });
});
